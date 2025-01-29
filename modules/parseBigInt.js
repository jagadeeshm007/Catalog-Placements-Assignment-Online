module.exports.parseBigInt = function(str, base) {
    const digits = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = 0n;
    base = BigInt(base);
    for (const c of str.toLowerCase()) {
        const value = BigInt(digits.indexOf(c));
        if (value >= base || value < 0n) {
            throw new Error(`Invalid character ${c} for base ${base}`);
        }
        result = result * base + value;
    }
    return result;
}