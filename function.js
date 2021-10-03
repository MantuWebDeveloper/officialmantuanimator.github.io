function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


document.addEventListener('DOMContentLoaded',function(event){
  
    var dataText = [ "Welcome To Mantu Animator's Website",];

    function typeWriter(text, i, fnCallback) {

      if (i < (text.length)) {

       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  

        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }

      else if (typeof fnCallback == 'function') {

        setTimeout(fnCallback, 700);
      }
    }

     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }

      if (i < dataText[i].length) {

       typeWriter(dataText[i], -18, function(){
       
         StartTextAnimation(i + 1);
       });
      }
    }

    StartTextAnimation(0);
  });