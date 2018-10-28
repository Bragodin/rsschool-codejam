function sumOfOther(arr){
    const len = arr.length;
    let array =[];
    for(let i = 0; i < len; i++){
        let sum = 0;
        for(let j = 0; j < len; j++){
            if(i != j){
                sum += arr[j];
            }
        }
        array.push(sum);
    }
    return array;
}