# AuthHandlerApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**authHandlerLogin**](AuthHandlerApi.md#authHandlerLogin) | **POST** /v1/auth/login |  |
| [**authHandlerLogout**](AuthHandlerApi.md#authHandlerLogout) | **POST** /v1/auth/logout |  |
| [**authHandlerRefresh**](AuthHandlerApi.md#authHandlerRefresh) | **POST** /v1/auth/refresh |  |


<a name="authHandlerLogin"></a>
# **authHandlerLogin**
> LoginResp authHandlerLogin(LoginReq)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **LoginReq** | [**LoginReq**](../Models/LoginReq.md)|  | |

### Return type

[**LoginResp**](../Models/LoginResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="authHandlerLogout"></a>
# **authHandlerLogout**
> LogoutResp authHandlerLogout(body)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | **Object**|  | |

### Return type

[**LogoutResp**](../Models/LogoutResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="authHandlerRefresh"></a>
# **authHandlerRefresh**
> RefreshResp authHandlerRefresh(RefreshReq)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **RefreshReq** | [**RefreshReq**](../Models/RefreshReq.md)|  | |

### Return type

[**RefreshResp**](../Models/RefreshResp.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

