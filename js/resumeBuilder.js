var work = {
	"jobs" : [ /* JSON data for all work experience */
		{
			"employer" : "Buffalo Wild Wings",
			"title" : "Server",
			"location" : "Wesley Chapel, FL",
			"dates" : "September 2016-June 2017",
			"description" : "Buffalo Wild Wings has been around for many years \
			and yet one thing remains the same: Buffalo Wild Wings is the \
			ultimate place to get together with your friends, watch sports, \
			drink beer and eat wings."
		},
		{
			"employer" : "TGI Fridays",
			"title" : "Server",
			"location" : "Tampa, FL",
			"dates" : "March 2014-September 2016",
			"description" : "As the original casual dining bar and grill,\
			 TGI Fridays offers authentic American food and legendary drinks, \
			 served with genuine personal service. Bringing people together to \
			 socialize and celebrate the freeing and liberating spirit of \
			 &quotFriday.&quot As a server, I was actively engaged in creating \
			 a place where friends feel free to get together and made every day \
			 feel like a Friday for guests.<br/><br/>\
			 &bull; Achieved a consistent top-third ranking in per-person-average sales; $1000 average shift sales<br/>\
			 &bull; Coach and direct strong team relationships to exceed guests’ needs in food service and hospitality<br/>\
			 &bull; Trained over 30 new employees in hospitality, restaurant standards, guest service, and food safety"
		},
		{
			"employer" : "United States Air Force Reserve",
			"title" : "Professional Officer Course Cadet",
			"location" : "Tampa, FL",
			"dates" : "August 2013-June 2014",
			"description" : "Air Force ROTC Detachment 158 at University of South Florida<br/><br/>\
			&bull;  Collaborated alongside 35 contracted cadets and 6 officer cadre to execute an outstanding ROTC training program<br/>\
			&bull; Directed an awards program for entire Cadet Wing; increased cadet motivation and productivity<br/>\
			&bull; Lead over 120 freshmen cadets in drill & ceremonies that resulted in high cadet performance ratings"
		},
		{
			"employer" : "Tia's Tex-Mex",
			"title" : "Bartender/Server",
			"location" : "Tampa, FL",
			"dates" : "August 2013-March 2014",
			"description" : "At Tia’s we strive to be our guest’s first choice, a \
			great place to work, to display superior ethics and behavior, and to \
			realize that words of wisdom come only with the pain of experience. \
			Unfortunately, Tia's had to close their doors on March 1, 2014.<br/><br/> \
			&bull; Promoted to Bartender in under 6 months with no experience; expeditious and effective learner\
			&bull; Up sold items at every opportunity, and facilitated an engaging team environment and culture"
		},
		{
			"employer" : "Air Force ROTC Field Training Field Training",
			"title" : "Military Cadet",
			"location" : "Montgomery, AL",
			"dates" : "June 2013-July 2013",
			"description" : "The Field Training program is designed to evaluate \
			military leadership and discipline, determine the cadet's potential \
			for entry into the Professional Officer Course (POC), and to stratify \
				cadets amongst their peers. This valuable training program takes \
			place the summer before cadets enter the POC. Completion of this \
			4-week boot camp-style training is a mandatory program for all \
			individuals qualified to pursue an Air Force commission through \
			Air Force Reserve Officer Training Corps.<br/><br/>\
			&bull; Learned and engaged in vital leadership skills training from USAF officers from around the world<br/>\
			&bull; Graduated from intense Air Force ROTC Field Training and earned Prop and Wings recognition"
		},
		{
			"employer" : "University of South Florida",
			"title" : "Full-time student & ROTC Cadet",
			"location" : "Tampa, FL",
			"dates" : "October 2012-June 2013",
			"description" : "While studying full-time at USF, I was also a full-time \
			field training preparation cadet in Air Force ROTC.  Due to being an unconctracted, \
			I was competing with my entire cadet class for an enrollment allocation to field training."
		},
		{
			"employer" : "HomeGoods",
			"title" : "Sales Associate",
			"location" : "Lutz, FL",
			"dates" : "August 2012-October 2012",
			"description" : "Received and processed bi-weekly shipments ranging \
			from 25-40 pallets of product per week. I handled front-end customer \
			service duties, including satisfying customer inquiries, completing \
			sales at a register from start to finish, and assisting customers \
			with moving and loading large/bulky purchases."
		},
		{
			"employer" : "TJ Maxx",
			"title" : "Customer Experience Coordinator",
			"location" : "Bradenton, FL",
			"dates" : "December 2008-August 2012",
			"description" : "TJ Maxx is a major clothes retailer of over 1000 \
			stores strong and offers high-quality, brand-name and designer \
			fashions at prices generally 20%–60% less than department and \
			specialty store regular prices on comparable merchandise.<br/><br/>\
			&bull; Marketed and produced a monthly average of 30 rewards credit card applications and increased sales<br/>\
			&bull; Administered change orders, petty cash in/out transactions, and cash pulls exceeding $2,000<br/>\
			&bull; Coordinated over 50 employees in cash handling, customer service, and inventory management<br/>\
			&bull; Headed all new employee training for 3 years and supervised front-end managerial duties"
		}
	],
	"display" : function(){ /* function for appending content inside the work object */

			for(var job in work.jobs) {
			if (work.jobs.hasOwnProperty(job)) {

			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			$(".work-entry:last").append(formattedWorkEmployer.concat(formattedWorkTitle));
			var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);
			var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedWorkDates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkDescription);

		}
		}
	}
};

var projects = {
	"projects" : [ /* JSON data for projects */
			{
			"title" : "thrallbrowser",
			"link" : "http://github.com/immotal/thrallbrowser",
			"description" : "&bull; Created an interactive single page app that serves as a tool to simpifly data from a server<br/>\
			&bull; Utilized component oriented programming concepts in JavaScript<br/>\
			&bull; Dynamically populated content from a backend API",
			"images" : [],
			"url" : "http://github.com/immotal/thrallbrowser"
		},
		{
			"title" : "Interactive Resume",
			"link" : "http://github.com/immotal/resume",
			"description" : "&bull; Constructed a fun and more detailed resume with an interactive map<br/>\
			&bull; Utilized JavaScript, jQuery, and worked with Google Maps API<br/>\
			&bull; This project has also been launched at my website, http://www.coreykovalik.com/resume",
			"images" : [],
			"url" : "http://www.coreykovalik.com/resume"
		},
		{
			"title" : "Professional Portfolio",
			"link" : "http://github.com/immotal/portfolio",
			"description" : "&bull; Built a responsively designed portfolio to showcase finished and planned projects<br/>\
			&bull; Utilized HTML5, CSS3, Bootstrap framework, and grunt in this project<br/>\
			&bull; This project is currently launched at my website, http://www.coreykovalik.com/",
			"images" : ["images/coreykovalik_200.png"],
			"url" : "http://www.coreykovalik.com"
		}
	],
	display : function(){ /* function for appending content inside the projects object */

			for(var project in projects.projects) {
			if (projects.projects.hasOwnProperty(project)) {

				$("#projects").append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);
				$(".project-entry:last").append(formattedProjectTitle);
				var formattedProjectLink = HTMLprojectLink.replace("%data%", projects.projects[project].link);
				formattedProjectLink = formattedProjectLink.replace("%link%", projects.projects[project].link);
				$(".project-entry:last").append(formattedProjectLink);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
				$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[project].images.length > 0) {
				for (var image in projects.projects[project].images) {
					if (projects.projects[project].images.hasOwnProperty(image)) {
						var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
						formattedProjectImage = formattedProjectImage.replace("%url%", projects.projects[project].url);
						$(".project-entry:last").append(formattedProjectImage);
					}
				}
			}
			}
			}
		}
};

var bio = { /* JSON data for biographical and contact information */
	"name" : "Corey Kovalik",
	"role" : "Junior Developer",
	"contacts" : {
		"email": "coreykovalik@gmail.com",
		"mobile": "941-504-1142",
		"github": "Immotal",
		"twitter": "@CoreyKovalik",
		"location": "Tampa, Florida",
		"twitterURL": "https://twitter.com/CoreyKovalik",
		"githubURL": "https://github.com/immotal",
		"nameURL": "http://www.coreykovalik.com"
	},
	"biopic" : "images/pictureofme.jpg",
	"welcomeMessage" : "\"Logic will get you from A to B. Imagination will take you everywhere.\"",
	"skills" : ["JavaScript","jQuery","HTML5","CSS3","Git","responsive design","GitHub","Grunt","webpack","Sublime","Vim","Bootstrap"],
	display : function() { /* function for appending content inside the bio object */
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		formattedName = formattedName.replace("%url%", bio.contacts.nameURL);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);


		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		formattedGithub = formattedGithub.replace("%url%", bio.contacts.githubURL);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		formattedTwitter = formattedTwitter.replace("%url%", bio.contacts.twitterURL);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedWebsite = HTMLwebsite.replace("%data%", bio.contacts.nameURL);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedWebsite);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);

		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		formattedBiopic = formattedBiopic.replace("%url%", bio.contacts.nameURL);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedBiopic);
		$("#header").append(formattedWelcomeMsg);

		if(bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);
			for (var skill in bio.skills) {
				if (bio.skills.hasOwnProperty(skill)) {
					var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
					$("#skills").append(formattedSkill);
				}
			}
		}
	}
};

var education = { /* JSON data for education information */
	"schools" : [
		{
			"name" : "freeCodeCamp",
			"location" : "Online Course",
			"degree" : "Full Stack Web Development Certification",
			"majors" : ["N/A"],
			"dates" : "2017-2018",
			"url" : "https://www.freecodecamp.com"
		},
		{
			"name" : "Udacity",
			"location" : "Online Course",
			"degree" : "Front-End Web Developer Nanodegree",
			"majors" : ["N/A"],
			"dates" : "2016-2017",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"name" : "University of South Florida",
			"location" : "Tampa, Florida",
			"degree" : "Bachelor of Arts Degree",
			"majors" : ["Psychology"],
			"dates" : "2012-2015",
			"url" : "http://www.usf.edu/"
		},
		{
			"name" : "State College of Florida",
			"location" : "Bradenton, Florida",
			"degree" : "Associate of Arts Degree",
			"majors" : ["N/A"],
			"dates" : "2010-2012",
			"url" : "http://www.scf.edu/"
		}
	// ],
	// "onlineCourses" : [
	// 	{
	// 		"school" : "Udacity (udacity.com)",
	// 		"title" : "Front-End Web Developer Nanodegree",
	// 		"date" : "2015-2016",
	// 		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	// 	}
	],
	display : function() {
		for (var school in education.schools) {
			if(education.schools.hasOwnProperty(school)) {

				$("#education").append(HTMLschoolStart);
				var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
				formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append(formattedSchoolName.concat(formattedSchoolDegree));
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedSchoolDates);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedSchoolLocation);
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				if (education.schools[school].majors == "N/A")
					{
						$(".education-entry:last").append("<br/>");
					} else {
				$(".education-entry:last").append(formattedSchoolMajor);
				}
			}
		}

		// $("#education").append(HTMLonlineClasses);
		// for (var online in education.onlineCourses) {
		// 	if(education.onlineCourses.hasOwnProperty(online)) {

		// 		$("#education").append(HTMLonlineStart);
		// 		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
		// 		formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[online].url);
		// 		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
		// 		$(".online-entry:last").append(formattedOnlineTitle.concat(formattedOnlineSchool));
		// 		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
		// 		$(".online-entry:last").append(formattedOnlineDates);
		// 	}
		// }
	}
};

/* Display resume data */
bio.display();
work.display();
projects.display();
education.display();

/* Google Map */
$("#mapDiv").append(googleMap);

/* Button that 'internationalizes' a name by capitalizing the entire last name */
/*--disabled feature below--
function inName(name) {
  var name = bio.name.trim().split(" ");
  var firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  var lastName = name[1].toUpperCase();
  var oldSpelling = $('#name').text();
  var newSpelling = firstName + " " + lastName;
  $('#name').text( newSpelling );
}

$("#main").prepend(internationalizeButton);
--disabled feature above-- */

/* Log page clicks to console */
$(document).click(function(loc) {

	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});