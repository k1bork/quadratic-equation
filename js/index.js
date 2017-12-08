enterNumbers();
function enterNumbers(){
  const a=Number(prompt('введіть число "a"'));
  if(Number.isInteger(a)){
   const b=Number(prompt('введіть число "b"')); 
   if(Number.isInteger(b)){
     const c=Number(prompt('введіть число "c"'));
     if(Number.isInteger(c)){
        calculation(a,b,c); 
     }else{
        alert('"c" не число');
      enterNumbers(); 
     }
   }else{
   alert('"b" не число');
      enterNumbers();
   }
  }else{
      alert('"a" не число');
      enterNumbers();
  }
}
function diskrim(a,b,c){
    const d=b*b-4*a*c;
   return d;
}
function ifAEquals0(b,c){
    if(b==0){
        let res="рівняння не має вирішення, тому, що а=0 і b=0";
        result(res);
    }else{
        let x1=-c/b;
        let res=`x1=${x1}`;
        result(res);
    }
}
function ifBEquals0(a,c){
    if(c==0){
        let x=0;
        let res=`x=${x}`;
        result(res);
    }else if((-c/a)<0){
        let res="рівняння не має дійсних коренів";
      result(res);
    }else{
        let x1=-Math.sqrt(-c/a);
        let x2=Math.sqrt(-c/a);
        let res=`x1=${x1}<br> x2=${x2}`;
    result(res);
    }
}
function ifCEquals0(a,b){
    let x1=0;
    let x2=-b/a;
    let res=`x1=${x1}<br> x2=${x2}`;
    result(res);
}
function calculation(a,b,c){
    if(a!=0&&b!=0&&c!=0){
            let d=diskrim(a,b,c);
            if(d<0){
            let res="Дискримінант менше 0, рівняння не має дійсних коренів";
           result(res);
        }else if(d==0){
            let x=-b/2*a;
            let res=`D=0, х=${x}`;
            result(res);
        }else{
            let x1=(-b+Math.sqrt(d))/2*a;
            let x2=(-b-Math.sqrt(d))/2*a;
            let res=`x1=${x1}<br> x2=${x2}`;
            result(res);
            }
    }else if(a==0){
        ifAEquals0(b,c);
    }else if(b==0){
        ifBEquals0(a,c);
    }else 
        ifCEquals0(a,b);
}
function result(res){
    document.write(res);
}