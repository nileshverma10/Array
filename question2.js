function theJEE(phyS1, chemS1, mathsS1, phyS2, chemS2, mathsS2) {
    //Write code here
    let student1= phyS1+chemS1+mathsS1;
    let student2= phyS2+chemS2+mathsS2;
    if(student1>student2){
        console.log("First");
    }else if(student1==student2 ||mathsS1>mathsS2){
        console.log("Second");
        
    }else if(mathsS1==mathsS2 ||phyS1>phyS2){
        console.log("Second");
    }
    
}
