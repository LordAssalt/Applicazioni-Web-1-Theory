"use srtict"

function stringPrinter (s1){
    if (s1.length>=3 ){
        const p1 = s1.slice(0,2);
        const p2 = s1.slice(-2,); 
        console.log(p1+""+p2);
    }else{
        if(s1.length<2){
            console.log(" ");
        }
        if(s1.length==2){
            console.log(s1+""+s1);
        }
    }
}

stringPrinter("ciaoi");