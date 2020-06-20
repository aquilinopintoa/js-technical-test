function distanceHandler(p1, p2, cb) {
    const X = 4;

    if (this.P === undefined) this.P = 0;
    if (this.W === undefined) this.W = [];

    if (this.P < X) {
        this.P++;
        distance(p1, p2, (result) => {
            this.P--;

            if (this.W.length) {
                const w = this.W[0]
                this.W = this.W.slice(1, this.W.length);
                distanceHandler(w.p1, w.p2, w.cb);
            }

            cb(result)
        })
    } else {
        this.W.push({
            p1,
            p2,
            cb
        })
    }
}

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
distanceHandler(1, 5, print);
distanceHandler(1, 7, print);
distanceHandler(1, 9, print);
distanceHandler(1, 2, print);
distanceHandler(1, 3, print);
distanceHandler(1, 4, print);
distanceHandler(1, 5, print);
distanceHandler(1, 7, print);
distanceHandler(1, 9, print);


