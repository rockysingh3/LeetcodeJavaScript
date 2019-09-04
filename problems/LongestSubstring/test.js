const lengthOfLongestSubstring = require('./index');


test(" 'abcabcbb' return 3", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3)
});

test(" 'pwwkew' return 3", () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
})