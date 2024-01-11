// mine 
const lengthOfLastWord = (s) => {
    s = s.trim().split(" ");
    return s[s.length-1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "))

//i think this has better runtime in some cases?

// const lengthOfLastWord = (s) => {
//     s = s.replace(/\s+/g,' ').trim().split(" ");
//     return s[s.length-1].length;
// }