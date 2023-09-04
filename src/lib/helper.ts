import type { RouteRecordName } from "vue-router"

/**
 * Capitalise a word or a symbol
 * @param word 
 * @returns 
 */
export const capitalise = (word: RouteRecordName | unknown) => {
    let convWord = word
    if(typeof word == "symbol") convWord = word.toString()
    
    if(typeof convWord == "string") convWord = convWord.charAt(0).toUpperCase() + convWord.slice(1)
    else convWord = ""

    return convWord
}