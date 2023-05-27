// Max Consecutive Ones
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let n = nums.length;
    let count = 0;
    let result=0; 
    let i = 0; 
        for(i; i < n; i++){
            if(nums[i] == 1){
                count++
            } else {
                count = 0
            }
            result = Math.max(result, count)
         
        }
       return result
};


// space optimised 
// var findMaxConsecutiveOnes = function(arr) {
//     let count = 0;
//     let max = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!=1){
//             count=0;
//         }
//         else{
//             count++;
//             if(count>max){
//                 max = count;
//             }
//         }
//     }
//     return max;
// };