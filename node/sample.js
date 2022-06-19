
function stringCheck(string){
    let len=string.length;
    for(i=0;i<len/2;i++){
        if(string[i]!==string[len-1-i]){
            return false;
        }
    }
    return true;
}
let value=stringCheck("malayalm");
if(value){
console.log("palindrome")}
else{
    console.log("not palindrome");
}
