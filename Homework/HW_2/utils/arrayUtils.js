function shuffleArray(arr) {
    const shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function filterUniqueValues(arr) {
    return Array.from(new Set(arr));
}

module.exports = {
    shuffleArray,
    filterUniqueValues
};
