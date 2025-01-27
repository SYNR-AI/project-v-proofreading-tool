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
import type { Message } from './Message';
import {
    MessageFromJSON,
    MessageFromJSONTyped,
    MessageToJSON,
    MessageToJSONTyped,
} from './Message';

/**
 * 
 * @export
 * @interface Episode
 */
export interface Episode {
    /**
     * 
     * @type {number}
     * @memberof Episode
     */
    episode_id?: number;
    /**
     * 
     * @type {number}
     * @memberof Episode
     */
    story_id?: number;
    /**
     * 
     * @type {number}
     * @memberof Episode
     */
    idx?: number;
    /**
     * 
     * @type {string}
     * @memberof Episode
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Episode
     */
    novel?: string;
    /**
     * 
     * @type {string}
     * @memberof Episode
     */
    cover?: string;
    /**
     * 
     * @type {string}
     * @memberof Episode
     */
    cover_url?: string;
    /**
     * 
     * @type {string}
     * @memberof Episode
     */
    bio?: string;
    /**
     * 
     * @type {Array<Message>}
     * @memberof Episode
     */
    message_list?: Array<Message>;
    /**
     * 
     * @type {number}
     * @memberof Episode
     */
    status?: number;
}

/**
 * Check if a given object implements the Episode interface.
 */
export function instanceOfEpisode(value: object): value is Episode {
    return true;
}

export function EpisodeFromJSON(json: any): Episode {
    return EpisodeFromJSONTyped(json, false);
}

export function EpisodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Episode {
    if (json == null) {
        return json;
    }
    return {
        
        'episode_id': json['episode_id'] == null ? undefined : json['episode_id'],
        'story_id': json['story_id'] == null ? undefined : json['story_id'],
        'idx': json['idx'] == null ? undefined : json['idx'],
        'title': json['title'] == null ? undefined : json['title'],
        'novel': json['novel'] == null ? undefined : json['novel'],
        'cover': json['cover'] == null ? undefined : json['cover'],
        'cover_url': json['cover_url'] == null ? undefined : json['cover_url'],
        'bio': json['bio'] == null ? undefined : json['bio'],
        'message_list': json['message_list'] == null ? undefined : ((json['message_list'] as Array<any>).map(MessageFromJSON)),
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function EpisodeToJSON(json: any): Episode {
    return EpisodeToJSONTyped(json, false);
}

export function EpisodeToJSONTyped(value?: Episode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'episode_id': value['episode_id'],
        'story_id': value['story_id'],
        'idx': value['idx'],
        'title': value['title'],
        'novel': value['novel'],
        'cover': value['cover'],
        'cover_url': value['cover_url'],
        'bio': value['bio'],
        'message_list': value['message_list'] == null ? undefined : ((value['message_list'] as Array<any>).map(MessageToJSON)),
        'status': value['status'],
    };
}

