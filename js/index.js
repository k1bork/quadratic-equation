enterNumbers()

function enterNumbers(){
  const a=parseInt(prompt('введіть число a'));
  if(Number.isInteger(a)){
   const b=parseInt(prompt('введіть число b')); 
   if(Number.isInteger(b)){
     const c=parseInt(prompt('введіть число c'));
     if(Number.isInteger(c)){
        quadratic(a,b,c); 
     }else{
        alert("c не число");
      enterNumbers(); 
     }
   }else{
       
   alert("b не число");
      enterNumbers();
   }
  }else{
      alert("a не число");
      enterNumbers();
  }
  
  
}




function diskrim(a,b,c){
   let d=b*b-4*a*c;
    if(d<0){
       alert("Дискримінант менше 0, рівняння не має дійсних коренів"); 
    }else if(d==0){
        let x=-b/2*a;
        alert("D=0, х="+x);
    }else{
       let x1=(-b+(Math.sqrt(d)/2*a));
        let x2=(-b-(Math.sqrt(d)/2*a));
        alert("x1="+x1+", x2="+x2);
    }
}
//якщо c=0
function ifCo(a,b){
    let x1=0;
    let x2=-b/a;
    alert("x1="+x1+", x2="+x2);
}
//Якщо b=0
function ifBo(a,c){
    if(c==0){
        let x=0;
        alert("x="+x);
    }else if((-c/a)<0){
      alert("рівняння не має дійсних коренів"); 
    }else{
        let x1=-Math.sqrt(-c/a);
        let x2=Math.sqrt(-c/a);
        alert("x1="+x1+", x2="+x2);
    }
}
//якщо a=0
function ifAo(b,c){
    if(b==0){
        alert("рівняння не має вирішення, бо а=0 і b=0");
    }else{
        let x1=-c/b;
        alert("x1="+x1);
    }
}
//обчислення рівняння
function quadratic(a,b,c){
    if(a!=0&&b!=0&&c!=0){
        diskrim(a,b,c);
    }else if(a==0){
        ifAo();
    }else if(b==0){
        ifBo();
    }else if(c==0){
        ifCo();
    }else{
        alert("та не може бути");
    }
}