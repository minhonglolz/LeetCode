/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let maxLength = s.length === 1 ? 1 : 0
    let end = 0
    let temp = s[0]
    while(end < s.length-1){
        end+=1
        if(temp.includes(s[end])){
           temp = temp.substring(temp.indexOf(s[end])+1) + s[end]
        }else{
            temp = temp + s[end]
        }
        maxLength = Math.max(temp.length, maxLength)
    }
    return maxLength
};