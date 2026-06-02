/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    function flatten(array, currentDepth) {
        let result = [];
        array.forEach(item => {
            if (
                Array.isArray(item) &&
                currentDepth < n
            ) {
                result.push(
                    ...flatten(item, currentDepth + 1)
                );
            } else {
                result.push(item);
            }
        });
        
        return result;
    }
    return flatten(arr, 0);
};