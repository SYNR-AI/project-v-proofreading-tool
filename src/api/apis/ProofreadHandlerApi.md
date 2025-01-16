# ProofreadHandlerApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**proofreadHandlerImportProofread**](ProofreadHandlerApi.md#proofreadHandlerImportProofread) | **POST** /v1/proofread/import |  |
| [**proofreadHandlerProofreadCreateMessage**](ProofreadHandlerApi.md#proofreadHandlerProofreadCreateMessage) | **POST** /v1/proofread/message/create |  |
| [**proofreadHandlerProofreadLoadEpisode**](ProofreadHandlerApi.md#proofreadHandlerProofreadLoadEpisode) | **POST** /v1/proofread/episode/load |  |
| [**proofreadHandlerProofreadPostEpisode**](ProofreadHandlerApi.md#proofreadHandlerProofreadPostEpisode) | **POST** /v1/proofread/episode/post |  |
| [**proofreadHandlerProofreadUpdateMessage**](ProofreadHandlerApi.md#proofreadHandlerProofreadUpdateMessage) | **POST** /v1/proofread/message/update |  |


<a name="proofreadHandlerImportProofread"></a>
# **proofreadHandlerImportProofread**
> ImportProofreadResp proofreadHandlerImportProofread(ImportProofreadReq)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ImportProofreadReq** | [**ImportProofreadReq**](../Models/ImportProofreadReq.md)|  | |

### Return type

[**ImportProofreadResp**](../Models/ImportProofreadResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="proofreadHandlerProofreadCreateMessage"></a>
# **proofreadHandlerProofreadCreateMessage**
> ProofreadCreateMessageResp proofreadHandlerProofreadCreateMessage(ProofreadCreateMessageReq)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ProofreadCreateMessageReq** | [**ProofreadCreateMessageReq**](../Models/ProofreadCreateMessageReq.md)|  | |

### Return type

[**ProofreadCreateMessageResp**](../Models/ProofreadCreateMessageResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="proofreadHandlerProofreadLoadEpisode"></a>
# **proofreadHandlerProofreadLoadEpisode**
> ProofreadLoadEpisodeResp proofreadHandlerProofreadLoadEpisode(ProofreadLoadEpisodeReq)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ProofreadLoadEpisodeReq** | [**ProofreadLoadEpisodeReq**](../Models/ProofreadLoadEpisodeReq.md)|  | |

### Return type

[**ProofreadLoadEpisodeResp**](../Models/ProofreadLoadEpisodeResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="proofreadHandlerProofreadPostEpisode"></a>
# **proofreadHandlerProofreadPostEpisode**
> ProofreadPostEpisodeResp proofreadHandlerProofreadPostEpisode(ProofreadPostEpisodeReq)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ProofreadPostEpisodeReq** | [**ProofreadPostEpisodeReq**](../Models/ProofreadPostEpisodeReq.md)|  | |

### Return type

[**ProofreadPostEpisodeResp**](../Models/ProofreadPostEpisodeResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="proofreadHandlerProofreadUpdateMessage"></a>
# **proofreadHandlerProofreadUpdateMessage**
> ProofreadUpdateMessageResp proofreadHandlerProofreadUpdateMessage(ProofreadUpdateMessageReq)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ProofreadUpdateMessageReq** | [**ProofreadUpdateMessageReq**](../Models/ProofreadUpdateMessageReq.md)|  | |

### Return type

[**ProofreadUpdateMessageResp**](../Models/ProofreadUpdateMessageResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

