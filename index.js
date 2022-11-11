import ky from 'ky';
import {XMLParser} from 'fast-xml-parser';

const parser = new XMLParser({
	ignoreAttributes: false,
});

function assertString(value) {
	if (typeof value !== 'string') {
		throw new TypeError('Expected a string');
	}
}

async function getFeed(options) {
	const data = await ky('https://www.youtube.com/feeds/videos.xml', options).text();

	return parser.parse(data);
}

export async function getChannelFeed(channelId, options) {
	assertString(channelId);

	const {feed} = await getFeed({
		searchParams: {
			channel_id: channelId, // eslint-disable-line camelcase
		},
		...options,
	});

	return {
		title: feed.title,
		created: new Date(feed.published),
		videos: feed.entry.map(video => ({
			id: video['yt:videoId'],
			title: video.title,
			published: new Date(video.published),
			updated: new Date(video.updated),
			thumbnail: {
				url: video['media:group']['media:thumbnail']['@_url'],
				width: BigInt(video['media:group']['media:thumbnail']['@_width']),
				height: BigInt(video['media:group']['media:thumbnail']['@_height']),
			},
			description: video['media:group']['media:description'],
			likes: BigInt(video['media:group']['media:community']['media:starRating']['@_count']),
			views: BigInt(video['media:group']['media:community']['media:statistics']['@_views']),
		})),
	};
}

export async function getPlaylistFeed(playlistId, options) {
	assertString(playlistId);

	const {feed} = await getFeed({
		searchParams: {
			playlist_id: playlistId, // eslint-disable-line camelcase
		},
		...options,
	});

	return {
		title: feed.title,
		creator: {
			title: feed.author.name,
			channelId: feed['yt:channelId'],
		},
		created: new Date(feed.published),
		videos: feed.entry.map(video => ({
			id: video['yt:videoId'],
			title: video.title,
			creator: {
				title: video.author.name,
				channelId: video['yt:channelId'],
			},
			published: new Date(video.published),
			updated: new Date(video.updated),
			thumbnail: {
				url: video['media:group']['media:thumbnail']['@_url'],
				width: BigInt(video['media:group']['media:thumbnail']['@_width']),
				height: BigInt(video['media:group']['media:thumbnail']['@_height']),
			},
			description: video['media:group']['media:description'],
			likes: BigInt(video['media:group']['media:community']['media:starRating']['@_count']),
			views: BigInt(video['media:group']['media:community']['media:statistics']['@_views']),
		})),
	};
}
