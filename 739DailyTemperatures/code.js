/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const len = temperatures.length
    const answer = new Array(len).fill(0)
    const stack = []
    for(let i = 0; i < len; i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
            let index = stack.pop()
            answer[index] = i - index
        }
        stack.push(i)
    }
    return answer
};