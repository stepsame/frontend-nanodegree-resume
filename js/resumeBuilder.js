/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("BuTong");
/*
 var awesomeThoughts = "I am Bu Tong and I am AWESOME!";

 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

 // $("#main").append(funThoughts);

 var name = "Bu Tong";
 var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

var skill = 
["awesomeness", "programming", "teaching", "JS"];

var bio = {};
bio = {
 	"name" : "Bu Tong",
 	"role" : "Web Developer",
 	"contact_info" : {
 		"mobile" : "18765153557",
 		"email" : "stepsame@gmail.com",
 		"github" : "stepsame",
 		"twitter" : "@stepsame",
 		"location" : "Weifang"
 	},
 	"picturl_url" : "images/me.jpg",
 	"welcome_message" : "hello",
 	"skill" : skill
};

var work = {};
work.job_position = "None";
work.employer = "Home";
work.years_worked = 0.5;
work.city = "Weifang";

var education = {};
education["name"] = "SCAU";
education["years"] = "2010-2014";
education["city"] = "Guangzhou";

$("#main").append(work["job_position"]);
$("#main").append(education.name);
*/
var work = {
	"jobs": [
		{
			"employer": "perssoft",
			"title": "Web Developer Intern",
			"location": "Weifang",
			"dates": "20141201-20150601",
			"description": "Java"
		}
	]
};
var projects = {
	"projects": [
		{
			"title": "patent institution",
			"dates": "20150501",
			"description": "None",
			"images": []
		}
	]
};
var bio = {
	"name": "Bu Tong",
	"role": "Web Developer",
	"welcomeMessage": "None",
	"contacts": {
		"mobile": "18765153557",
		"email": "stepsame@gmail.com",
		"github": "stepsame",
		"twitter": "@stepsame",
		"location": "Weifang"
	},
	"image" : "images/me.jpg",
	"skills": [
		"programming", "learning"
	]
};
var education = {
	"schools": [
		{
			"name" : "SCAU",
			"location" : "Guangzhou",
			"degree": "Bachelor",
			"majors" : [
				"Horticultural"
			],
			"dates" : "2010-2014",
			"url": "www.scau.edu.cn"
		},
		{
			"name" : "Weifang no.7 middle school",
			"location" : "Weifang",
			"dates" : "2007-2010",
			"url": "www.wfdqzx.com"
		}
	],
	"onlineCoursers": [
		{
			"title": "CS101",
			"school": "Udacity",
			"dates": "2015",
			"url": "www.udacity.com"
		}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	for(var i in bio.contacts) {
		var formattedHTMLcontact = HTMLcontactGeneric.replace("%data%", bio.contacts[i]).replace("%contact%", i);
		$("#topContacts").append(formattedHTMLcontact);	
	}
	
	var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.image);
	$("#header").append(formattedHTMLbioPic);

	var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedHTMLwelcomeMsg);	

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(var i in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);	
		}
	}	
}
bio.display();


work.display = function() {
	for(var i in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

$("#main").append(internationalizeButton);

function inName() {
	var array = $("#name").text().trim().split(" ");
	var firstName = array[0][0].toUpperCase() + array[0].slice(1).toLowerCase();
	var lastName = array[1].toUpperCase();
	return  firstName + " " + lastName;
}

projects.display = function() {
	for(var i in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedprojectTitle);
		
		var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedprojectDates);
		
		var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedprojectDescription);
		
		for(var j in projects.projects[i].images) {
			var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
			$(".project-entry:last").append(formattedprojectImage);
		}
	}
}

projects.display();

education.display = function() {
	for(var i in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		$(".education-entry:last").append(formattedHTMLschoolName);

		var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		$(".education-entry:last").append(formattedHTMLschoolDegree);

		var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedHTMLschoolDates);

		var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedHTMLschoolLocation);

		for(var j in education.schools[i].majors) {
			var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
			$(".education-entry:last").append(formattedHTMLschoolMajor);
		}	
	}

	for(var i in education.onlineCoursers) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCoursers[i].title);
		$(".education-entry:last").append(formattedHTMLonlineTitle);

		var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCoursers[i].school);
		$(".education-entry:last").append(formattedHTMLonlineSchool);

		var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCoursers[i].dates);
		$(".education-entry:last").append(formattedHTMLonlineDates);

		var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", education.onlineCoursers[i].url);
		$(".education-entry:last").append(formattedHTMLonlineURL);
	}
}

education.display();

$("#mapDiv").append(googleMap);