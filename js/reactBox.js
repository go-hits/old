//variables
let reactC = 0;
function loveReact(){

if(reactC == 0){
 reactC = 1;
 alert('Reaction sent...');
 }else if(reactC == 1){
  reactC = 2;
  alert('Reaction already sent');
 }else if(reactC == 2){
  reactC = 3;
  alert('SYSTEM wont send, Stop!!!')
 }else{
  alert('Sorry, user damaged system');
 }
 
}