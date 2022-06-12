'use strict';

const fibonacci = function() {
    var arr = [];

    return function () {
        if (arr.length <= 1) {
            arr.push(1);
            console.log(arr.at(-1));
        }else {
            arr.push(arr.at(-1) + arr.at(-2));
            arr.shift();
            console.log(arr.at(-1));
        };
    };
}();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();