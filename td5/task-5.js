let numbers =[5,8,11,4,7,2,0,20,43];
console.log(numbers);
for(let i=0;i<=numbers.length;i++){
    let x=numbers[i];
    if(x%2==0){
        console.log(x + "is even");
    }
    else{
        console.log(x + "is odd");
    }
}