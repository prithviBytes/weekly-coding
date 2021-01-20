//Solution 1
function reverseArray(a) {
    let reversedArray = [];
    for(let i = a.length - 1 ; i >= 0 ; i--){
        reverseArray.push(a[i])
    }
    return reversedArray;
}

//Solution 2
function reverseArray(a) {
    for(let i=0, j=a.length - 1; i < j ;i++,j--){
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}