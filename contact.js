const validation = () =>{
    //collecting valuefrom inputs
    let username = document.form.username.value;
    let mobile = document.form.mobile.value;
    let email = document.form.email.value;
    let course = document.form.course.value;
let user_st=mobile_st=email_st=course_st=false;
let alpha = /^[A-Za-z]+$/
let numexp = /^[0-9]+$/
let emailexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
   



//username
if(username ===""){
    document.getElementById("usernote").innerHTML ="Username Mandatory"
    
}
else{
   if(username.match(alpha)){
    document.getElementById("usernote").innerHTML =""
       
}
   else{
    document.getElementById("usernote").innerHTML ="Characters must be Alphabet"
     
}
    
}
//tel
if(mobile ===""){
    document.getElementById("mobilenote").innerHTML =" Please enter Mobile Nmuber"
 
}
else{
    if(mobile.match(numexp)){
        if(mobile.length == 10){
            document.getElementById("mobilenote").innerHTML ="" 
        }
        else{
            document.getElementById("mobilenote").innerHTML =" 10 digits allowed" 
        }
    }
    else{
        document.getElementById("mobilenote").innerHTML =" use numbers" 
    }
   
}
//email

if (email ===""){
    document.getElementById("emailnote").innerHTML ="Please enter Your Email ID"
}
else{
    if (email.match(emailexp)){
        document.getElementById("emailnote").innerHTML =""
    }
    else{
        document.getElementById("emailnote").innerHTML ="Enter Valid Email"
    }
}
// course
if (course ==="") {
    document.getElementById("coursenote").innerHTML ="Select course"
}
else{
    document.getElementById("coursenote").innerHTML =""
}

  
if (user_st === true && mobile_st === true  && email_st && course_st){
    return  true;
}
else{
    return false;
}

}
    