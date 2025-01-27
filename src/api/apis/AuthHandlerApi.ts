/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  LoginReq,
  LoginResp,
  LogoutResp,
  RefreshReq,
  RefreshResp,
  Status,
} from '../models/index';
import {
    LoginReqFromJSON,
    LoginReqToJSON,
    LoginRespFromJSON,
    LoginRespToJSON,
    LogoutRespFromJSON,
    LogoutRespToJSON,
    RefreshReqFromJSON,
    RefreshReqToJSON,
    RefreshRespFromJSON,
    RefreshRespToJSON,
    StatusFromJSON,
    StatusToJSON,
} from '../models/index';

export interface AuthHandlerLoginRequest {
    loginReq: LoginReq;
}

export interface AuthHandlerLogoutRequest {
    body: object;
}

export interface AuthHandlerRefreshRequest {
    refreshReq: RefreshReq;
}

/**
 * 
 */
export class AuthHandlerApi extends runtime.BaseAPI {

    /**
     */
    async authHandlerLoginRaw(requestParameters: AuthHandlerLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginResp>> {
        if (requestParameters['loginReq'] == null) {
            throw new runtime.RequiredError(
                'loginReq',
                'Required parameter "loginReq" was null or undefined when calling authHandlerLogin().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/auth/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LoginReqToJSON(requestParameters['loginReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginRespFromJSON(jsonValue));
    }

    /**
     */
    async authHandlerLogin(requestParameters: AuthHandlerLoginRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginResp> {
        const response = await this.authHandlerLoginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async authHandlerLogoutRaw(requestParameters: AuthHandlerLogoutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LogoutResp>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling authHandlerLogout().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/auth/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LogoutRespFromJSON(jsonValue));
    }

    /**
     */
    async authHandlerLogout(requestParameters: AuthHandlerLogoutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LogoutResp> {
        const response = await this.authHandlerLogoutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async authHandlerRefreshRaw(requestParameters: AuthHandlerRefreshRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RefreshResp>> {
        if (requestParameters['refreshReq'] == null) {
            throw new runtime.RequiredError(
                'refreshReq',
                'Required parameter "refreshReq" was null or undefined when calling authHandlerRefresh().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/auth/refresh`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RefreshReqToJSON(requestParameters['refreshReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RefreshRespFromJSON(jsonValue));
    }

    /**
     */
    async authHandlerRefresh(requestParameters: AuthHandlerRefreshRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RefreshResp> {
        const response = await this.authHandlerRefreshRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
