var countDownDate=new Date("Nov 20, 2018 23:59:59").getTime();var x=setInterval(function(){var now=new Date().getTime();var distance=countDownDate-now;var days=Math.floor(distance/(1000*60*60*24));var hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));var minutes=Math.floor((distance%(1000*60*60))/(1000*60));var seconds=Math.floor((distance%(1000*60))/1000);document.getElementById("countdown-crazy").innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s ";if(distance<0){clearInterval(x);document.getElementById("countdown-crazy").innerHTML="EXPIRED"}},1000);$(window).scroll(function(){if($(window).scrollTop()>600){$('.sidebar').addClass('sticky-sidebar')}else{$('.sidebar').removeClass('sticky-sidebar')}});var fomo=[{place:"USA",tour:"Crazy Rich Asian"},{place:"Thailand",tour:"Trump Kim"},{place:"Australia",tour:"Chinese"}]
$(document).ready(function(){var i=0;var len=fomo.length;function fomoFunction(){$('#fomo').remove();var template=`<div class="fomo-box animated fadeInUp" id="fomo">Someone from `+fomo[i].place+` just purchase the `+fomo[i].tour+` tour package</div>`;$('body').append(template);i++;if(i<len){}else{i=0}
setTimeout(hideBox,3000);setTimeout(fomoFunction,10000)}
function hideBox(){$('#fomo').removeClass('fadeInUp');$('#fomo').addClass('fadeOutDown')}
fomoFunction()})
$("#up").click(function(){$("html, body").animate({scrollTop:0},"slow");return!1})


$(window).scroll(function () { 

    // distance from top of footer to top of document
    footertotop = ($('#footercrazy').position().top);
    // distance user has scrolled from top, adjusted to take in height of sidebar (570 pixels inc. padding)
    scrolltop = $(document).scrollTop()+570;
    // difference between the two
    difference = scrolltop-footertotop;
    
    // if user has scrolled further than footer,
    // pull sidebar up using a negative margin
    
    if (scrolltop > footertotop) {
    
    $('#pricesidebar').css('margin-top',  0-difference);
    }
    
    else  {
    $('#pricesidebar').css('margin-top', 0);
    }
    
    
    });

