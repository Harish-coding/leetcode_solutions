/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
    let start = 1;
    let end = n;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        let isMidBad = isBadVersion(mid);
        let isBeforeMidBad = isBadVersion(mid - 1);
    
        // found target, return index
        if (isMidBad && !isBeforeMidBad) {
            return mid;
        }
        
        // if both are good
        if (!isMidBad && !isBeforeMidBad) {
            start = mid + 1;
        }   
    
        // if both are bad
        if (isMidBad && isBeforeMidBad) {
            end = mid;
        }
    }
    
    return -1;
        
    };
};