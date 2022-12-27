/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
 var maximumBags = function(capacity, rocks, additionalRocks) {
    const needs = []
    for(let i = 0; i < rocks.length; i++){
        needs.push(capacity[i] - rocks[i])
    }
    needs.sort((a,b)=> a- b)
    let ans = 0
    let index = 0

    while(additionalRocks >= 0 && index <= needs.length){
        if(additionalRocks >= needs[index] || needs[index] === 0){
            additionalRocks -= needs[index]
            ans += 1
        }
        index += 1
    }
    return ans
};