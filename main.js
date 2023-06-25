function blank(){
      (function () {var url = document.URL; var urlObj = new window.URL(window.location.href); win = window.open(); win.document.body.style.margin = "0"; win.document.body.style.height = "100vh"; var iframe = win.document.createElement("iframe"); iframe.style.border = "none"; iframe.style.width = "100%"; iframe.style.height = "100%"; iframe.style.margin = "0"; iframe.referrerpolicy = "no-referrer"; iframe.allow = "fullscreen"; iframe.src = url.toString(); win.document.body.appendChild(iframe); var script = win.document.createElement("script"); script.src = ""; win.document.body.appendChild(script); })();
    }
	function tabcloakergoogle() {
    var l = document.querySelector("link[rel*='icon']") || document.createElement('link');
    l.type = 'image/x-icon';
    l.rel = 'shortcut icon';
    l.href = 'https://google.com/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(l);
    document.title = 'Google';
}
	function tabcloakercanvas() {
    var l = document.querySelector("link[rel*='icon']") || document.createElement('link');
    l.type = 'image/x-icon';
    l.rel = 'shortcut icon';
    l.href = 'https://canvas.wfu.edu/app/uploads/sites/12/2019/09/canvas-logo-1024x1020.png';
    document.getElementsByTagName('head')[0].appendChild(l);
    document.title = 'Canvas';
}

	function tabcloakernew() {
    var l = document.querySelector("link[rel*='icon']") || document.createElement('link');
    l.type = 'image/x-icon';
    l.rel = 'shortcut icon';
    l.href = 'https://icon-library.com/images/google-chrome-white-icon/google-chrome-white-icon-26.jpg';
    document.getElementsByTagName('head')[0].appendChild(l);
    document.title = 'New Tab';
}


function Dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
