import {expectType} from 'tsd';
import {getChannelFeed, getPlaylistFeed} from './index.js';
import type {ChannelFeed, PlaylistFeed} from './index.js';

expectType<ChannelFeed>(await getChannelFeed('UCj5i58mCkAREDqFWlhaQbOw'));
expectType<PlaylistFeed>(await getPlaylistFeed('PLZRRxQcaEjA4qyEuYfAMCazlL0vQDkIj2'));
