
    var questions = [
        ["1. What is the capital of India","Delhi","Mumbai","Chennai","Bangalore"],
        ["2. What is the capital of China","Shanghai","Beijing","Taipei","Nanjing"],
        ["3. What is the capital of Australia","Perth","Adelaide","Melbourne","Sydney"],
        ["4. What is the capital of Canada","Toronto","Vancouver","Ottawa","Calgary"],
        ["5. What is the capital of United States","Washington D.C", "San Francisco","Boston","Chicago"]
    ];

    var score = 0;
    // var divElement = document.getElementById("quizquestion");
    var pos=0;
    var stack=[];
    var stack1 = ['A','B','C','C','A'];

    function myFunction() {

        document.getElementById("quizquestion").innerHTML = "<span style='font-size:40px'>" + questions[pos][0] + "</span>"+ "<br/>"+"<div style=\"\n" +
            "    margin-left: 9%;\n" +
            "\">"+" "+
            "<input type='radio' class=\"form-check-input\" name=\"optradio\" value=\"A\">" +" "+ questions[pos][1] + "<br/>"+" "+
            "<input type='radio' class=\"form-check-input\" name=\"optradio\" value=\"B\">"+" "+ questions[pos][2] + "<br/>"+" "+
            "<input type='radio' class=\"form-check-input\" name=\"optradio\" value=\"C\">"+" "+ questions[pos][3] + "<br/>"+" "+
            "<input type='radio' class=\"form-check-input\" name=\"optradio\" value=\"D\">"+" "+ questions[pos][4]+ "</div>" +"<br/>"+
            "<button onclick='myFunction1()'>"+ "previous" +"</button>"+"<button onclick='myFunction2()'>"+ "Next" +"</button>";

    }

 function myFunction1(){
        pos--;
        stack.pop();
        myFunction()
    }
    function myFunction2(){
        pos++;
        for(var i=0;i<4;i++){
         if(document.querySelectorAll(".form-check-input")[i].checked==true){
             stack.push(document.querySelectorAll(".form-check-input")[i].value);
         }
        }
        if (pos==5){
            document.getElementById("quizquestion").innerHTML="<button onclick='checkAnswer()'>Submit Answer</button>";
            return false;
        }
        myFunction()
    }


//score increase based on options selected and display the score in the console

    function checkAnswer(){

for(var j=0;j<stack.length;j++){
    if(stack[j] == stack1[j]){
        score++;
    }
}
        document.getElementById("model").style.display = "block";
document.getElementById("scoreFinal").innerHTML = score;
        document.getElementById("myBtn").addEventListener("click", displayDate);

        function displayDate(){
            document.getElementById("model").style.display = "none";
        }
    }


