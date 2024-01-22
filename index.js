var button = document.querySelector("#clk");

button.addEventListener("click",function () {
    var randNumber = Math.ceil(Math.random()*2);
    var text = ""
    if (randNumber===1){text="Heads"}
    else {text="Tails"}
    function spin(i){
        if (i<3)
        {
            var dot = ".".repeat(i + 1);
            console.log(dot);
            document.querySelector("#center").innerText="Tossing"+dot;
            setTimeout(function(){
                spin(i+1)},500)
        }
        else{
            document.querySelector("#center").innerText=text;
        }
    }
    spin(0)})