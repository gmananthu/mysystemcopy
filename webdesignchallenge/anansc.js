
function btnclk(val){
document.getElementById('inp').value=document.getElementById('inp').value+val
}
function btnresult(){
   var text=document.getElementById('inp').value
   var result=eval(text)
   document.getElementById('inp').value=result
    }
    function clr(){
       document.getElementById('inp').value=''
    }
