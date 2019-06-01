// Method -> obj
// Function -> global (window, global)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    // play() {

    showTags() {
        // console.log(this);

        this.tags.forEach((function (tag) {
            // console.log(tag);
            console.log(this.title, tag);
        }), this);
    }
};

/*video.stop = function () {
    console.log(this);
};*/

/*function playVideo() {
    console.log(this);
}*/

/*function Video(title) {
    this.title = title;
    // console.log(this);
}*/

// video.play();
// video.stop();
// playVideo();

/*
const v = new Video('Star');
console.log(v);*/


video.showTags();