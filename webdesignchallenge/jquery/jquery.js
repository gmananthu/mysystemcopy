$(document).ready(function(){
    $("#btn").click(function(){
       // alert("button clicked")
    $("#hidden").toggle(3000)
})
    $("#btn").mouseenter(function(){
        $(this).css({"background":"red"})
    })
$("#btn").mouseleave(function(){
        $(this).css({"background":"green"})
    })
    $('#inp').mouseleave(function(){
var text=$(this).val()
    if(text.length<4){
//alert("warning")
$("#error").show()
    }
    else{
        $('#error').hide()
    }
    })
    
})