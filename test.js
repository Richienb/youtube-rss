import test from 'ava';
import {getChannelFeed, getPlaylistFeed} from './index.js';

test('channel', async t => {
	const channel = await getChannelFeed('UCj5i58mCkAREDqFWlhaQbOw');

	t.is(channel.title, 'stampylonghead');
});

test('playlist', async t => {
	const playlist = await getPlaylistFeed('PLZRRxQcaEjA4qyEuYfAMCazlL0vQDkIj2');

	t.is(playlist.title, 'Mind Field : Season 1');
});
