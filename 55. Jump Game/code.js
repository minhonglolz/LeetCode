/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let jump = nums[0]
    let position = 1
    while(jump > 0){
        if(jump-1 > nums[position]){
            jump-= 1
        }else{
            jump = nums[position]
        }
        position+= 1
    }
    return position >= nums.length
};