
// Create logo element
const logo = document.createElement("img");
logo.src = "./assets/logo/manex.png";
logo.alt = "Logo";
logo.width = 30;
logo.height = 30;
logo.id = "logo";

// Create navigator elements
const nav = document.createElement("nav");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");

a1.href = "index.html";
a2.href = "abaut.html";
a3.href = "contact.html";

a1.textContent = "Home";
a2.textContent = "About";
a3.textContent = "Contact";

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

nav.appendChild(ul);

// Add logo and navigator elements to header element
const header = document.getElementById("header");
header.appendChild(logo);
header.appendChild(nav);


const form = document.getElementById('contact-form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  });
  if (response.ok) {
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
  } else {
    alert('Oops! There was a problem submitting your message.');
  }
});




// Address
  let houseNumber = "D11-1";
  let streetName = "Colinder drive";
  let region = "Zone 6 Diepkoof Soweto";
  let province = "Gauteng";

  var homeAddress = document.getElementById("address");
  homeAddress.innerHTML = `ADDRESS:</br>${houseNumber} ${streetName} ${region} ${province}`;
  



//Map
var map = document.getElementById("map");
var mapUrl ="./assets/maps/myaddress.png";
map.innerHTML = 'MAP:<iframe src="' + mapUrl + '" height="100px" width="100px" frameborder="1%" style="border:01%" allowfullscreen></iframe>';

// Social Media
var socialMedia = document.getElementById("social-media");
var socialLinks = [
	{
		icon: "./assets/icons/facebook.jpg",
		link: "https://web.facebook.com/?_rdc=1&_rdr/"
	},
	{
		icon: "assets/icons/linked in.jpg",
		link: "https://www.linkedin.com/in/sophakama-buso-2a9191103/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeI%2FqN7XGSjOIIVcam21XIg%3D%3D"
	},
	{
		icon: "./assets/icons/twitter.jpg",
		link: "https://twitter.com/SophaBuso/"
	},
	{
		icon: "./assets/icons/github.png",
		link: "https://github.com/sophakabuso"
	},
	{
		icon: "./assets/icons/telegram.png",
		link: "https://web.telegram.org/z/#5412388785"
	},
	{
		icon: "./assets/icons/slack.png",
		link: "https://app.slack.com/client/T04M928TTMF/C04ML3U7DJLom/"
	},
  {
		icon: "./assets/icons/yotube.jpg",
		link: "https://www.youtube.com/channel/UCyNpThdRbyZYWdPT2NISEjg"
	},
	{
		icon: "./assets/icons/pinterest.png",
		link: "https://za.pinterest.com/sophabuso/"

	},
  {
		icon: "./assets/icons/instagram.png",
		link: "https://instagram.com/sopha.buso/"
	}


];


for (var i = 0; i < socialLinks.length; i++) {
	var socialIcon = document.createElement("img");
	socialIcon.src = socialLinks[i].icon;
	socialIcon.className = "social-icon";

	var socialLink = document.createElement("a");
	socialLink.href = socialLinks[i].link;
	socialLink.target = "_blank";
	socialLink.appendChild(socialIcon);

	socialMedia.appendChild(socialLink);
};
