// function([string1, string2],target id,[color1,color2])    
consoleText(['Hi! I\'m Domingo Alonso'], 'text');

function consoleText(words, id) {
  var letterCount = 0;
  var visible = true;
  var con = document.getElementById('console');
//  var letterCount = 1;
//  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
//  target.setAttribute('style', 'color:' + colors[0])
  
  
  var interval = window.setInterval(function() {

    if (letterCount < words[0].length) {
//      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount + 1); //mostrar letras una a una
      letterCount ++ ;      /*
      window.setTimeout(function () {
        var usedWord = words.shift();
        words.push(usedWord);
        x=1;
        letterCount += x;
        waiting = false;
      }, 1000); */
    } else {
      clearInterval(interval);  //Detiene la animación al completar el texto
    } 
  }, 120);
  //cursor parpadeante

//  var visible = true;

  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}