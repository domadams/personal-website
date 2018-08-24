var scrollingWrapper = document.getElementById('scrolling-wrapper');
var axel = document.getElementById('axel');
var scrollWrapper = document.getElementById('scrolling-wrapper');
var sticky = axel.offsetLeft;
var scrolling = false;
var fixed = false;

scrollingWrapper.addEventListener('scroll', function() {
  scrolling = true;

  if ((scrollWrapper.scrollLeft + 180) > sticky) {
    fixed = true;
    axel.classList.add("bg-axel-fixed");
  } else {
    axel.classList.remove("bg-axel-fixed");
    fixed = false;
  }
});

setInterval( function() {
  if ( scrolling ) {
    scrolling = false;
    if(fixed) {
      if (axel.classList.contains('bg-AxelStand')) {
        axel.className = ('bg-Axel bg-AxelWalk bg-axel-fixed');
      }
      else if (axel.classList.contains('bg-AxelWalk')) {
        axel.className = ('bg-Axel bg-AxelWalk2 bg-axel-fixed');
      } else {
        axel.className = ('bg-Axel bg-AxelStand bg-axel-fixed');
      }
    }
    else {
      axel.className = ('bg-Axel bg-AxelStand');
    }
  }
}, 150 );
