import { EventType } from './../model/Event';
import { IEvents } from './fetchEvents';
import { Event } from '../model/Event';
import { enumToArray } from './enumToArray';

export interface IEventsCategorized {
    [eventType: string]: (string | Event)[];
}

export function categorizeEvents(events: IEvents): IEventsCategorized {
    const eventsCategorized: IEventsCategorized = {};

    for (const eventType of enumToArray(EventType)) {
        eventsCategorized[eventType] = [];
    }

    for (const eventOrError of events) {
        let type: string;
        if (eventOrError instanceof Event) {
            type = eventOrError.type;
        } else {
            type = 'errors';
        }

        eventsCategorized[type] = eventsCategorized[type] || [];
        eventsCategorized[type].push(eventOrError);
    }

    const eventsCategorizedFiltered: IEventsCategorized = {};

    for (const eventType of Object.keys(eventsCategorized)) {
        if (eventsCategorized[eventType].length > 0) {
            eventsCategorizedFiltered[eventType] = eventsCategorized[eventType];
        }
    }

    return eventsCategorizedFiltered;
}
