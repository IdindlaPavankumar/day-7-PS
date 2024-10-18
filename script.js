// compare two array and arrays elements give output if it's or true or false
let arr = [1,2,3,4,7,6]
let arr2 = [1,2,3,4,5,6]
if(arr.length!=arr2.length){
    console.log("length not match")
}
else{
    count=0
    for(i=0;i<arr.length;i++){
        if(arr[i]==arr2[i]){
            count++
        }
    
    }
if(count==arr.length){
    console.log("true")
}
else{
    console.log("false")
}
}

