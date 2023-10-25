var AC = document.getElementById('A');
AC.addEventListener('click', function(){
    var x = document.getElementById('result');
    x.value = null;
    x.placeholder="000";
    count=0;
    opr1 = 0;
    ope = undefined;
    opr2 = undefined;
});
var count = 0;
var opr1=0;
var ope;
var opr2;
let mySound = new Audio('click.wav');
var display = document.getElementById('result');
var buttons = document.getElementsByClassName('grid-item');
var operand = document.getElementsByClassName('grid-item operand');
for(var i=0;i<buttons.length;i++){
   buttons[i].addEventListener('click', function(){
    mySound.play();
    var value = this.getAttribute('data-value');
    var flag = false;
    for(var j=0;j<operand.length;j++){
        var tempO = operand[j].getAttribute('data-value');
        if(tempO==value){
            flag = true;
            if(count==0){
            count++;
            // console.log(value);
            ope = value;
            opr1 = parseFloat(display.value);
            display.value = "";
            display.placeholder="";
            }else{
                opr2 = parseFloat(display.value);
                display.value = eval(opr1+" "+ope+" "+opr2);
                console.log(eval(opr1+" "+ope+" "+opr2));
                opr1 = display.value;
                opr2 = undefined;
            }
        }
    }
    if(flag==true){
        
    }else if(value=='='){
        opr2 = display.value;
        display.value = eval(opr1+" "+ope+" "+opr2);
        if(eval(opr1+" "+ope+" "+opr2)=='Infinity'){
            display.placeholder = 'ERROR';
            count=0;
            opr1 = 0;
            ope = undefined;
            opr2 = undefined;
        }
        // console.log(eval(opr1+" "+ope+" "+opr2));
        opr1 = display.value;
        opr2 = undefined;
        count=0;
        
    }else{
        
        // console.log(value);
        display.value += value;
        
    }
   });
}



