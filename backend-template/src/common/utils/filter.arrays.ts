import {array_utils} from "../global/util.arrays";

export  function findDuplicateStrings(arr) {
    const stringCount = {} // Object to store string occurrences

    // Count occurrences of each string in the array
    arr.forEach(str => {
        if (stringCount[str]) {
            stringCount[str]++
        } else {
            stringCount[str] = 1
        }
    })

    // Find and display duplicates along with their counts
    Object.keys(stringCount).forEach(key => {
        if (stringCount[key] > 1) {
            console.log(`String "${key}" appears ${stringCount[key]} times.`)
        }
    })
}


export function findUniqueStrings<T>(arr: T[]): T[] {
    // Create a Set to store unique items
    const uniqueSet: Set<T> = new Set(arr)

    // Convert the Set back to an array to get unique items
    const uniqueArray: T[] = Array.from<T>(uniqueSet)

    return uniqueArray
}
