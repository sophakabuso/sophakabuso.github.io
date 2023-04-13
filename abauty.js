
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








let skillslist = [

  { img: './assets/icons/js.png', item: "JavaScript", level: 3 },
  { img: './assets/icons/pyy.png', item: "Python", level: 3 },
  { img: './assets/icons/cplusplus.png', item: "C++", level: 3 },
  { img: './assets/icons/html2.png', item: "HTML5", level: 3 },
  { img: './assets/icons/css3.png', item: "CSS3", level: 3 },
];

let list = "<div class='skill-list'>";
for (let i = 0; i < skillslist.length; i++) {

  list += 
    "<li><div class='skill-item'>" +
      "<img src='" + skillslist[i].img + "' alt='' class='skill-logo'>" +
      "<div class='skill-info'>" +
        "<div class='skill-name'>" + skillslist[i].item   + "</div>" +
        "<div class='skill-level'>Level " + skillslist[i].level +  "</br>"  +
      "</div>" +
    "</div></li>";
}

list += "</div>";

document.getElementById("skills-table").innerHTML = "<ul>"+ list + "<ul>";
console.log(list);



let personalInfo = [
  {
    firstName: "Sophakama",
    lastName: "Buso",
    gender: "Male",
    contact: "0670513147",
    emailaddress: "sopha.buso@gmail.com"
  },
];

let info = "";
for (let i = 0; i < personalInfo.length; i++) {
  info += '<li>' + "First Name: " + personalInfo[i].firstName +"</br>"+ "Last Name: " + personalInfo[i].lastName +
  "</br>"+"Gender: " + personalInfo[i].gender +"</br>"+ "Contact: " + personalInfo[i].contact +
  "</br>"+ "Email: " + personalInfo[i].emailaddress + '</li>';
};
document.getElementById("personalInfo").innerHTML ="<ul>" + info + "</ul>";



// Add the education data to the education container using JavaScript
let education = [{
  qualification: "Bachelor of Computer Science and Applied Mathematics",
  institution: "UNISA",
  year: "(2nd year currently)"
},
{
  qualification: "Higher Certificate Total Quality Management",
  institution: "UNISA",
  year: "2019"
},
{
  qualification: "Bachelor of Engineering Electrical Engineering",
  institution: "University of Pretorea",
  year: "2008-2009(not completed)"
},
{
  qualification: "Bachelor of computer Science and Physics",
  institution: "University Of Transkei(WSU)",
  year: "2004-2004(not cpmpleted)"
},
{
  qualification: "Senior Certificate",
  institution: "Ndabankulu SSS",
  year: "2004"
}];

// Loop through the array and create list items for each education entry
let edu = "";
for (let i = 0; i < education.length; i++) {
  edu += "<li>"+ education[i].qualification + " - " + education[i].institution + ", " + education[i].year + "</li>";
}

// Add the list items to the education container
document.getElementById("educationInfo").innerHTML = "<ul>" + edu + "</ul>";



let workExperience = [  {    company: "Rhodes Food Group Johannesburg",    position: "General worker",    startDate: "January 2021",    endDate: "July 2021",    responsibilities: "Assistant operator"  }, 
 {    company: "Le Morgan Johannesburg",    position: "Sales Consultant",    startDate: "January 2020",    endDate: "December 2020",    responsibilities: "Customer Service"  },
   {    company: "MediZone Health Care Johannesburg",    position: "Sales Consultant",    startDate: "February 2019",    endDate: "December 2019",    responsibilities: "Customer Service"  }, 
    {    company: "FrigoGlass South Africa Johannesburg",    position: "Quality Assurance & Inspection",    startDate: "February 2011",    endDate: "May 2018",    responsibilities: "Qualty Duties As Per Job Description"  },
      {    company: "Rehau Polymer Solutions East London",    position: "Operator",    startDate: "June 2006",    endDate: "May 2007",    responsibilities: "Moulding Machine Operator"  }, 
       {    company: "African Bank East London",    position: "Sales Consultant",    startDate: "February 2005",    endDate: "May 2006",    responsibilities: "Customer Service"  }];

let workList = "";
for (let i = 0; i < workExperience.length; i++) {
  workList += "<li><div class='company'>" + workExperience[i].company + "</div>";
  workList += "<div class='position'>" + workExperience[i].position + "</div>";
  workList += "<div class='date'>" + workExperience[i].startDate + " - " + workExperience[i].endDate + "</div>";
  workList += "<div class='responsibilities'>" + workExperience[i].responsibilities + "</div></li>";
}

document.getElementById("workInfo").innerHTML = "<ul>" + workList +  "</ul>";








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



