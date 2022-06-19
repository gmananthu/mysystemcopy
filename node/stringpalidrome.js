function checkString(string){
    var len=string.length
    for(i=0;i<len/2;i++){
        if(string[i]!==string[len-1-i]){
            
            return false;
        }
    }
            return true;   
}
function printResult(){
var ans=checkString("malayalkm");

if(ans==true){
    console.log("string is palindrome");
}
else{
    console.log("string is not palindrome");
    
}}
printResult();




