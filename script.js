var sign = [0, 1];
var turn = 0;
var square1 = 0;
var square2 = 0;
var square3 = 0;
var square4 = 0;
var square5 = 0;
var square6 = 0;
var square7 = 0;
var square8 = 0;
var square9 = 0;

if (turn%2 === 0){
    
}
$(document).ready(function(){
   $('#spot1').click(function(){
        if(square1 === 0){
            if (turn%2 === 0){
                $('#X1').fadeIn('fast');
           }else{
                $('#O1').fadeIn('fast');
           };
           turn++;
            square1++;
        }
   });
    
    $('#spot2').click(function(){
        if(square2 === 0){
            if (turn%2 === 0){
                $('#X2').fadeIn('fast');
           }else{
                $('#O2').fadeIn('fast');
           };
           turn++;
            square2++;
        }
   });
    
    $('#spot3').click(function(){
        if(square3 === 0){
            if (turn%2 === 0){
                $('#X3').fadeIn('fast');
           }else{
                $('#O3').fadeIn('fast');
           };
           turn++;
            square3++;
        }
   });
    
    $('#spot4').click(function(){
        if(square4 === 0){
            if (turn%2 === 0){
                $('#X4').fadeIn('fast');
           }else{
                $('#O4').fadeIn('fast');
           };
           turn++;
            square4++;
        }
   });
    
    $('#spot5').click(function(){
        if(square5 === 0){
            if (turn%2 === 0){
                $('#X5').fadeIn('fast');
           }else{
                $('#O5').fadeIn('fast');
           };
           turn++;
            square5++;
        }
   });
    
    $('#spot6').click(function(){
        if(square6 === 0){
            if (turn%2 === 0){
                $('#X6').fadeIn('fast');
           }else{
                $('#O6').fadeIn('fast');
           };
           turn++;
            square6++;
        }
   });
    
    $('#spot7').click(function(){
        if(square7 === 0){
            if (turn%2 === 0){
                $('#X7').fadeIn('fast');
           }else{
                $('#O7').fadeIn('fast');
           };
           turn++;
            square7++;
        }
   });
    
    $('#spot8').click(function(){
        if(square8 === 0){
            if (turn%2 === 0){
                $('#X8').fadeIn('fast');
           }else{
                $('#O8').fadeIn('fast');
           };
           turn++;
            square8++;
        }
   });
    
    $('#spot9').click(function(){
        if(square9 === 0){
            if (turn%2 === 0){
                $('#X9').fadeIn('fast');
           }else{
                $('#O9').fadeIn('fast');
           };
           turn++;
            square9++;
        }
   });
    
});