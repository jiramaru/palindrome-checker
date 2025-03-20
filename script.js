let btn = document.getElementById("check-btn");
let output = document.getElementById("result")
output.style.color ="green"

btn.onclick = function(){
  let input = document.getElementById("text-input").value;

  if(input==""){
    alert("Please input a value")
  }
  else if(input=="A"){
    console.log("aaaa")
    output.innerHTML = "A is a palindrome"
  }

  else {
    let word = input.toLowerCase().replace(/[^a-z0-9]/g, '')
    let reverse = word.split("").reverse().join("")

    if(word === reverse){
      output.innerHTML = input + " is a palindrome"
    }
    else{
    output.innerHTML = input + " is not a palindrome"
    output.style.color = "red"
    }
    
  }

  document.getElementById("text-input").value = ""
  
}
