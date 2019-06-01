// Method -> obj
// Function -> global (window, global)

const video = {
    title: 'a',

    tags: ['a', 'b', 'c'],

    showTags() {
        /*

        // First solution using self
        // const self = this;


        this.tags.forEach((function (tag) {
            // console.log(self.title, tag);

            console.log(this.title, tag);
        }));

        // Second solution using Bind
        }).bind(this));*/


        // Third solution Using Arrow Function
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        })

    }
};


video.showTags();


/*
function playVideo(a, b) {
    console.log(this);
}

// playVideo.call({ name: 'Fikar' }, 1, 2);

// Argument must in array
// playVideo.apply({ name: 'Fikar' }, [1, 2]);

playVideo.bind({ name: 'Fikar' })();*/
