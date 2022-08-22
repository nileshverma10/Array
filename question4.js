function sumOfCornerColumns(N,M,arr){
    //write code here
    let sum=0;
    for(i=0; i<N; i++){
        for(j=0; j<M; j++){
           sum=sum+arr[i][j];
        }
    }
  console.log(sum-12);
}
