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


function pageLoad() {
    coolquote()
}


var quote = 
[
"Welcome to Paradigm!",
"I swear the Unit-01 colors were an accident!",
"The worst site since Noknok!",
"Stealing games, in a cool way!",
"We talk about 'survival of the fittest' a lot but all that really means is the skilled live and the unskilled die. Since you're clearly in that second group, maybe pick your fights a bit more carefully? Do you understand what I'm saying? It's never going to matter how much you 'want it' when you're up against someone who can kill you with a sneeze.",
"Sol Badguy",
"Subcribe to Shartlord!",
"What's an IDE?",
"Senile Grandpa",
"Back in my day, games weren't blocked!",
"3kh0 is cool!!!!",
"Fun fact: Noknok has had over 20 broken games in it's lifetime!",
"Fun fact: I would move the games over to this repo but it would make it really really big and i'm lazy",
"🖥",
]


function coolquote(){
    document.getElementById('thecoolquoter').innerHTML = quote[Math.floor(Math.random() * quote.length)]
}
