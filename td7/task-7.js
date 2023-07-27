for(i=0;i<=20;i++){
    if(i%3==0){
        console.log(i+ "div3")
    }
    else if(i%5==0){
        console.log(i+ "div5")
    }
    else if(i%3==0 && i%5==0){
        console.log(i+ "is div3 && div5")
    }
}