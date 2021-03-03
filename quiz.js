
var Questions=[{
    Question:"What is the full form of HTML",
    Options:["Hyper Tune Markup Language","Hyper Text Markup Language","None of the above","Both"],
    Answer:"Hyper Text Markup Language"
},
{
    Question:"What is the full form of JS",
    Options:["JavaScript","JavaScience","Both","None of the above"],
    Answer:"JavaScript"
},
{
    Question:"What is the full form of IT",
    Options:["Information text","Information technology","Information tech","None of the above"],
    Answer:"Information technology"
},
{
    Question:"Which of them is the Capital of Pakistan",
    Options:["Lahore","Karachi","Islamabad","None of the above"],
    Answer:"Islamabad"
},
{
    Question:"Which of them is the financial hub of Pakistan",
    Options:["Lahore","Karachi","Islamabad","None of the above"],
    Answer:"Karachi"
}]

firebase.database().ref('ToDo/'+"Quiz").once('value',function(data){
    console.log(data.val())
})

var Score=0;
var k=0
function displayRadioValue() { 
var ele = document.getElementsByName('flexRadioDefault');
for(i = 0; i < ele.length; i++) { 
    if(ele[i].checked){
        
        if((ele[i].value).toString()==Questions[k].Answer){
            
            Score++
        }
    }
}
k++
if(k==Questions.length){
    Result()
}
else{
    if(k==Questions.length-1)
        document.getElementById("Btn").innerHTML="Submit"
    Page()
}
}
var j=0
function Page(){
var para=document.getElementById("paragraph")
var arr=["label1","label2","label3","label4"]
var ele = document.getElementsByName('flexRadioDefault');
para.innerHTML=Questions[j].Question
for(i = 0; i < arr.length; i++) { 
    document.getElementById(arr[i]).innerHTML=Questions[j].Options[i]
    ele[i].value=Questions[j].Options[i]
}
if(j<Questions.length){
    j++
}
}

function Result(){
// document.getElementById("result").innerHTML+=Score
var percentage=(Score/5)*100
alert("You Score is "+percentage+"%")
location.replace("https://quiz-a1db8.web.app/result.html")


}




Page()





