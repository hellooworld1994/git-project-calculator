
//The following function is to display our parameters in the first box
function display(value){
    document.getElementById("result").value+=value;
}

//The following function is for emptying the first box
function clearscreen(){
    document.getElementById("result").value ="";
}

//The following function is for emptying the second box
function clearAscreen(){
    document.getElementById("result2").value ="";
}

////The following function is for doing math calculations
function calculate(){
    let result=document.getElementById("result").value;
    if (result == "") {
        window.alert("Please enter the values");
    }else{
    var b =eval(result);
    document.getElementById("result2").value=b;
    } 
}



