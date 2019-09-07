// leetcode number 20


const isValid = s => {

    let stack = []
    let pairHashMap = { "(" : ")", "{" : "}", "[" : "]" }

    for(let i=0; i<s.length; i++){
        
        let currChar = s[i]

        if(pairHashMap[currChar]){
            stack.push(currChar)
        }else if(pairHashMap[stack.pop()] !== currChar){
            return false;
        }
    }

    return stack.length === 0;
}


module.exports = isValid;