function checkname(){
    var uname=document.getElementById('uname').value
    var pattern=/^([a-zA-Z]+)\s([a-zA-Z]+)$/
    if(uname=="")
        // alert("username is required")
        document.getElementById("msg").innerHTML="username is required"
        else if(!pattern.test(uname))
        // else if(!uname.match(pattern))
       document.getElementById("msg").innerHTML="incorrect format"
        else{
            document.getElementById('msg').style.color="green"
            document.getElementById("msg").innerHTML="ok"
        }
       
}
function checkemail(){

}
function checkmobile(){
    var mobile=document.getElementById('mobile').value
    var pattern=/^[\d]{10,10}$/
    if(isNaN(mobile))
    document.getElementById("msg1").innerHTML="digits only"
    else if(!pattern.test(mobile))
    document.getElementById("msg1").innerHTML="not matched"
     else
    document.getElementById("msg1").innerHTML="OK"
}
function formdata(){
    checkname();checkemail();checkmobile()
}
document.getElementById('uname').onblur=checkname
document.getElementById('mobile').onblur=checkmobile
document.getElementById('btn').onclick=formdata