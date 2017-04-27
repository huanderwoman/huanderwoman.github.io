// $(".quote").hover(function() {
//   console.log("heys");
//   $(".author").toggleClass('dark-author');
//   $(".author").toggleClass('light-author');
// }, function() {
//   $(".author").toggleClass('dark-author');
//   $(".author").toggleClass('light-author');
// });

function hoverHome(){
  $("#home-btn").hover(function() {
    $(this).addClass('active-home');
  }, function() {
    $(this).removeClass('active-home')
  });
}
function hoverWriting(){
  $("#writing-btn").hover(function() {
    $(this).addClass('active-writing');
  }, function() {
    $(this).removeClass('active-writing')
  });
}
function hoverResume(){
  $("#resume-btn").hover(function() {
    $(this).addClass('active-resume');
  }, function() {
    $(this).removeClass('active-resume')
  });
}
function hoverAbout(){
  $("#about-btn").hover(function() {
    $(this).addClass('active-about');
  }, function() {
    $(this).removeClass('active-about')
  });
}

// Highlight nav section of current page
function whichPage(){
  if ( document.URL.includes("index.html") ) {
  $("#home-btn").addClass('active-home');
  hoverAbout();
  hoverResume();
  hoverWriting();

  } else if ( document.URL.includes("about.html") ) {
    $("#about-btn").addClass('active-about');
    hoverHome();
    hoverResume();
    hoverWriting();
  } else if ( document.URL.includes("writing") ) {
    $("#writing-btn").addClass('active-writing');
    hoverAbout();
    hoverResume();
    hoverHome();
  } else if ( document.URL.includes("resume.html") ) {
    $("#resume-btn").addClass('active-resume');
    hoverAbout();
    hoverHome();
    hoverWriting();
  }
}





$(window).ready(updateHeight);
$(window).resize(updateHeight);
function updateHeight() {
    var div = $(".resize");
    var newWidth = div.width() * 1.15;

    div.css("height", newWidth);
  }

  // $(document).ready(function() {
  //   whichPage()
  // });


  // media query event handler
  if (matchMedia) {
    var mq = window.matchMedia("(min-width: 500px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      whichPage();

    } else {
      $(".fa").removeClass('fa-2x')
      $("#about-wrapper").addClass('container')


    }
  }
