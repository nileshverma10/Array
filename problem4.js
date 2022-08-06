
let arr=[1,2,3,4,5,6,7,8];

let sum=Infinity;
for(i=0; i<=arr.length-1; i++){
  if(arr[i]<sum){
    sum=arr[i];
  }
}
console.log(sum);
