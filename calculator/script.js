let Output = document.getElementById("output");

function Display(num){
    Output.value += num;
}

function Calculate(){
    try{
        Output.value = eval(Output.value);
    }
    catch(err)
    {
        alert("Invalid !!!");
    }
}

function Clear(){
    Output.value = "";
}

function Delete(){
    Output.value = Output.value.slice(0,-1);
}
