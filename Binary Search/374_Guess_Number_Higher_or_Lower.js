/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let start = 1;
    let end = n;
    
    while (true) {
        let mid = Math.floor((start + end) / 2);
    
        let result = guess(mid);
        // found target, return index
        if (result == 0) {
            return mid;
        }
    
        if (result ==  -1) {
            end = mid -1;
        }  
    
        if (result == 1) {
            start = mid + 1;
        }
    }
    
};