/* tslint:disable */
/* eslint-disable */
/**
 * StoryVHandler API
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
 * @interface RegisterResp
 */
export interface RegisterResp {
    /**
     * 
     * @type {BaseResp}
     * @memberof RegisterResp
     */
    baseResp?: BaseResp;
    /**
     * 
     * @type {number}
     * @memberof RegisterResp
     */
    device_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterResp
     */
    user_id?: number;
}

/**
 * Check if a given object implements the RegisterResp interface.
 */
export function instanceOfRegisterResp(value: object): value is RegisterResp {
    return true;
}

export function RegisterRespFromJSON(json: any): RegisterResp {
    return RegisterRespFromJSONTyped(json, false);
}

export function RegisterRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterResp {
    if (json == null) {
        return json;
    }
    return {
        
        'baseResp': json['baseResp'] == null ? undefined : BaseRespFromJSON(json['baseResp']),
        'device_id': json['device_id'] == null ? undefined : json['device_id'],
        'user_id': json['user_id'] == null ? undefined : json['user_id'],
    };
}

export function RegisterRespToJSON(json: any): RegisterResp {
    return RegisterRespToJSONTyped(json, false);
}

export function RegisterRespToJSONTyped(value?: RegisterResp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'baseResp': BaseRespToJSON(value['baseResp']),
        'device_id': value['device_id'],
        'user_id': value['user_id'],
    };
}

