// @flow
import type { TDateLike } from './primitives';

export type TAttendee = {
  id: string | number,
  imageUrl: string,
  name: string,
};

export type TTag = {
  id: string | number,
  name: string,
};

export type TEvent = {
  attendees: Array<*>,
  author: TAttendee,
  date: TDateLike,
  description?: string,
  id: string | number,
  imageUrl: ?string,
  imageUrl: string,
  location: string,
  tags: Array<TTag>,
  title: string,
};

export type TEvents = Array<TEvent>;
