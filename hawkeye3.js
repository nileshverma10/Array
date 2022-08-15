
let arr=["nilesh", "nilesh", "mahesh","suresh","suresh","suresh","rajesh","monu"];
let obj={};
for(i=0; i<=arr.length-1; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
      }else{
              obj[arr[i]]++;
      }
        
 
}
   console.log(obj);