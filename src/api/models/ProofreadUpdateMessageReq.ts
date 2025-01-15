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
 * @interface ProofreadUpdateMessageReq
 */
export interface ProofreadUpdateMessageReq {
    /**
     * 
     * @type {number}
     * @memberof ProofreadUpdateMessageReq
     */
    episode_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ProofreadUpdateMessageReq
     */
    message_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ProofreadUpdateMessageReq
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ProofreadUpdateMessageReq
     */
    cover_selection?: number;
    /**
     * 
     * @type {string}
     * @memberof ProofreadUpdateMessageReq
     */
    cover_uri?: string;
    /**
     * 
     * @type {string}
     * @memberof ProofreadUpdateMessageReq
     */
    comment?: string;
}

/**
 * Check if a given object implements the ProofreadUpdateMessageReq interface.
 */
export function instanceOfProofreadUpdateMessageReq(value: object): value is ProofreadUpdateMessageReq {
    return true;
}

export function ProofreadUpdateMessageReqFromJSON(json: any): ProofreadUpdateMessageReq {
    return ProofreadUpdateMessageReqFromJSONTyped(json, false);
}

export function ProofreadUpdateMessageReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProofreadUpdateMessageReq {
    if (json == null) {
        return json;
    }
    return {
        
        'episode_id': json['episode_id'] == null ? undefined : json['episode_id'],
        'message_id': json['message_id'] == null ? undefined : json['message_id'],
        'message': json['message'] == null ? undefined : json['message'],
        'cover_selection': json['cover_selection'] == null ? undefined : json['cover_selection'],
        'cover_uri': json['cover_uri'] == null ? undefined : json['cover_uri'],
        'comment': json['comment'] == null ? undefined : json['comment'],
    };
}

export function ProofreadUpdateMessageReqToJSON(json: any): ProofreadUpdateMessageReq {
    return ProofreadUpdateMessageReqToJSONTyped(json, false);
}

export function ProofreadUpdateMessageReqToJSONTyped(value?: ProofreadUpdateMessageReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'episode_id': value['episode_id'],
        'message_id': value['message_id'],
        'message': value['message'],
        'cover_selection': value['cover_selection'],
        'cover_uri': value['cover_uri'],
        'comment': value['comment'],
    };
}
