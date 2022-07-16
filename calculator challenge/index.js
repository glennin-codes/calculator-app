    let num1=15
    let num2=16
    let  Sum=document.getElementById( "sum")
     document.getElementById("num1-el").innerText=num1
     document.getElementById("num2-el").textContent=num2
      function add(){
        
        Sum.textContent+=  num1+num2
      }
      function subtract(){
          
        Sum.textContent+=  num1-num2
        
    }
    function divide(){
        Sum.textContent+=  num1/num2
    }
    function multply(){
        Sum.textContent+=  num1*num2
    }
    