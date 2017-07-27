'use strict';
module.exports = function areEqualButNotFalsy(a, b) {
    return (a || NaN) === b;
};
