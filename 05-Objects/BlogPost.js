/**
 * The properties require:
 * title
 * body
 * author
 * views
 * comments
 * (author, body(
 * isLive
 */

let post = {
    title: 'adinda',
    body: `adinda sayang`,
    author: 'fikar',
    views: 2,
    comments: [
        { author: 'duta', body: 'makan' },
        { author: 'mandra', body: 'bebek'}
    ],
    isLive: true
};

console.log(post);