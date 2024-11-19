 //select input tag,paragraph
 var mguess=document.getElementById("guess")
 var mchecking=document.getElementById("checking")
 var mscoring=document.getElementById("scoring")
 var randomnumber=Math.floor(Math.random ()*10)+1
 var totalscore=10
 function change()
 {
     var computerNumber=mguess.value
     if(randomnumber==computerNumber)
 {
     mchecking.textContent="You are Right!";
     console.log(mchecking.textContent)
     alert("Congratulations!  You Won!....");
 }
 else
 {
     totalscore=totalscore-1
     mguess.value=" "
     mscoring.textContent="Your Score:"+totalscore
     mchecking.textContent="You are Wrong!"
     console.log(mchecking.textContent)
 }
 }