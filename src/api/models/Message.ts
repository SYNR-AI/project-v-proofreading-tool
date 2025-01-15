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
import type { Cover } from './Cover';
import {
    CoverFromJSON,
    CoverFromJSONTyped,
    CoverToJSON,
    CoverToJSONTyped,
} from './Cover';
import type { Proofread } from './Proofread';
import {
    ProofreadFromJSON,
    ProofreadFromJSONTyped,
    ProofreadToJSON,
    ProofreadToJSONTyped,
} from './Proofread';

/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    frame_id?: number;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    message_id?: number;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    message_type?: number;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    character?: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    shot_description?: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    tts?: string;
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    tts_duration?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Message
     */
    cover_list?: Array<string>;
    /**
     * 
     * @type {Array<Cover>}
     * @memberof Message
     */
    cover_list_v2?: Array<Cover>;
    /**
     * 
     * @type {Proofread}
     * @memberof Message
     */
    proofread?: Proofread;
}

/**
 * Check if a given object implements the Message interface.
 */
export function instanceOfMessage(value: object): value is Message {
    return true;
}

export function MessageFromJSON(json: any): Message {
    return MessageFromJSONTyped(json, false);
}

export function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message {
    if (json == null) {
        return json;
    }
    return {
        
        'frame_id': json['frame_id'] == null ? undefined : json['frame_id'],
        'message_id': json['message_id'] == null ? undefined : json['message_id'],
        'message_type': json['message_type'] == null ? undefined : json['message_type'],
        'character': json['character'] == null ? undefined : json['character'],
        'shot_description': json['shot_description'] == null ? undefined : json['shot_description'],
        'message': json['message'] == null ? undefined : json['message'],
        'tts': json['tts'] == null ? undefined : json['tts'],
        'tts_duration': json['tts_duration'] == null ? undefined : json['tts_duration'],
        'cover_list': json['cover_list'] == null ? undefined : json['cover_list'],
        'cover_list_v2': json['cover_list_v2'] == null ? undefined : ((json['cover_list_v2'] as Array<any>).map(CoverFromJSON)),
        'proofread': json['proofread'] == null ? undefined : ProofreadFromJSON(json['proofread']),
    };
}

export function MessageToJSON(json: any): Message {
    return MessageToJSONTyped(json, false);
}

export function MessageToJSONTyped(value?: Message | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'frame_id': value['frame_id'],
        'message_id': value['message_id'],
        'message_type': value['message_type'],
        'character': value['character'],
        'shot_description': value['shot_description'],
        'message': value['message'],
        'tts': value['tts'],
        'tts_duration': value['tts_duration'],
        'cover_list': value['cover_list'],
        'cover_list_v2': value['cover_list_v2'] == null ? undefined : ((value['cover_list_v2'] as Array<any>).map(CoverToJSON)),
        'proofread': ProofreadToJSON(value['proofread']),
    };
}

