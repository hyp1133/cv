/*===========================================
               javascript snippet is 
               rg
============================================*/



/*===========================================
                Typing text efect js
============================================*/
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Web Designer", "Graphic Designer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

/*===========================================
                service js
                
                $(document).ready(function(){
    
}) this function short or equavlent form is given below
============================================*/

$(function(){
    /* activate wow plugin to animate n scroll*/
    new WOW().init();
})


/*===========================================
                work js
                
                $(document).ready(function(){
    
}) this function short or equavlent form is given below
============================================*/

$(function(){
    $('#work').magnificPopup({
         delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
        enabled:true
    }
    });
})


/*===========================================
                team member owl crousal activate js
                
                $(document).ready(function(){
    
}) this function short or equavlent form is given below
============================================*/
$(document).ready(function(){
  $("#staff").owlCarousel({
       items:1,
      autoplay:true,
      smartSpeed:900,
      loop:true,
      autoplayHoverPause:true,
      responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        700:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }
  });
});

/*===========================================
                testimonial owl crousal activate js
                
                $(document).ready(function(){
    
}) this function short or equavlent form is given below
============================================*/
$(document).ready(function(){
  $("#customer-testimonials").owlCarousel({
      items:1,
      autoplay:true,
      smartSpeed:900,
      loop:true,
      autoplayHoverPause:true
      
  });
});

/*===========================================
               countaer for stat activate js
                
                $(document).ready(function(){
    
}) this function short or equavlent form is given below
============================================*/

$(function(){
    $('.counter').counterUp({
    delay: 10,
    time: 1500
});
});

/*===========================================
               navigation scrool activate js
                
                $(document).ready(function(){
    
}) this function short or equavlent form is given below
============================================*/
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 80){
            //hide
           $("nav").removeClass("nav-color");
           }
           else{
           //show
               $("nav").addClass("nav-color");
           }
    });
});

/*===========================================
               smooth  scrool effect activate js
                
                $(document).ready(function(){
    
}) this function short or equavlent form is given below
============================================*/
$(function(){
    $("a.smooth-scrool").click(function(event){
        event.preventDefault();
        //get return  id like #home,#work etc
        var section = $(this).attr("href");
        
        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1450, "easeInOutExpo");
    });
})
/*===========================================
               close menu on  user c;lick activate js
                
                $(document).ready(function(){
    
}) this function short or equavlent form is given below
============================================*/
$(function(){
    $(".navbar-collapse ul li a").on("click touch",function(){
        $(".navbar-toggler").click();
    });
});