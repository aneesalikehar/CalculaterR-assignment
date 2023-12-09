

var results = document.getElementById("result");

function getNumber(num){
    var input = results.value;
    var operators = ["*","/","-","+"];
    var last = input[input.length-1];
    var newInput = num;
    

    if (operators.indexOf(last) !== -1 && operators.indexOf(newInput) !== -1) {
      input = input.slice(0, -1) + newInput;
    } else {
      input += newInput;
    }
   results.value = input;
}

function getResult(){
    results.value = eval(results.value)
}

function clearBtn(){
    results.value= "";
}

