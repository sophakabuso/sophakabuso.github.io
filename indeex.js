
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

a1.href = "indeex.html";
a2.href = "abauty.html";
a3.href = "contacty.html";

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





// Create the video element
const videoElement = document.createElement('video');

// Set the video source
videoElement.src = './assets/videos/oneshot.mp4';

 //Add controls to the video player
videoElement.controls = true;

// Set the dimensions of the video player
videoElement.width = 640;
videoElement.height = 360;

// Add the video element to the HTML page
const videoContainer = document.getElementById('videocontainer');
videoContainer.appendChild(videoElement);






// Create a biography element
const Bio = document.createElement("div");
// Add the biography content
Bio.innerHTML =`<h1>My Biography  </h1>
<p>My name is Sophakama Buso I was born on the 2nd of September 1985, originally I’m from
the
strikingly beautiful green landscapes of eGcuwa in the Eastern Cape, now I am residing in
the
historical township of Soweto in Johannesburg, since 2010. I reflect a varied personality
including
ambition, and the qualities of generosity and thoughtfulness. I am also definite and purposeful, well
determined and vigorous individual, yet pleasantly calm. I encourage fighting for what you desire
and believe in, and doing it through the wisdom of all those who came before us, that is our
Ancestors because nothing great comes easy and with God everything is possible.</p>

<p>In 2004 I studied for Bsc(Computer Science and Physics) at UNITRA now Walter Sisulu
University in Mthatha due to unforeseen events related to my heath I was unable to finish 1 st year.
In 2008 Eskom offered me a bursary to study Beng(Electrical Engineering) at the University of
Pretoria which I studied for two years before circumstances related to my health forced my studies
to be terminated. Motivated by my love for learning in 2017 I registered for BSc( Computer Science
Applied Mathematics) with UNISA which I am still currently studying and on 2nd year, in 2018 I
registered for Higher Certificate in Total Quality Management with UNISA which I completed in
2004 up-to-date I have worked in various industries from Banking and Financial Services,
Manufacturing, Engineering, Retail, Sales etc.,I have also been involved in numerous community
activities from various structures Political, Recreation, Religious, Business and Policing forums
taking numerous leadership positions.</p>

<p>As I strive to become an outstanding and successful individual in today’s society and through my
passion for Science and Technology and love for Humanity I have embraced a fanatical interest on
how to better utilise advancing technologies and innovations in order to transform our economies to
be inclusive, and eliminate Poverty in our country and the continent. Over the years I have
accumulated vast knowledge and wisdom, which gave me certain set of qualities including
Analytical, decisive, detailed, Goal oriented, organised, entrepreneurial, tech-savy, team player and
innovator.</p>

<p>Apart from the above I have, kept keen interest in cosmology and programming and I enjoy doing
research on key concepts and strategies that can be utilised to bring about prosperity and eliminate
poverty amongst our society, and most importantly I enjoy spending time with my loved ones.</P>

<p><em>In every science there's the spirit of the times that dictates to some degree the way facts are seen.
  *SIGHTS:how we view our world, *CONCEPTS:what we see creates a picture, *VIEWS:how we see facts(reality)</em></p>.
`;
// Add the biography element to the document
const container = document.getElementById("biocontainer");
container.insertBefore(Bio, container.firstChild);




/// create a new image element
var imageElement = document.createElement('img');

// set the source attribute of the image element
imageElement.src = './assets/images/mna.jpg'; style="border-radius: 50%;object-fit: cover;border:5px solid rgb(18, 17, 17);width:200px; height:200px" ;
 
// set the alt attribute of the image element
imageElement.alt = 'S Buso';


// set additional attributes

      imageElement.width = '200';              // set the width of the image
      imageElement.height = '200';            // set the height of the image
     imageElement.radius = '50%';
// append the image element to the image container div
var imageContainer = document.getElementById("imagecontainer");
imageContainer.appendChild(imageElement);







// Address
  let houseNumber = "D11-1  ";
  let streetName = "Colinder drive";
  let region = "Zone 6 Diepkoof Soweto";
  let province = "Gauteng";

  var homeAddress = document.getElementById("address");
  homeAddress.innerHTML = `ADDRESS:</br>${houseNumber} ${streetName} ${region} ${province}`;
  


//Map
var map = document.getElementById("map");
var mapUrl ="./assets/maps/myaddress.png";
map.innerHTML = `MAP:</br><iframe src="${mapUrl}" height="100%" width="100%" frameborder="2%" style="border:02%" allowfullscreen></iframe>`;

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


