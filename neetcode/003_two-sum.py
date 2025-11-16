# twosums
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        iter = len(nums)
        answer = []

        for i in range(iter, 0, -1):
            for j in range(1, i):
                # print(nums[i-1],nums[j-1],target)
                if nums[i-1]+nums[j-1] == target:
                    # continue
                    answer = [j-1,i-1]
                    # print(z)
                    # break
                else:
                    continue
        return answer