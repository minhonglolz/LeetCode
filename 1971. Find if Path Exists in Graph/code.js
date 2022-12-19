/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
 var validPath = function(n, edges, source, destination) {
    const graph = new Map()
    edges.forEach(([a,b])=>{
        if(!graph.has(a)){
            graph.set(a,[])
        }
        if(!graph.has(b)){
            graph.set(b,[])
        }
        graph.get(a).push(b)
        graph.get(b).push(a)
    })
    const visited = new Array(n)
    const stack = [source]
    while(stack.length > 0){
        const node = stack.shift()
        if(node === destination) return true
        visited[node] = true
        graph.get(node).forEach((next)=>{
            if(!visited[next]){
                stack.push(next)
            }
        })
    }
    return false
};