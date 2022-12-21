/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
 var possibleBipartition = function(n, dislikes) {
    const group = {}
    for (let [a, b] of dislikes) {
        if(group.hasOwnProperty(a-1)){
            group[a-1].push(b-1);
        }else {
            group[a-1] = [b-1];
        }

        if(group.hasOwnProperty(b-1)){
            group[b-1].push(a-1);
        }else {
            group[b-1] = [a-1];
        }
    }
    const colors = new Array(n).fill(0)
    for(let i = 0; i < n; i++){
        if(colors[i] === 0 && !dfs(i, 1, colors, group)) return false
    }
    return true
};

const dfs = (current, color, colors, group) => {
    colors[current] = color
    if(!group[current]) return true
    for(let next of group[current]){
        if(colors[next] === color) return false
        if(colors[next] === 0 && !dfs(next, -color, colors, group)) false
    }
    return true
}

