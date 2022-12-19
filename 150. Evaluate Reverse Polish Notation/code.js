/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    const stack = []
    const calculate = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b | 0
    }
    while(tokens.length !== 0){
        const current = tokens.shift()
        if(current in calculate){
            const a = stack.pop()
            const b = stack.pop()
            stack.push(calculate[current](b,a))
        }else{
            stack.push(Number(current))
        }
    }
    return stack[0]
};