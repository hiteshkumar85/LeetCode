/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let joinedArray = new Map();
    [...arr1, ...arr2].forEach(obj => {
        joinedArray.set(
            obj.id,
            {
                ...joinedArray.get(obj.id),
                ...obj
            }
        )
    });

    return [...joinedArray.values()].sort((a, b) => a.id - b.id);
};