// without repeating characters

function lengthOfLongestSubstring(s) {
    
    let windowCharMap = {}
    let windowStart = 0
    let maxLength = 0

    for(let i = 0 ; i< s.length; i++){
        // current char 
        const endChar = s[i];

        // if the chars value is greater then windowStart then 
        // of already passed it in the window need to start a new windw
        if(windowCharMap[endChar] >= windowStart){
            windowStart = windowCharMap[endChar] + 1;
        }

        // update the map with right char and index
        windowCharMap[endChar] = i;

        // update the max length of the winddow
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }

    return maxLength;
}

module.exports = lengthOfLongestSubstring;
