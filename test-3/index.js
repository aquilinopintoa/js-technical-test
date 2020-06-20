const distanceHandler = (function (p1, p2, cb) {

    if (this.progress < this.concurrencyLimit) {
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
}).bind({
    progress: 0,
    queue: [],
    concurrencyLimit: 2
})

function distance(p1, p2, cb) {
    setTimeout(() => {
        cb(p1 - p2);
    }, 1 * 1000)
}

function print(result) {
    console.log(result);
}


distanceHandler(1, 2, print);
distanceHandler(1, 3, print);
distanceHandler(1, 4, print);


