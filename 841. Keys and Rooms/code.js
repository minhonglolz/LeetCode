/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
 var canVisitAllRooms = function(rooms) {
    const keys = rooms[0]
    const set = new Set()
    while(keys[keys.length-1]){
        const key = keys.pop()
        set.add(key)
        for(k of rooms[key]){
            if(!set.has(k)){
                keys.push(k)
            }
        }
    }
    return set.size === rooms.length-1
};