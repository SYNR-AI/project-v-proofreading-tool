# StoryVHandlerApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**storyVHandlerGetEpisodeMessages**](StoryVHandlerApi.md#storyVHandlerGetEpisodeMessages) | **GET** /v1/episodes/messages |  |
| [**storyVHandlerGetStory**](StoryVHandlerApi.md#storyVHandlerGetStory) | **GET** /v1/stories/get |  |
| [**storyVHandlerRegister**](StoryVHandlerApi.md#storyVHandlerRegister) | **POST** /v1/user/register |  |
| [**storyVHandlerScanStory**](StoryVHandlerApi.md#storyVHandlerScanStory) | **GET** /v1/stories/scan |  |
| [**storyVHandlerSendUserActionLog**](StoryVHandlerApi.md#storyVHandlerSendUserActionLog) | **POST** /v1/track/user-action-log |  |


<a name="storyVHandlerGetEpisodeMessages"></a>
# **storyVHandlerGetEpisodeMessages**
> GetEpisodeMessagesResp storyVHandlerGetEpisodeMessages(episode\_id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **episode\_id** | **Long**|  | [optional] [default to null] |

### Return type

[**GetEpisodeMessagesResp**](../Models/GetEpisodeMessagesResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="storyVHandlerGetStory"></a>
# **storyVHandlerGetStory**
> GetStoryResp storyVHandlerGetStory(story\_id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **story\_id** | **Long**|  | [optional] [default to null] |

### Return type

[**GetStoryResp**](../Models/GetStoryResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="storyVHandlerRegister"></a>
# **storyVHandlerRegister**
> RegisterResp storyVHandlerRegister(body)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | **Object**|  | |

### Return type

[**RegisterResp**](../Models/RegisterResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="storyVHandlerScanStory"></a>
# **storyVHandlerScanStory**
> ScanStoryResp storyVHandlerScanStory(cursor)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **cursor** | **Long**|  | [optional] [default to null] |

### Return type

[**ScanStoryResp**](../Models/ScanStoryResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="storyVHandlerSendUserActionLog"></a>
# **storyVHandlerSendUserActionLog**
> UserActionLogResp storyVHandlerSendUserActionLog(UserActionLogReq)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UserActionLogReq** | [**UserActionLogReq**](../Models/UserActionLogReq.md)|  | |

### Return type

[**UserActionLogResp**](../Models/UserActionLogResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

