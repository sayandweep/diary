window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    sayandweep.style.background = "white";
  } else {
    sayandweep.style.background = "#FEFBF5";
  }
};
