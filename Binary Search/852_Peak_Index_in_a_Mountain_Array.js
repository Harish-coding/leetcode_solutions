/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    
    let start_idx = 0;
    let end_idx = arr.length - 1;
    
    while (start_idx <= end_idx && start_idx >= 0 && end_idx < arr.length) {
        
        let mid_idx = Math.floor((start_idx + end_idx) / 2);
    
        // found peak, return index
        if (arr[mid_idx] > arr[mid_idx + 1] && arr[mid_idx] > arr[mid_idx - 1]) {
            return mid_idx;
        }
    
        // if increasing, update start_idx
        if (arr[mid_idx - 1] < arr[mid_idx] && arr[mid_idx] < arr[mid_idx + 1]) {
            start_idx = mid_idx;
        }   
    
        // if decreasing, update end_idx
        if (arr[mid_idx - 1] > arr[mid_idx] && arr[mid_idx] > arr[mid_idx + 1]) {
            end_idx = mid_idx;
        }
    }
    
    return -1;
    
};