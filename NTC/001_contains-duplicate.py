# contains duplicate
class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # length compare 3 times
        iter = len(nums)
        z = False

        for i in range(iter, 0, -1):
            for j in range(1, i):
                print(nums[i-1],nums[j-1],nums[i-1] == nums[j-1])
                if nums[i-1] == nums[j-1]:
                    z = True
                    # print(z)
                    # break
                else:
                    continue
        return z
		