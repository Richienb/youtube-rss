import type {Options} from 'ky';

export type ThumbnailInfo = {
	url: string;
	width: bigint;
	height: bigint;
};

export type ChannelVideo = {
	id: string;
	title: string;
	published: Date;
	updated: Date;
	thumbnail: ThumbnailInfo;
	description: string;
	likes: bigint;
	views: bigint;
};

export type ChannelFeed = {
	title: string;
	created: Date;
	videos: ChannelVideo[];
};

/**
Get the RSS feed of a YouTube channel.

@example
```
import {getChannelFeed} from 'youtube-rss';

// https://www.youtube.com/channel/UCj5i58mCkAREDqFWlhaQbOw
const channel = await getChannelFeed('UCj5i58mCkAREDqFWlhaQbOw');
//=> {title: 'stampylonghead', created: 2011-07-29T21:55:17.000Z, videos: [{…}]}
```
*/
export function getChannelFeed(channelId: string, options?: Options): Promise<ChannelFeed>;

export type ChannelInfo = {
	title: string;
	channelId: string;
};

export type PlaylistVideo = ChannelVideo & {
	creator: ChannelInfo;
};

export type PlaylistFeed = {
	title: string;
	creator: ChannelInfo;
	created: Date;
	videos: PlaylistVideo[];
};

/**
Get the RSS feed of a YouTube playlist.

@example
```
import {getPlaylistFeed} from 'youtube-rss';

// https://www.youtube.com/playlist?list=PLZRRxQcaEjA4qyEuYfAMCazlL0vQDkIj2
const playlist = await getPlaylistFeed('PLZRRxQcaEjA4qyEuYfAMCazlL0vQDkIj2');
//=> {title: 'Mind Field : Season 1', creator: {title: 'Vsauce', channelId: 'UC6nSFpj9HTCZ5t-N3Rm3-HA'}, created: 2017-01-06T19:35:33.000Z, videos: [{…}]}
```
*/
export function getPlaylistFeed(playlistId: string, options?: Options): Promise<PlaylistFeed>;

export {Options} from 'ky';
