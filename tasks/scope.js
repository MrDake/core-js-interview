function setRate(rating) {
    if (window.RitingCount === undefined) {
        window.RitingCount = 0;
    }
    if (window.RatingAccumulator === undefined) {
        window.RatingAccumulator = 0;
    }
    window.RitingCount += 1;
    window.RatingAccumulator += rating;

    const average = window.RatingAccumulator / window.RitingCount;
    console.log(average)
    return average;
}

setRate(5); // 5
setRate(3); // 4
setRate(4); // 4
setRate(0); // 3

console.log('-------------------------------------------------------------------------------------------------------');


function RatingAverage() {
    this._count = 0;
    this._accumulator = 0;
    

    return (rating) => {
        this._count += 1;
        this._accumulator += rating;

        return this._accumulator / this._count;
    }
}

const setRating = new RatingAverage();
console.log(setRating(5));
console.log(setRating(3));
console.log(setRating(4));
console.log(setRating(0));