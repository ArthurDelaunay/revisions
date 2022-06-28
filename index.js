// 01 - Alphabet

// const sortLetters = (string) => {
//     let sentence = string.toLowerCase()
//     let letters = sentence.split("")
//     letters.sort()
//     letters = letters.join("")
//     console.log(letters)
// }

// sortLetters("Konexio")

// 02 - XOXO

// const countEach = (string) => {
//     let letters = string.split("")
//     let xLetters = letters.filter( (letter) => {
//         return letter === "x"
    
//     })
//     let oLetters = letters.filter( (letter) => {
//         return letter === "o"

//     })
//     return xLetters.length === oLetters.length

// }


// console.log(countEach("xxxoooox"))
// console.log(countEach("xox"))

// 03 - Palindrome

// const isPalindrome = (string) => {
//     let sentence = string.toLowerCase()
//     let letters = sentence.split("")
//     letters.reverse()
//     letters = letters.join("")
//     if (letters === string) {
//         console.log("Palindrome !")
//     }
//     else {
//         console.log("Nope")
//     }
// }
// isPalindrome("racecar")
// isPalindrome("laptop")

// 04 - Swap

// const swap = (string) => {
//     let sentenceUpperCase = string.toUpperCase()
//     let lettersUpperCase = sentenceUpperCase.split("")
//     let letters = string.split("")
//     let result = ""
//     letters.forEach( (letter, index) => {
//         if (letter === lettersUpperCase[index]){
//             result = result + letter.toLowerCase()
//         }
//         else {
//             result = result + letter.toUpperCase()
//         }
//     })
//     console.log(result)
// }
// swap("Hello World")

// 05 - Sponge bob

// const makeItSpongeBob = (string) => {
//     let letters = string.split("")
//     let result = ""
//     letters.forEach( (letter, index) => {
//         if (index % 2 === 0){
//             result = result + letter.toUpperCase()
//         }
//         else {
//             result = result + letter.toLowerCase()
//         }
//     })
//     console.log(result)
// }
// makeItSpongeBob("Javascript is easy")

// 06 - Better exercice 1

// it's already working

// 07 - Better exercice 2

const countEach = (string) => {
    let letters = string.split("")
    let xLetters = letters.filter( (letter) => {
        return letter === "x"
    
    })
    let oLetters = letters.filter( (letter) => {
        return letter === "o"

    })
    let xUpperCaseLetters = letters.filter( (letter) => {
        return letter === "X"
    
    })
    let oUpperCaseLetters = letters.filter( (letter) => {
        return letter === "O"

    })
    let xTotal = xLetters.length + xUpperCaseLetters.length
    let oTotal = oLetters.length + oUpperCaseLetters.length
    let total = xTotal + oTotal
    if (total === letters.length){
        return xTotal === oTotal
    }
    else {
        return `There are other letters than the one requested`
    }
}

console.log(countEach("xXxoooox"))
console.log(countEach("Xox"))
console.log(countEach("des bisous"))