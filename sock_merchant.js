function sockMerchant(n, ar) {
    let sortedArray = ar.sort()
    let count = 0
    for(let i = 0 ; i < n - 1; i++) {
        if (sortedArray[i] === sortedArray[i+1]) {
            count++
            i = i + 1
        }
    }
    return count
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]),3)
console.log(sockMerchant(10, [1,1,3,1,2,1,3,3,3,3]), 4)
console.log(sockMerchant(15, [6,5,2,3,5,2,2,1,1,5,1,3,3,3,5]),6)