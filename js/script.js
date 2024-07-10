
let questionArray = [
    {
      question: "1. What is 1+1 = ?",
      options: [1, 2, 3],
      correctAns: "op2",
    },
    {
      question: "2. What is 2+3 = ?",
      options: [2, 3, 5],
      correctAns: "op3",
    },
    {
      question: "3. What is 2*3 = ?",
      options: [6, 4, 3],
      correctAns: "op1",
    },
  ];
  let i = 0;
  let marks = 0;
  document.querySelector("#start").addEventListener("click", dowork);
  document.querySelector("#nextQuestion").addEventListener("click", dowork2);
  document.querySelector("#unmark").addEventListener("click", unmark);

  function dowork() { // when click the start button . it works for one time only
    document.querySelector("#start").style = "display:none;";
    document.querySelector(".question").innerHTML = questionArray[i].question;
    document.querySelector(".option").style = "display:block;";
    document.querySelector("#option-1").innerHTML =    questionArray[i].options[0];
    document.querySelector("#option-2").innerHTML =    questionArray[i].options[1];
    document.querySelector("#option-3").innerHTML =    questionArray[i].options[2];
    document.querySelector("#nextQuestion").style = "display:block;";
    document.querySelector("#unmark").style = "display:block;";
  }

  function dowork2() {  // for clicking next button  
    if (i == 100){    // for last question 
      let ans;
      if (document.querySelector("#op1").checked == true) ans = "op1";
      else if (document.querySelector("#op2").checked == true) ans = "op2";
      else if (document.querySelector("#op3").checked == true) ans = "op3";
      else ans = null;
      if (questionArray[2].correctAns == ans) {  // must have write the index of last question manually
        marks++;
      }
      document.querySelector("#nextQuestion").style = "display:none;";
      document.querySelector("#unmark").style = "display:none;";
      document.querySelector(".question").style = "display:none;";
      document.querySelector(".option").style = "display:none;";
      document.querySelector(".marks").innerHTML = "Your mark is " + marks;
    } 
    else{
      markcheck();
      i++;
      document.querySelector(".question").innerHTML =  questionArray[i].question;
      document.querySelector("#option-1").innerHTML =  questionArray[i].options[0];
      document.querySelector("#option-2").innerHTML =  questionArray[i].options[1];
      document.querySelector("#option-3").innerHTML =  questionArray[i].options[2];
      if (i == 2){  // checking that if it is the last question or not 
        document.querySelector("#nextQuestion").innerHTML = "Submit";
        i = 100;
      }
    }
    unmark();
  }
  function markcheck(){
          let op1=  document.querySelector('#op1').checked;
          let op2=  document.querySelector('#op2').checked;
          let op3=  document.querySelector('#op3').checked;
          let ans;
          if(op1 == true)
          ans = "op1";
          else if(op2 == true)
          ans = "op2";
          else if(op3 == true)
          ans = "op3";
          else 
          ans = null;
      if(questionArray[i].correctAns == ans)
      marks+=1;   
  }
  function unmark(){   
    document.querySelectorAll(".same").forEach((ele) => {
      ele.checked = false;
    });
  }

