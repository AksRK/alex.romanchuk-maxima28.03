'use scrict';

const fibonacci = function() {
    var arr = [1,1,2];

    return function () {
        arr.push(arr.at(-1) + arr.at(-2));
        return arr.at(-1);
    }
}();