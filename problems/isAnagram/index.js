// problem number 
function isAnagram(s, t) {

    if(s.length !== t.length) {
        return false;
    }

    const sCharCounts = {} // {H: 1, E: 1, L: 2, 0: 1}

    // Fill sCharCounts
    for(let i=0; i<s.length; i++){
        const sChar = s[i]
        sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1
    }

    for (let i=0; i<t.length; i++) {
        const tChar = t[i]

        if(!sCharCounts[tChar]) {
            return false
        } else {
            sCharCounts[tChar]--
        }
    }

    return true

}

module.exports = isAnagram