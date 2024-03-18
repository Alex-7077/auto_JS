function reduceCostByHalf(cost) {
    return cost * 0.5;
}

const coastData = {
    WARSAW_COEFFICIENT: 1,
    LONDON_COEFFICIENT: 3,
    NEW_YORK_COEFFICIENT: 5,
    reduceCostByHalf: reduceCostByHalf
};

module.exports = { coastData, reduceCostByHalf };
