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
 * @interface ProofreadDeleteMessageResp
 */
export interface ProofreadDeleteMessageResp {
    /**
     * 
     * @type {BaseResp}
     * @memberof ProofreadDeleteMessageResp
     */
    baseResp?: BaseResp;
}

/**
 * Check if a given object implements the ProofreadDeleteMessageResp interface.
 */
export function instanceOfProofreadDeleteMessageResp(value: object): value is ProofreadDeleteMessageResp {
    return true;
}

export function ProofreadDeleteMessageRespFromJSON(json: any): ProofreadDeleteMessageResp {
    return ProofreadDeleteMessageRespFromJSONTyped(json, false);
}

export function ProofreadDeleteMessageRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProofreadDeleteMessageResp {
    if (json == null) {
        return json;
    }
    return {
        
        'baseResp': json['baseResp'] == null ? undefined : BaseRespFromJSON(json['baseResp']),
    };
}

export function ProofreadDeleteMessageRespToJSON(json: any): ProofreadDeleteMessageResp {
    return ProofreadDeleteMessageRespToJSONTyped(json, false);
}

export function ProofreadDeleteMessageRespToJSONTyped(value?: ProofreadDeleteMessageResp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'baseResp': BaseRespToJSON(value['baseResp']),
    };
}

