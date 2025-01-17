import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Radio, Button, Modal, Select, Space } from 'antd';
import { ProofreadHandlerApi, ProofreadLoadEpisodeResp, Message, Cover, Proofread } from '@/api'
import { apiConfig } from '@/plugins';
import { PlusOutlined } from '@ant-design/icons';


import useLogin from '@/hooks/useLogin';

const proofreadHandlerApi = new ProofreadHandlerApi(apiConfig)

enum CoverSelectionType {
  UNDEFINED = 0,
  COVER = 1,
  BLACK_FRAME = 2,
  DELETE = 3
}

enum StatusType {
  UNPUBLISHED = 1,
  PUBLISHED = 2,
}

enum MessageType {
  NARRATION = 1,
  DIALOGUE = 2,
  PLAIN = 4,
}

const StoryEpisode = () => {
  // useLogin(() => {
  //   window.location.reload()
  // })
  // 添加状态来跟踪每行选中的值
  const { episode_slug } = useParams();

  // 从 URL slug 中提取 episode_id
  const getEpisodeId = (slug: string | undefined): number => {
    if (!slug) return 0;
    const matches = slug.match(/-(\d+)$/);
    if (matches) {
      return parseInt(matches[1]);
    }
    // 如果没有'-'，则尝试将整个slug转换为数字
    const id = parseInt(slug);
    return isNaN(id) ? 0 : id;
  };

  const containsSupervisorURL = (slug: string | undefined): boolean => {
    if (!slug) return false;
    const supervisorName = 'helen';
    return slug.toLowerCase().includes(supervisorName);
  };

  const episode_id = getEpisodeId(episode_slug);

  const [storyName, setStoryName] = React.useState<string>('');
  const [episodeTitle, setEpisodeTitle] = React.useState<string>('');
  const [messageList, setMessageList] = React.useState<Message[] | undefined>([]);
  const [isNovelModalVisible, setIsNovelModalVisible] = React.useState(false);
  const [novelContent, setNovelContent] = React.useState('');
  const [episodeStatus, setEpisodeStatus] = React.useState<StatusType>(StatusType.UNPUBLISHED);
  const [characterList, setCharacterList] = React.useState<string[]>([]);
  const [duplicateLoading, setDuplicateLoading] = React.useState(false);

  const fetchData = useCallback(async () => {
    if (!episode_id) {
      Modal.error({
        title: '错误',
        content: '无效的剧集ID'
      });
      return;
    }

    const data: ProofreadLoadEpisodeResp = await proofreadHandlerApi.proofreadHandlerProofreadLoadEpisode({
      proofreadLoadEpisodeReq: {
        episode_id: episode_id
      }
    });
    const messageList: Message[] | undefined = data.episode?.message_list;
    setMessageList(messageList);
    setStoryName(data.story?.story_name || '');
    setEpisodeTitle(data.episode?.title || '');
    setNovelContent(data.episode?.novel || '');
    setEpisodeStatus(data.episode?.status || StatusType.UNPUBLISHED);
    setCharacterList(data.story?.character_list?.map(character => character.name || '') || []);
  }, [episode_id]);

  const updateMessage = async (messageId: number, updates: {
    message?: string;
    comment?: string;
    cover_selection?: number;
    cover_uri?: string;
    message_type?: number;
    character?: string;
  }) => {
    try {
      await proofreadHandlerApi.proofreadHandlerProofreadUpdateMessage({
        proofreadUpdateMessageReq: {
          episode_id: Number(episode_id),
          message_id: messageId,
          ...updates
        }
      });
    } catch (err: any) {
      Modal.error({
        title: '错误',
        content: err.message
      });
    }
  };

  // 事件处理方法
  const eventHandlers = {
    handleRadioChange: (record: any, value: CoverSelectionType, cover?: Cover) => {
      // 更新 messageList 中对应消息的 proofread 信息,触发重新渲染
      setMessageList(messageList?.map(msg => {
        if (msg.message_id === record.messageId) {
          return {
            ...msg,
            proofread: {
              ...msg.proofread,
              cover_selection: value,
              cover: cover?.cover_uri
            }
          };
        }
        return msg;
      }));
      record.coverSelection = value;
      record.cover_uri = cover?.cover_uri;
      updateMessage(record.messageId, {
        message: record.editableSubtitle,
        cover_selection: value,
        cover_uri: cover?.cover_uri,
        comment: record.comment,
        message_type: record.proofread?.message_type || record.message_type
      });
    },

    handleSubtitleChange: (record: any, value: string) => {
      record.editableSubtitle = value;
    },

    handleSubtitleTypeChange: (record: any, value: number) => {
      // 更新本地状态以立即显示变化
      setMessageList(messageList?.map(msg => {
        if (msg.message_id === record.messageId) {
          return {
            ...msg,
            proofread: {
              ...msg.proofread || {},
              message_type: value
            }
          };
        }
        return msg;
      }));
      record.message_type = value;
      updateMessage(record.messageId, {
        message: record.editableSubtitle,
        cover_selection: record.coverSelection,
        cover_uri: record.cover_uri,
        comment: record.comment,
        message_type: value
      });
    },

    handleSubtitleBlur: (record: any) => {
      updateMessage(record.messageId, {
        message: record.editableSubtitle,
        cover_selection: record.coverSelection,
        cover_uri: record.cover_uri,
        comment: record.comment,
        message_type: record.proofread?.message_type || record.message_type
      });
    },

    handleCommentChange: (record: any, value: string) => {
      record.comment = value;
    },

    handleCommentBlur: (record: any) => {
      updateMessage(record.messageId, {
        message: record.editableSubtitle,
        cover_selection: record.coverSelection,
        cover_uri: record.cover_uri,
        comment: record.comment,
        message_type: record.proofread?.message_type || record.message_type
      });
    },

    handleComplete: () => {
      const unproofreadItems = messageList?.filter(message => !message.proofread);

      if (unproofreadItems && unproofreadItems.length > 0) {
        unproofreadItems.forEach(item => {
          Modal.error({
            title: '提示',
            content: `第${item.frame_id}项未校对`
          });
        });
        return;
      }

      proofreadHandlerApi.proofreadHandlerProofreadPostEpisode({
        proofreadPostEpisodeReq: {
          episode_id: Number(episode_id)
        }
      }).then(() => {
        Modal.success({
          title: '提示',
          content: '提交成功'
        });
        window.location.reload();
      }).catch(err => {
        Modal.error({
          title: '错误',
          content: err.message
        });
      });
    },

    showNovelModal: () => {
      setIsNovelModalVisible(true);
    },

    handleCharacterChange: (record: any, value: string) => {
      // 更新本地状态以立即显示变化
      setMessageList(messageList?.map(msg => {
        if (msg.message_id === record.messageId) {
          return {
            ...msg,
            proofread: {
              ...msg.proofread || {},
              character: value
            }
          };
        }
        return msg;
      }));


      updateMessage(record.messageId, {
        message: record.editableSubtitle,
        cover_selection: record.coverSelection,
        cover_uri: record.cover_uri,
        comment: record.comment,
        message_type: record.proofread?.messageType || record.messageType,
        character: value
      });
    },

    handleDuplicateMessage: async (record: any, index: number) => {
      setDuplicateLoading(true);
      try {
        await proofreadHandlerApi.proofreadHandlerProofreadCreateMessage(
          {
            proofreadCreateMessageReq: {
              episode_id: Number(episode_id),
              idx: record.key+1,
              subtitle: record.subtitle,
              message_type: record.messageType,
              character: record.character,
              shot_description: record.shotDescription,
              cover_list: record.coverList,
            }
          }
        );
        // 获取最新数据
        const data: ProofreadLoadEpisodeResp = await proofreadHandlerApi.proofreadHandlerProofreadLoadEpisode({
          proofreadLoadEpisodeReq: {
            episode_id: episode_id
          }
        });
        // 直接更新 messageList 状态
        setMessageList(data.episode?.message_list);
      } catch (error) {
        Modal.error({
          title: '错误',
          content: '复制消息失败'
        });
      } finally {
        setDuplicateLoading(false);
      }
    },
  };

  useEffect(() => {
    fetchData();

    return () => {
      // cleanup
    };
  }, [fetchData]);



  // 定义列
  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      key: 'index',
      width: 80,
      render: (_, record, index) => (
        <Space>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ marginRight: 4 }}>{index + 1}</span>
            <Button
              type="link"
              icon={<PlusOutlined />}
              size="small"
              onClick={() => eventHandlers.handleDuplicateMessage(record, index)}
            />
          </div>
        </Space>
      ),
    },
    {
      title: 'Shot Description',
      dataIndex: 'shotDescription',
      key: 'shotDescription',
      width: 200,
      render: (text) => <div style={{ minWidth: 180 }}>{text}</div>,
    },
    {
      title: 'Original Subtitle',
      dataIndex: 'originalSubtitle',
      key: 'originalSubtitle',
      width: 250,
      render: (text, record) => (
        <div style={{ maxWidth: 300 }}>{text}</div>
      ),
    },
    {
      title: 'Subtitle Type',
      dataIndex: 'messageType',
      key: 'messageType',
      width: 150,
      render: (type: number, record) => (
        <Radio.Group
          value={type}
          onChange={(e) => eventHandlers.handleSubtitleTypeChange(record, e.target.value)}
          disabled={episodeStatus === StatusType.PUBLISHED}
        >
          <Radio value={MessageType.NARRATION}>narration</Radio>
          <Radio value={MessageType.DIALOGUE}>dialogue</Radio>
          <Radio value={MessageType.PLAIN}>plain</Radio>
        </Radio.Group>
      ),
    },
    {
      title: 'Character',
      dataIndex: 'character',
      key: 'character',
      width: 120,
      render: (_, record) => {
        return record.messageType === MessageType.DIALOGUE ? (
          <Select
            style={{ width: '100%' }}
            value={record.character}
            onChange={(value) => eventHandlers.handleCharacterChange(record, value)}
            disabled={episodeStatus === StatusType.PUBLISHED}
          >
            {characterList.map(char => (
              <Select.Option key={char} value={char}>{char}</Select.Option>
            ))}
          </Select>
        ) : null;
      }
    },
    {
      title: 'Subtitle',
      dataIndex: 'subtitle',
      key: 'subtitle',
      width: 250,
      render: (text, record) => (
        <textarea
          style={{
            width: '100%',
            height: '350px',
            maxHeight: '350px',
            resize: 'none',
            overflowY: 'auto'
          }}
          defaultValue={text}
          onChange={(e) => eventHandlers.handleSubtitleChange(record, e.target.value)}
          onBlur={() => eventHandlers.handleSubtitleBlur(record)}
          disabled={episodeStatus === StatusType.PUBLISHED}
        />
      ),
    },
    {
      title: 'Illustration 1',
      dataIndex: 'illustration1',
      key: 'illustration1',
      width: 300,
      render: (cover: Cover, record) => (
        <Radio
          checked={record.coverSelection === CoverSelectionType.COVER && record.cover_uri === cover.cover_uri}
          onChange={() => eventHandlers.handleRadioChange(record, CoverSelectionType.COVER, cover)}
          disabled={episodeStatus === StatusType.PUBLISHED}
        >
          <img src={cover.cover_url} alt="Illustration 1" style={{ width: 350 }} />
        </Radio>
      ),
    },
    {
      title: 'Illustration 2',
      dataIndex: 'illustration2',
      key: 'illustration2',
      width: 300,
      render: (cover: Cover, record) => (
        <Radio
          checked={record.coverSelection === CoverSelectionType.COVER && record.cover_uri === cover.cover_uri}
          onChange={() => eventHandlers.handleRadioChange(record, CoverSelectionType.COVER, cover)}
          disabled={episodeStatus === StatusType.PUBLISHED}
        >
          <img src={cover.cover_url} alt="Illustration 2" style={{ width: 350 }} />
        </Radio>
      ),
    },
    {
      title: 'Illustration 3',
      dataIndex: 'illustration3',
      key: 'illustration3',
      width: 300,
      render: (cover: Cover, record) => (
        <Radio
          checked={record.coverSelection === CoverSelectionType.COVER && record.cover_uri === cover.cover_uri}
          onChange={() => eventHandlers.handleRadioChange(record, CoverSelectionType.COVER, cover)}
          disabled={episodeStatus === StatusType.PUBLISHED}
        >
          <img src={cover.cover_url} alt="Illustration 3" style={{ width: 350 }} />
        </Radio>
      ),
    },
    {
      title: 'Illustration 4',
      dataIndex: 'illustration4',
      key: 'illustration4',
      width: 300,
      render: (cover: Cover, record) => (
        <Radio
          checked={record.coverSelection === CoverSelectionType.COVER && record.cover_uri === cover.cover_uri}
          onChange={() => eventHandlers.handleRadioChange(record, CoverSelectionType.COVER, cover)}
          disabled={episodeStatus === StatusType.PUBLISHED}
        >
          <img src={cover.cover_url} alt="Illustration 4" style={{ width: 300 }} />
        </Radio>
      ),
    },
    {
      title: 'Black Frame',
      dataIndex: 'illustration5',
      key: 'illustration5',
      width: 100,
      render: (_, record) => (
        <Radio
          checked={record.coverSelection === CoverSelectionType.BLACK_FRAME}
          onChange={() => eventHandlers.handleRadioChange(record, CoverSelectionType.BLACK_FRAME)}
          disabled={episodeStatus === StatusType.PUBLISHED}
        >
          <div style={{ width: 30, height: 30, background: 'black' }} />
        </Radio>
      ),
    },
    {
      title: 'Delete',
      dataIndex: 'deleteShot',
      key: 'deleteShot',
      width: 100,
      render: (_, record) => (
        <Radio
          checked={record.coverSelection === CoverSelectionType.DELETE}
          onChange={() => eventHandlers.handleRadioChange(record, CoverSelectionType.DELETE)}
          disabled={episodeStatus === StatusType.PUBLISHED}
        >
          <div style={{ fontSize: 30, color: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            X
          </div>
        </Radio>
      ),
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      width: 250,
      render: (text, record) => (
        <textarea
          style={{
            width: '100%',
            height: '150px',
            maxHeight: '150px',
            resize: 'none',
            overflowY: 'auto'
          }}
          defaultValue={text}
          onChange={(e) => eventHandlers.handleCommentChange(record, e.target.value)}
          onBlur={() => eventHandlers.handleCommentBlur(record)}
          disabled={episodeStatus === StatusType.PUBLISHED}
        />
      ),
    }
  ];

  // 定义数据
  const data = messageList?.map((message, index) => ({
    key: message.frame_id,
    messageId: message.message_id,
    shotDescription: message.shot_description,
    originalSubtitle: message.subtitle,
    messageType: message?.proofread?.message_type || message.message_type,
    character: message?.proofread?.character || message.character,
    subtitle: message?.proofread?.subtitle || message.subtitle,
    coverList: message.cover_list_v2?.map(cover => cover.cover_uri),
    illustration1: message.cover_list_v2?.[0],
    illustration2: message.cover_list_v2?.[1],
    illustration3: message.cover_list_v2?.[2],
    illustration4: message.cover_list_v2?.[3],
    illustration5: message.cover_list_v2?.[4],
    comment: message?.proofread?.comment || '',
    coverSelection: message?.proofread?.cover_selection || undefined,
    cover_uri: message?.proofread?.cover || '',
  }));

  console.log(data)

  return (
    <div style={{ padding: 20, width: '100vw' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ color: 'black', fontSize: 18, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
          <span>{storyName}</span>
          <span style={{ fontSize: 18, color: 'gray', marginLeft: 16 }}>{episodeTitle}</span>
          <span
            style={{
              marginLeft: 16,
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: 14,
              backgroundColor: episodeStatus === StatusType.PUBLISHED ? '#52c41a' : '#faad14',
              color: 'white'
            }}
          >
            {episodeStatus === StatusType.PUBLISHED ? 'PUBLISHED' : 'UNPUBLISHED'}
          </span>
        </div>
        <div>
          <Button
            style={{ marginRight: 8 }}
            onClick={eventHandlers.showNovelModal}
          >
            Original Script
          </Button>
          {containsSupervisorURL(episode_slug) && (
            <Button
              type="primary"
              onClick={eventHandlers.handleComplete}
              disabled={episodeStatus === StatusType.PUBLISHED}
            >
              Complete
            </Button>
          )}
        </div>
      </div>

      <Modal
        title="Original Script"
        open={isNovelModalVisible}
        onOk={() => setIsNovelModalVisible(false)}
        onCancel={() => setIsNovelModalVisible(false)}
        width={800}
      >
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {novelContent}
        </pre>
      </Modal>

      <Table
        columns={columns as any}
        dataSource={data}
        pagination={false}
        scroll={{ x: 'max-content' }}
        style={{ overflowX: 'auto' }}
        loading={{
          spinning: duplicateLoading,
          tip: 'loading...',
          style: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000
          }
        }}
      />
    </div>
  );
};

export default StoryEpisode;