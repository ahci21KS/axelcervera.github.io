var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    if(window.screen.width==1980){      
      document.getElementById("navbar").style.top = "-150px";
    }else{
      document.getElementById("navbar").style.top = "-50px";
    }
  }
  prevScrollpos = currentScrollPos;
}
