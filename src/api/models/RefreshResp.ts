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

import { mapValues } from '../runtime';
import type { AuthToken } from './AuthToken';
import {
    AuthTokenFromJSON,
    AuthTokenFromJSONTyped,
    AuthTokenToJSON,
    AuthTokenToJSONTyped,
} from './AuthToken';
import type { BaseResp } from './BaseResp';
import {
    BaseRespFromJSON,
    BaseRespFromJSONTyped,
    BaseRespToJSON,
    BaseRespToJSONTyped,
} from './BaseResp';

/**
 * 
 * @export
 * @interface RefreshResp
 */
export interface RefreshResp {
    /**
     * 
     * @type {BaseResp}
     * @memberof RefreshResp
     */
    baseResp?: BaseResp;
    /**
     * 
     * @type {AuthToken}
     * @memberof RefreshResp
     */
    token?: AuthToken;
}

/**
 * Check if a given object implements the RefreshResp interface.
 */
export function instanceOfRefreshResp(value: object): value is RefreshResp {
    return true;
}

export function RefreshRespFromJSON(json: any): RefreshResp {
    return RefreshRespFromJSONTyped(json, false);
}

export function RefreshRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefreshResp {
    if (json == null) {
        return json;
    }
    return {
        
        'baseResp': json['baseResp'] == null ? undefined : BaseRespFromJSON(json['baseResp']),
        'token': json['token'] == null ? undefined : AuthTokenFromJSON(json['token']),
    };
}

export function RefreshRespToJSON(json: any): RefreshResp {
    return RefreshRespToJSONTyped(json, false);
}

export function RefreshRespToJSONTyped(value?: RefreshResp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'baseResp': BaseRespToJSON(value['baseResp']),
        'token': AuthTokenToJSON(value['token']),
    };
}
