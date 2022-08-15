
let arr=[1,2,3,4,,3,2,4,5,,6,7,6,54,3,2,2];
let obj={};
for(i=0; i<=arr.length-1; i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1;
      }else{
              obj[arr[i]]++;
      }
        
 
}
   console.log(obj);