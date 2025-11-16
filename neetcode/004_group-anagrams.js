class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let stro = strs
        let objek = []
        let sorted = stro.map(x => {
            // objek[x.split("").sort().join("")] = [x]
            objek[x.split("").sort().join("")] == undefined ? objek[x.split("").sort().join("")] = [x] : objek[x.split("").sort().join("")].push(x)
        })

        return Object.values(objek) 
    }
}
