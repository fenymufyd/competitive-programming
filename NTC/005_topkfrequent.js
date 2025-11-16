class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        
        const n = nums.length;

        if (n == 0) {return nums}


        const max = Math.max(nums);
        
        const bucket = new Array(n).fill(0);

        for(let num in nums){
            let normalized = num/(max+1)
            
            let bucketn = parseInt(num * normalized);

            bucket[bucketn].push[num]
        }

        console.log(bucket);
        return bucket
        
        // for(let n in nums){
        //     // console.log(nums[n])
        //     // let x = nums[n]
        //     // if (!count.nums[n]) {
        //     //     count.nums[n] = 0;
        //     // }
        //     if (!count[nums[n]]) count[nums[n]] = 0;
        //     count[nums[n]] += 1
        //     // console.log(count)
        //     // nums.filter((num) => num == nums[i]);
        // }
        //     console.log(Object.keys(count))
        //     console.log(Object.keys(count).sort().reverse().slice(0, k))

        // return Object.keys(count)


    }
}

// Math.max(...array)
// .slice(-2)
// .slice(-k)

// Use the bucket sort algorithm 
// to create n buckets, grouping 
// numbers based on their frequencies 
// from 1 to n. Then, pick the top k numbers 
// from the buckets, starting from n down to 1. 