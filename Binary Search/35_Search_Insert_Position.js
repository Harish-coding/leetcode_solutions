/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    let start_idx = 0;
    let end_idx = nums.length - 1;
    
    while (start_idx <= end_idx) {
        let mid_idx = Math.floor((start_idx + end_idx) / 2);
    
        // found target, return index
        if (nums[mid_idx] == target) {
            return mid_idx;
        }
    
        if (nums[mid_idx] < target) {
            start_idx = mid_idx + 1;
        }   
    
        if (nums[mid_idx] > target) {
            end_idx = mid_idx - 1;
        }
    }
    
    return start_idx;
};