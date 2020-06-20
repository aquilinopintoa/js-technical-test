function distanceHandler(p1, p2, cb) {
    const X = 4;

    if (this.progress === undefined) this.progress = 0;
    if (this.queue === undefined) this.queue = [];

    if (this.progress < X) {
        this.progress++;
        distance(p1, p2, (result) => {
            this.progress--;

            if (this.queue.length) {
                const next = this.queue[0]
                this.queue = this.queue.slice(1, this.queue.length);
                distanceHandler(next.p1, next.p2, next.cb);
            }

            cb(result)
        })
    } else {
        this.queue.push({
            p1,
            p2,
            cb
        })
    }
}

function distance(p1, p2, cb) {
    setTimeout(() => {
        cb(p1 - p2);
    }, 0.1 * 1000)
}

function print(result) {
    console.log(result);
}


distanceHandler(1, 2, print);
distanceHandler(1, 3, print);
distanceHandler(1, 4, print);


