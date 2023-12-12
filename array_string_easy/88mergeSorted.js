// 88. Merge Sorted Array
// Easy
// 13.3K
// 1.5K
// Companies
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first
// m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109 

// Follow up: Can you come up with an algorithm that runs in O(m + n) time?

// const merge = (nums1, m, nums2, n) => {
//     let idx2 = 0;
//     for(let i = 0; i < m+n; i++){
//         if(nums2[idx2] >= nums1[i]){
//             let j = i + 2;
//             let temp = nums1[i+1];
//             nums1[i+1] = nums2[idx2];
//             // j++;
//             idx2++;
//             while(j < m+n){
//                 let temp2 = nums1[j];
//                 nums1[j] = temp;
//                 temp = nums1[j+1];
//                 nums1[j+1] = temp2;
//                 j++;
//             }
//         }
//     }
//     return nums1;
// };

// const merge = (nums1, m, nums2, n) => {
//     let newArr = [];
//     if(n < 1){
//         return nums1;
//     }
//     let len = Math.max(m,n)
//     for(let i = 0; i < len; i++){
//         if(nums1[i] < nums2[i]){
//             newArr.push(nums1[i]);
//             newArr.push(nums2[i]);
//         }else{
//             newArr.push(nums2[i]);
//             newArr.push(nums1[i]);
//         }
//     }
//     nums1 = newArr;
//     return nums1;
// }

const merge = (nums1, m, nums2, n) => {
    let idx1 = m - 1;
    let idx2 = n - 1;
    let k = m + n - 1; 
    while(idx1 >= 0 && idx2 >=0){
        if(nums1[idx1] > nums2[idx2]){
            nums1[k] = nums1[idx1];
            idx1--;
        }else{
            nums1[k] = nums2[idx2];
            idx2--;
        }
        console.log(nums1);
        k--;
    }
    while(idx2 >= 0){
        nums1[k] = nums2[idx2];
        idx2--;
        k--;
    }
    return nums1;
}

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))