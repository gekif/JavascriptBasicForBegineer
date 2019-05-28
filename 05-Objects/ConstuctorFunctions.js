/*let post = {
    title: 'adinda',
    body: `adinda sayang`,
    author: 'fikar',
    views: 2,
    comments: [
        { author: 'duta', body: 'makan' },
        { author: 'mandra', body: 'bebek'}
    ],
    isLive: true
};*/

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new Post('a', 'b', 'c');

console.log(post);

