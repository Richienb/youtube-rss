# youtube-rss

> Fetch YouTube RSS feeds

## Install

```sh
npm install youtube-rss
```

## Usage

```js
import {getChannelFeed, getPlaylistFeed} from 'youtube-rss';

// https://www.youtube.com/channel/UCj5i58mCkAREDqFWlhaQbOw
const channel = await getChannelFeed('UCj5i58mCkAREDqFWlhaQbOw');
//=> {title: 'stampylonghead', created: 2011-07-29T21:55:17.000Z, videos: [{…}]}

// https://www.youtube.com/playlist?list=PLZRRxQcaEjA4qyEuYfAMCazlL0vQDkIj2
const playlist = await getPlaylistFeed('PLZRRxQcaEjA4qyEuYfAMCazlL0vQDkIj2');
//=> {title: 'Mind Field : Season 1', creator: {title: 'Vsauce', channelId: 'UC6nSFpj9HTCZ5t-N3Rm3-HA'}, created: 2017-01-06T19:35:33.000Z, videos: [{…}]}
```

## API

### getChannelFeed(channelId, options?)

Returns `Promise<ChannelFeed>`.

### getPlaylistFeed(playlistId, options?)

Returns `Promise<PlaylistFeed>`

#### options

Options for [`ky`](https://github.com/sindresorhus/ky/tree/v0.32.2#options).

### ChannelFeed

#### title

Type: `string`

#### created

Type: `Date`

#### videos

Type: `Array<ChannelVideo>`

### PlaylistFeed

#### title

Type: `string`

#### creator

Type: `ChannelInfo`

#### created

Type: `Date`

#### videos

Type: `PlaylistVideo[]`

### ChannelVideo

#### id

Type: `string`

#### title

Type: `string`

#### published

Type: `Date`

#### updated

Type: `Date`

#### thumbnail

Type: `ThumbnailInfo`

#### description

Type: `string`

#### likes

Type: `BigInt`

#### views

Type: `BigInt`

### PlaylistVideo extends ChannelVideo

#### creator

Type: `ChannelInfo`

### ThumbnailInfo

#### url

Type: `string`

#### width

Type: `BigInt`

#### height

Type: `BigInt`
