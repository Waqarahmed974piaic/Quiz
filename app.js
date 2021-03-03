var email=document.getElementById("exampleInputEmail1")
var password=document.getElementById("exampleInputPassword1")
var formAction=document.getElementById("myForm")
function Submit(){
    var emailValue=email.value
    var passwordvalue=password.value
    if(emailValue=="waqarahmed176549@gmail.com" && passwordvalue=="waqar123"){
        formAction.action="https://quiz-a1db8.web.app/quiz.html"
    }
    else{
        alert("Invalid email address or password")
    }
}
