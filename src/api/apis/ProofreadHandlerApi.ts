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
  ImportProofreadReq,
  ImportProofreadResp,
  ProofreadCreateMessageReq,
  ProofreadCreateMessageResp,
  ProofreadLoadEpisodeReq,
  ProofreadLoadEpisodeResp,
  ProofreadPostEpisodeReq,
  ProofreadPostEpisodeResp,
  ProofreadUpdateMessageReq,
  ProofreadUpdateMessageResp,
  Status,
} from '../models/index';
import {
    ImportProofreadReqFromJSON,
    ImportProofreadReqToJSON,
    ImportProofreadRespFromJSON,
    ImportProofreadRespToJSON,
    ProofreadCreateMessageReqFromJSON,
    ProofreadCreateMessageReqToJSON,
    ProofreadCreateMessageRespFromJSON,
    ProofreadCreateMessageRespToJSON,
    ProofreadLoadEpisodeReqFromJSON,
    ProofreadLoadEpisodeReqToJSON,
    ProofreadLoadEpisodeRespFromJSON,
    ProofreadLoadEpisodeRespToJSON,
    ProofreadPostEpisodeReqFromJSON,
    ProofreadPostEpisodeReqToJSON,
    ProofreadPostEpisodeRespFromJSON,
    ProofreadPostEpisodeRespToJSON,
    ProofreadUpdateMessageReqFromJSON,
    ProofreadUpdateMessageReqToJSON,
    ProofreadUpdateMessageRespFromJSON,
    ProofreadUpdateMessageRespToJSON,
    StatusFromJSON,
    StatusToJSON,
} from '../models/index';

export interface ProofreadHandlerImportProofreadRequest {
    importProofreadReq: ImportProofreadReq;
}

export interface ProofreadHandlerProofreadCreateMessageRequest {
    proofreadCreateMessageReq: ProofreadCreateMessageReq;
}

export interface ProofreadHandlerProofreadLoadEpisodeRequest {
    proofreadLoadEpisodeReq: ProofreadLoadEpisodeReq;
}

export interface ProofreadHandlerProofreadPostEpisodeRequest {
    proofreadPostEpisodeReq: ProofreadPostEpisodeReq;
}

export interface ProofreadHandlerProofreadUpdateMessageRequest {
    proofreadUpdateMessageReq: ProofreadUpdateMessageReq;
}

/**
 * 
 */
export class ProofreadHandlerApi extends runtime.BaseAPI {

    /**
     */
    async proofreadHandlerImportProofreadRaw(requestParameters: ProofreadHandlerImportProofreadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ImportProofreadResp>> {
        if (requestParameters['importProofreadReq'] == null) {
            throw new runtime.RequiredError(
                'importProofreadReq',
                'Required parameter "importProofreadReq" was null or undefined when calling proofreadHandlerImportProofread().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/proofread/import`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ImportProofreadReqToJSON(requestParameters['importProofreadReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ImportProofreadRespFromJSON(jsonValue));
    }

    /**
     */
    async proofreadHandlerImportProofread(requestParameters: ProofreadHandlerImportProofreadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ImportProofreadResp> {
        const response = await this.proofreadHandlerImportProofreadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async proofreadHandlerProofreadCreateMessageRaw(requestParameters: ProofreadHandlerProofreadCreateMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProofreadCreateMessageResp>> {
        if (requestParameters['proofreadCreateMessageReq'] == null) {
            throw new runtime.RequiredError(
                'proofreadCreateMessageReq',
                'Required parameter "proofreadCreateMessageReq" was null or undefined when calling proofreadHandlerProofreadCreateMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/proofread/message/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProofreadCreateMessageReqToJSON(requestParameters['proofreadCreateMessageReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProofreadCreateMessageRespFromJSON(jsonValue));
    }

    /**
     */
    async proofreadHandlerProofreadCreateMessage(requestParameters: ProofreadHandlerProofreadCreateMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProofreadCreateMessageResp> {
        const response = await this.proofreadHandlerProofreadCreateMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async proofreadHandlerProofreadLoadEpisodeRaw(requestParameters: ProofreadHandlerProofreadLoadEpisodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProofreadLoadEpisodeResp>> {
        if (requestParameters['proofreadLoadEpisodeReq'] == null) {
            throw new runtime.RequiredError(
                'proofreadLoadEpisodeReq',
                'Required parameter "proofreadLoadEpisodeReq" was null or undefined when calling proofreadHandlerProofreadLoadEpisode().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/proofread/episode/load`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProofreadLoadEpisodeReqToJSON(requestParameters['proofreadLoadEpisodeReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProofreadLoadEpisodeRespFromJSON(jsonValue));
    }

    /**
     */
    async proofreadHandlerProofreadLoadEpisode(requestParameters: ProofreadHandlerProofreadLoadEpisodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProofreadLoadEpisodeResp> {
        const response = await this.proofreadHandlerProofreadLoadEpisodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async proofreadHandlerProofreadPostEpisodeRaw(requestParameters: ProofreadHandlerProofreadPostEpisodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProofreadPostEpisodeResp>> {
        if (requestParameters['proofreadPostEpisodeReq'] == null) {
            throw new runtime.RequiredError(
                'proofreadPostEpisodeReq',
                'Required parameter "proofreadPostEpisodeReq" was null or undefined when calling proofreadHandlerProofreadPostEpisode().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/proofread/episode/post`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProofreadPostEpisodeReqToJSON(requestParameters['proofreadPostEpisodeReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProofreadPostEpisodeRespFromJSON(jsonValue));
    }

    /**
     */
    async proofreadHandlerProofreadPostEpisode(requestParameters: ProofreadHandlerProofreadPostEpisodeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProofreadPostEpisodeResp> {
        const response = await this.proofreadHandlerProofreadPostEpisodeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async proofreadHandlerProofreadUpdateMessageRaw(requestParameters: ProofreadHandlerProofreadUpdateMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProofreadUpdateMessageResp>> {
        if (requestParameters['proofreadUpdateMessageReq'] == null) {
            throw new runtime.RequiredError(
                'proofreadUpdateMessageReq',
                'Required parameter "proofreadUpdateMessageReq" was null or undefined when calling proofreadHandlerProofreadUpdateMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/proofread/message/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProofreadUpdateMessageReqToJSON(requestParameters['proofreadUpdateMessageReq']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProofreadUpdateMessageRespFromJSON(jsonValue));
    }

    /**
     */
    async proofreadHandlerProofreadUpdateMessage(requestParameters: ProofreadHandlerProofreadUpdateMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProofreadUpdateMessageResp> {
        const response = await this.proofreadHandlerProofreadUpdateMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
