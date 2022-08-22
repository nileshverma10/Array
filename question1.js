function masaiUniqueness(S) {
    //write code here
    let obj={};
    for(i=0; i<=S.length-1; i++){
        if(obj[S[i]]==undefined){
            obj[S[i]]=1;
        }else{
            obj[S[i]]++
        }
    }
    if("a"==2){
        console.log("Unique")
    }else{
        console.log("No");
    }
  
    
  
}
