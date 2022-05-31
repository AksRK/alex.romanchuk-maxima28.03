'use strict';

const fibonacci = function() {
    var arr = [];

    return function () {
        if (arr.length <= 1) {
            arr.push(1);
            return arr.at(-1);
        }else {
            arr.push(arr.at(-1) + arr.at(-2));
            arr.shift();
            return arr.at(-1);
        };
    };
}();



