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
/**
 * 
 * @export
 * @interface ProofreadDeleteMessageReq
 */
export interface ProofreadDeleteMessageReq {
    /**
     * 
     * @type {number}
     * @memberof ProofreadDeleteMessageReq
     */
    message_id?: number;
}

/**
 * Check if a given object implements the ProofreadDeleteMessageReq interface.
 */
export function instanceOfProofreadDeleteMessageReq(value: object): value is ProofreadDeleteMessageReq {
    return true;
}

export function ProofreadDeleteMessageReqFromJSON(json: any): ProofreadDeleteMessageReq {
    return ProofreadDeleteMessageReqFromJSONTyped(json, false);
}

export function ProofreadDeleteMessageReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProofreadDeleteMessageReq {
    if (json == null) {
        return json;
    }
    return {
        
        'message_id': json['message_id'] == null ? undefined : json['message_id'],
    };
}

export function ProofreadDeleteMessageReqToJSON(json: any): ProofreadDeleteMessageReq {
    return ProofreadDeleteMessageReqToJSONTyped(json, false);
}

export function ProofreadDeleteMessageReqToJSONTyped(value?: ProofreadDeleteMessageReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message_id': value['message_id'],
    };
}

