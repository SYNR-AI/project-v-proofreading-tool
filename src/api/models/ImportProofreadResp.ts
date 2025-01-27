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
 * @interface ImportProofreadResp
 */
export interface ImportProofreadResp {
    /**
     * 
     * @type {BaseResp}
     * @memberof ImportProofreadResp
     */
    baseResp?: BaseResp;
    /**
     * 
     * @type {number}
     * @memberof ImportProofreadResp
     */
    story_id?: number;
}

/**
 * Check if a given object implements the ImportProofreadResp interface.
 */
export function instanceOfImportProofreadResp(value: object): value is ImportProofreadResp {
    return true;
}

export function ImportProofreadRespFromJSON(json: any): ImportProofreadResp {
    return ImportProofreadRespFromJSONTyped(json, false);
}

export function ImportProofreadRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportProofreadResp {
    if (json == null) {
        return json;
    }
    return {
        
        'baseResp': json['baseResp'] == null ? undefined : BaseRespFromJSON(json['baseResp']),
        'story_id': json['story_id'] == null ? undefined : json['story_id'],
    };
}

export function ImportProofreadRespToJSON(json: any): ImportProofreadResp {
    return ImportProofreadRespToJSONTyped(json, false);
}

export function ImportProofreadRespToJSONTyped(value?: ImportProofreadResp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'baseResp': BaseRespToJSON(value['baseResp']),
        'story_id': value['story_id'],
    };
}

