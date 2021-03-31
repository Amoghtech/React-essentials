oldarr=[1,3,5];
newarr=[...oldarr,2,4];
console.log(newarr);


oldobj={
    name:"Kaku",
    class:"12"
    }

 newobj={
     ...oldobj,
     age:"18"
 }   



 oldobj={
    name:"Kaku",
    class:"12"
    }

 newobj={
     ...oldobj,
     class:"18"//It will update the value of class
 }   


 const func=(...args)=>{
     console.log(args);
 }

 func("apple","orange")//the arguments will get converted into an array