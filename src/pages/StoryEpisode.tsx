import React from 'react';
import { useParams } from 'react-router-dom';
import { Table, Radio, Button } from 'antd';

import useLogin from '@/hooks/useLogin';

const StoryEpisode = () => {
  useLogin(() => {
    window.location.reload()
  })
  // 添加状态来跟踪每行选中的值
  const { story_id, num } = useParams();

  const [selectedValues, setSelectedValues] = React.useState<Record<string, number>>({});
  const [subtitles, setSubtitles] = React.useState<Record<string, string>>({});

  // 定义列
  const columns = [
    {
      title: '#',
      dataIndex: 'rowNumber',
      key: 'rowNumber',
      width: 60,
      render: (_, __, index) => <span>{index + 1}</span>,
    },
    {
      title: 'Shot Description',
      dataIndex: 'shotDescription',
      key: 'shotDescription',
      render: (text) => <span>{text}</span>, // 只读文本
    },
    {
      title: 'Subtitle',
      dataIndex: 'subtitle',
      key: 'subtitle',
      render: (text, record) => (
        <textarea
          defaultValue={text}
          onChange={(e) => handleSubtitleChange(record.key, e.target.value)}
        />
      ),
    },
    {
      title: 'Illustration 1',
      dataIndex: 'illustration1',
      key: 'illustration1',
      render: (url, record) => (
        <Radio checked={selectedValues[record.key] === 0} onChange={() => handleRadioChange(record.key, 0)}>
          <img src={url} alt="Illustration 1" style={{ width: 100 }} />
        </Radio>
      ),
    },
    {
      title: 'Illustration 2',
      dataIndex: 'illustration2',
      key: 'illustration2',
      render: (url, record) => (
        <Radio checked={selectedValues[record.key] === 1} onChange={() => handleRadioChange(record.key, 1)}>
          <img src={url} alt="Illustration 2" style={{ width: 100 }} />
        </Radio>
      ),
    },
    {
      title: 'Illustration 3',
      dataIndex: 'illustration3',
      key: 'illustration3',
      render: (url, record) => (
        <Radio checked={selectedValues[record.key] === 2} onChange={() => handleRadioChange(record.key, 2)}>
          <img src={url} alt="Illustration 3" style={{ width: 100 }} />
        </Radio>
      ),
    },
    {
      title: 'Illustration 4',
      dataIndex: 'illustration4',
      key: 'illustration4',
      render: (url, record) => (
        <Radio checked={selectedValues[record.key] === 3} onChange={() => handleRadioChange(record.key, 3)}>
          <img src={url} alt="Illustration 4" style={{ width: 100 }} />
        </Radio>
      ),
    },
    {
      title: 'Illustration 5 (Black Frame)',
      dataIndex: 'illustration5',
      key: 'illustration5',
      render: (_, record) => (
        <Radio checked={selectedValues[record.key] === 4} onChange={() => handleRadioChange(record.key, 4)}>
          <div style={{ width: 100, height: 100, background: 'black' }} />
        </Radio>
      ),
    },
    {
      title: 'Delete Shot',
      dataIndex: 'deleteShot',
      key: 'deleteShot',
      render: (_, record) => (
        <Radio checked={selectedValues[record.key] === 5} onChange={() => handleRadioChange(record.key, 5)}>
          <Button danger>X</Button>
        </Radio>
      ),
    },
  ];

  const handleRadioChange = (recordKey: string, value: number) => {
    setSelectedValues(prev => ({
      ...prev,
      [recordKey]: value
    }));
    console.log(`Selected ID: ${recordKey}, Value: ${value}`);
  };

  // 定义数据
  const data = [
    {
      key: '1',
      shotDescription: 'Text, read-only',
      subtitle: 'Text, writable',
      illustration1: '/path/to/image1.jpg',
      illustration2: '/path/to/image2.jpg',
      illustration3: '/path/to/image3.jpg',
      illustration4: '/path/to/image4.jpg',
      illustration5: '', // 黑色背景
    },
    {
      key: '2',
      shotDescription: 'Text, read-only2',
      subtitle: 'Text, writable2',
      illustration1: '/path/to/image1.jpg',
      illustration2: '/path/to/image2.jpg',
      illustration3: '/path/to/image3.jpg',
      illustration4: '/path/to/image4.jpg',
      illustration5: '', // 黑色背景
    },
    {
      key: '3',
      shotDescription: 'Text, read-only3',
      subtitle: 'Text, writable3',
      illustration1: '/path/to/image1.jpg',
      illustration2: '/path/to/image2.jpg',
      illustration3: '/path/to/image3.jpg',
      illustration4: '/path/to/image4.jpg',
      illustration5: '', // 黑色背景
    },
    {
      key: '4',
      shotDescription: 'Text, read-only4',
      subtitle: 'Text, writable4',
      illustration1: '/path/to/image1.jpg',
      illustration2: '/path/to/image2.jpg',
      illustration3: '/path/to/image3.jpg',
      illustration4: '/path/to/image4.jpg',
      illustration5: '', // 黑色背景
    },
  ];

  // 添加处理完成按钮的函数
  const handleComplete = () => {
    // 检查是否有未选择的行
    const unselectedRows = data.map((row, index) => ({
      index: index + 1,
      key: row.key,
      selected: selectedValues[row.key] !== undefined
    })).filter(row => !row.selected);

    if (unselectedRows.length > 0) {
      const rowNumbers = unselectedRows.map(row => row.index).join(', ');
      alert(`请为第 ${rowNumbers} 帧选择一个选项`);
      return;
    }

    const selections = data.map(row => ({
      shotId: row.key,
      selectedOption: selectedValues[row.key],
      subtitle: row.subtitle // 如果需要包含编辑后的字幕
    }));
    console.log('完成选择的数据：', selections);
  };

  const handleSubtitleChange = (recordKey: string, value: string) => {
    setSubtitles(prev => ({
      ...prev,
      [recordKey]: value
    }));
  };

  return (
    <div>
      <div style={{ marginBottom: 16, textAlign: 'right' }}>
        <Button
          style={{ marginRight: 8 }}
          onClick={() => console.log('查看原始脚本')}
        >
          Original Script
        </Button>
        <Button
          type="primary"
          onClick={handleComplete}
        >
          Complete
        </Button>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default StoryEpisode;