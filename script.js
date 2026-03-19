let inputbox = document.getElementById("inpbox" )
let buttons = document.querySelectorAll('button');
let str =""
let arr = Array.from(buttons);

arr.forEach(button =>{
  button.addEventListener( 'click' ,(e)=>{
     if(e.target.innerHTML == '='){
        str = eval(str);
        inputbox.value = str;
        if(str == undefined){
            inputbox.value = "fahhhhhhhh"
        }
     }

     else if(e.target.innerText == 'AC'){
             str = "0"
             inputbox.value = str
     }
      
     else if(e.target.innerHTML == "DEL"){
            str = str.substring(0, str.length-1)
            inputbox.value = str
     }

     else{ str += e.target.innerHTML
        inputbox.value = str;
     }
  })
})


      