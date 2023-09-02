

document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("randomGameButton").addEventListener("click", getRandomGameURL);
});

// ttabclock

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

//  iiii seee the dropdown 
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


// Yeah this is the quoter

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
"Someday i will learn how to use emulator.js!",
"This site has games",
"I'm not adding different themes to the site because im lazy",
"Insert really obscure reference here",
"Robo Ky for Strive",
"Most of these must sound like insane ramblings haha",
"Email me at paradigmgit@gmail.com to suggest games, features, and even stupid quotes like this!",
"🖥",
"https://www.youtube.com/channel/UCzVHyU7R36cU13tfsmitiOg",
"if i knew how to add a chat feature i wouldn't because letting teens have an uncensored chat is a recipe for disaster",
"No evil clowns here!",
"Honestly quite incredible",
"The site of all time",
"'go outside' - words of a person who needs to go outside",
"gripe is a cool man",
"Shinji, crank that soulja boy",
"You can click on this thing for a new stupid quote",
" II Ii I I I_",
"These are in the main js file instead of their own because i'm an idiot",
"Idle Breakout, I have breakouts on my face",
"github.com/shartlord",
"Bedman",
"Favicons only work on game pages!"
]

function pageLoad() {
    coolquote()
}


function coolquote(){
    document.getElementById('thecoolquoter').innerHTML = quote[Math.floor(Math.random() * quote.length)]
}

 // uhhhh the uhhhh uh Random game function


    function getRandomGameURL() {

        var gameList = [
            "2048.html",
            "btd4.html",
            "amogus.html",
	    "infernalthrone.html"

        ];

        var randomIndex = Math.floor(Math.random() * gameList.length);

        var randomGameURL = "apps/" + gameList[randomIndex];

        window.location.href = randomGameURL;
	
    }

    document.getElementById("randomGameButton").addEventListener("click", getRandomGameURL);




