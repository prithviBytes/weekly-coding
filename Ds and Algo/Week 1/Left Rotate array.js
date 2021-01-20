// Solution 1
function rotateLeft(d, arr) {
    while(d > 0){
        let e = arr.shift();
        arr.push(e)
        d--;
    }
    return arr;
}

//Solution 2
function rotateLeft(d, arr) {
    for(let i = 0 ; i < d ; i++){
        let temp = arr[0];
        for(let j = 0; j<arr.length - 1; j++){
            arr[j] = arr[j + 1];
        }
        arr[arr.length-1] = temp;
    }
    return arr;
}