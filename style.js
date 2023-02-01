var screens=document.getElementById('screen');
// console.log(screens);
let screenValue='  ';
var buttons=document.querySelectorAll('button');
// var buttons=document.getElementsByTagName('button');
 console.log(buttons);
 for(item of buttons){
    item.addEventListener("click",function(event){
        var buttonText=event.target.innerText;
               if(buttonText=='*'){
                screenValue+=buttonText;
                screens.value=screenValue;
               }
               else if(buttonText =='C'){
                screenValue= "";
                screens.value =screenValue;
               }
               else if(buttonText == '='){
                 screens.value=eval(screenValue);
               }
               else{
                screenValue +=buttonText;
                screens.value=screenValue;
               }
;        
        console.log(buttonText);
    });
 }
