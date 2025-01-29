const { parseBigInt } = require('./parseBigInt');
module.exports.computeSecret = function(jsonData) {
    const data = JSON.parse(jsonData);
    const k = data.keys.k;
    const points = [];
    for (const key of Object.keys(data)) {
        if (key === 'keys') continue;
        const x = BigInt(key);
        const entry = data[key];
        const base = parseInt(entry.base, 10);
        const valueStr = entry.value;
        const y = parseBigInt(valueStr, base);
        points.push({ x, y });
    }

    points.sort((a, b) => (a.x < b.x) ? -1 : (a.x > b.x) ? 1 : 0);

    const selectedPoints = points.slice(0, k);

    let sum_num = 0n;
    let sum_den = 1n;

    function gcd(a, b) {
        a = a < 0n ? -a : a;
        b = b < 0n ? -b : b;
        while (b !== 0n) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    for (let i = 0; i < selectedPoints.length; i++) {
        const xi = selectedPoints[i].x;
        const yi = selectedPoints[i].y;

        let term_num = yi;
        let term_den = 1n;

        for (let j = 0; j < selectedPoints.length; j++) {
            if (j === i) continue;
            const xj = selectedPoints[j].x;
            term_num *= (-xj);
            term_den *= (xi - xj);
        }

        const new_den = sum_den * term_den;
        const new_num = sum_num * term_den + term_num * sum_den;

        sum_num = new_num;
        sum_den = new_den;

        const current_gcd = gcd(sum_num, sum_den);
        sum_num /= current_gcd;
        sum_den /= current_gcd;
    }

    if (sum_den < 0n) {
        sum_num *= -1n;
        sum_den *= -1n;
    }

    if (sum_den !== 1n) {
        const final_gcd = gcd(sum_num, sum_den);
        sum_num /= final_gcd;
        sum_den /= final_gcd;
        if (sum_den !== 1n) {
            throw new Error(`Result is not an integer: ${sum_num} / ${sum_den}`);
        }
    }

    return sum_num;
}