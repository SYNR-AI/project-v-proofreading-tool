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
 * @interface ProofreadPostEpisodeReq
 */
export interface ProofreadPostEpisodeReq {
    /**
     * 
     * @type {number}
     * @memberof ProofreadPostEpisodeReq
     */
    episode_id?: number;
}

/**
 * Check if a given object implements the ProofreadPostEpisodeReq interface.
 */
export function instanceOfProofreadPostEpisodeReq(value: object): value is ProofreadPostEpisodeReq {
    return true;
}

export function ProofreadPostEpisodeReqFromJSON(json: any): ProofreadPostEpisodeReq {
    return ProofreadPostEpisodeReqFromJSONTyped(json, false);
}

export function ProofreadPostEpisodeReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProofreadPostEpisodeReq {
    if (json == null) {
        return json;
    }
    return {
        
        'episode_id': json['episode_id'] == null ? undefined : json['episode_id'],
    };
}

export function ProofreadPostEpisodeReqToJSON(json: any): ProofreadPostEpisodeReq {
    return ProofreadPostEpisodeReqToJSONTyped(json, false);
}

export function ProofreadPostEpisodeReqToJSONTyped(value?: ProofreadPostEpisodeReq | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'episode_id': value['episode_id'],
    };
}
