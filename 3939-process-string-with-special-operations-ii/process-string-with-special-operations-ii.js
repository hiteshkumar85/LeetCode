/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var processStr = function (s, k) {
    let len = 0n;

    // Forward pass: final length
    for (const ch of s) {
        if (ch === '*') {
            len = len > 0n ? len - 1n : 0n;
        }
        else if (ch === '#') {
            len *= 2n;
        }
        else if (ch === '%') {
            len = len;
        }
        else {
            len += 1n;
        }
    }

    let pos = BigInt(k);

    if (pos >= len) {
        return '.';
    }

    // Reverse pass
    for (let i = s.length - 1; i >= 0; i--) {
        const ch = s[i];

        if (ch === '*') {
            len += 1n;
        }
        else if (ch === '#') {
            len /= 2n;

            if (pos >= len) {
                pos -= len;
            }
        }
        else if (ch === '%') {
            pos = len - 1n - pos;
        }
        else {
            len--;

            if (pos === len) {
                return ch;
            }
        }
    }

    return '.';
};