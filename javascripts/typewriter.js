function writeContent(srcId,dstId,init){
    var charIndex       = this.charIndex ;
    var stringLength    = this.stringLength ;
    var inputText       = this.inputText ;
    if(init){
        charIndex = 0;
        inputText = document.getElementById(srcId).innerHTML;
        stringLength = inputText.length;
    }
    var initString = document.getElementById(dstId).innerHTML;
    initString = initString.replace(/<SPAN.*$/gi,"");
    
    var theChar = inputText.charAt(charIndex);
    var nextFourChars = inputText.substr(charIndex,4);
    if(nextFourChars=='<BR>' || nextFourChars=='<br>'){
        theChar  = '<BR>';
        charIndex+=3;
    }
    initString = initString + theChar + "<SPAN id='blink'>_</SPAN>";
    document.getElementById(dstId).innerHTML = initString;
    charIndex = charIndex/1 +1;
    if(charIndex%2==1){
         document.getElementById('blink').style.display='none';
    }else{
         document.getElementById('blink').style.display='inline';
    }
    this.charIndex  = charIndex ;
    this.stringLength = stringLength ;
    this.inputText  = inputText ;
            
    if(charIndex<=stringLength){
        setTimeout(writeContent,150,srcId, dstId,false);
        //setTimeout('writeContent(false)',150);
    }else{
        blinkSpan();
    }  
}
//闪烁效果
function blinkSpan(){
    var currentStyle = this.currentStyle ;
    if(currentStyle=='inline'){
        currentStyle='none';
    }else{
        currentStyle='inline';
    }
    this.currentStyle = currentStyle ;
    document.getElementById('blink').style.display = currentStyle;
    setTimeout('blinkSpan()',500);
}
