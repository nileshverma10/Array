function appearOnce(N, arr) {
    //write code here
     let sum=0;
    // let unique=[];
     for(i=0; i<N; i++){
         if(isUnique(arr[i],arr)==1){
           sum+=arr[i];
         }
     }
         console.log(sum);
  }
    function isUnique(num,arr){
        let count=0;
        for(let i=0; i<arr.length; i++){
            if(arr[i]==num){
                count++;
            }
    }
      return count;
          
      }
  
     
  
  