$(document).ready(() => {
  $(document).keydown(function (event) {
    if (event.keyCode == 123) {
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73 || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
      return false;
    }
  });
  document.addEventListener('contextmenu', function (event) {
    {}
    event.preventDefault();
  }, false);
  console.log('%cSTOP!', 'color: red; text-shadow: 2px 0px #000, 0px -2px #000, -2px 0px #000, 0px 2px #000;font-size: 7vh; font-weight: 600;font-family:Calibri');
  console.log('%cThis website is protected by a copyright. If you\'re looking for more information, please contact Elle.', 'color: #333; font-size: 3vh;font-family: Calibri;');
  console.log('%cIf you want to know more, go to https://ellexidecodes.github.io/FAQ.html', 'color: #333; font-size: 3vh;font-family: Calibri;');
});
