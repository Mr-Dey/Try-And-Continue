
function onclicksearch() { 
    let input= document.querySelector("input");
    let input_value=input.value;
    let button=document.getElementById("Search_btn_id");
    let redirect=`https://www.google.com/search?q=${input_value}`;
    document.getElementById("output_display").innerHTML=input_value.length<=0? "Try to search again!":"Wait for result";
    console.log(input_value);
    console.log(input_value.length);
    input_value.length<=0? null:button.onclick=window.location=redirect;
}

