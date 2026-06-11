/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function (edges) {
    let n = edges.length + 1;
    let adjacencyList = Array.from({ length: n + 1 }, () => []);

    for ([a, b] of edges) {
        adjacencyList[a].push(b);
        adjacencyList[b].push(a);
    }

    let queue = [1];
    let depth = new Array(n + 1).fill(-1);
    depth[1] = 0;

    let head = 0;
    let maxDepth = 0;

    while (head < queue.length) {
        let currentNode = queue[head++];
        maxDepth = Math.max(maxDepth, depth[currentNode]);

        for (neighbor of adjacencyList[currentNode]) {
            if (depth[neighbor] === -1) {
                depth[neighbor] = depth[currentNode] + 1;
                queue.push(neighbor);
            }
        }
    }

    function modPow(b, exp, mod) {
        let result = 1n;
        let base = BigInt(b) % BigInt(mod);
        let exponent = BigInt(exp);
        let modular = BigInt(mod);

        while (exponent > 0n) {
            if (exponent % 2n === 1n) {
                result = (result * base) % modular;
            }

            base = (base * base) % modular;
            exponent = exponent / 2n;
        }

        return Number(result);
    }

    return modPow(2, maxDepth - 1, 1000000007);
};