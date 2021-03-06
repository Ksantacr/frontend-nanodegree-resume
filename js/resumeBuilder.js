
var bio = {
    name : 'Kevin Santacruz',
    role : 'Frontend Developer',
    contacts : {
        mobile : '+593-981893287',
        email : 'defonix0@gmail.com',
        github : 'Ksantacr',
        twitter : '@defonix0',
        location : 'Guayaquil, EC'
    },
    welcomeMessage : 'Smile you\'re being recorded',
    skills : [
        'HTML5',
        'CSS3',
        'JavaScript',
        'SQL',
        'Linux'
        ],
    biopic : 'http://i.imgur.com/2CmyWs1.jpg',
    display : function() {

        var headerName =  HTMLheaderName.replace("%data%", bio.name); //Name
        var headerRole = HTMLheaderRole.replace("%data%", bio.role);  //Role
        // added to #header element
        $("#header").prepend(headerRole);
        $("#header").prepend(headerName);

        // Contact info
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        // var blog = HTMLblog.replace("%data%", bio.contacts.blog);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        // header and footer info
        $("#topContacts").append(mobile, email, twitter, github, location);
        $("#footerContacts").append(mobile, email, twitter, github, location);

        var bioPic = HTMLbioPic.replace("%data%", bio.biopic);  //Personal image
        var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);  //Welcome Message
        $("#header").append(bioPic);
        $("#header").append(welcomeMessage);
        // Skills header
        $("#header").append(HTMLskillsStart);
        // Iterate over each skill
        bio.skills.forEach(function(skill) {
            var skillHTML = HTMLskills.replace("%data%", skill);
            $("#skills").append(skillHTML);
        });

    }
};

var education = {
    schools : [
        {
            name : 'San Benildo - La Salle',
            location : 'Guayaquil, EC',
            degree : 'Bachelor in Computer Science',
            majors : [
                'CS',
            ],
            dates : '2006-2012',
            url : ''
        },
        {
            name : 'ESPOL',
            location : 'Guayaquil, EC',
            degree : 'Degree in Web Design',
            majors : [
                'CS'
            ],
            dates : '2012-actual',
            url : 'http://www.espol.edu.ec/'

        }
    ],
    onlineCourses : [
        {
            title : 'Honor Code Certificate',
            school : 'EDX',
            dates : '2015-2016',
            url : 'https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-1'
        }
    ],
    display : function() {

        $("#education").append(HTMLschoolStart);

        education.schools.forEach(function(school){
            var schoolName = HTMLschoolName.replace("%data%", school.name);
            var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var link = schoolName + schoolDegree;
            var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);

            $(".education-entry:last").append(link);
            $(".education-entry:last").append(schoolDates);
            $(".education-entry:last").append(schoolLocation);
            school.majors.forEach(function(major){
                var schoolMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry:last").append(schoolMajor);

            });
        });
        $(".education-entry:last").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(course){

            var onlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var onlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var link = onlineTitle + onlineSchool;
            var onlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var onlineURL = HTMLonlineURL.replace("\"#\"", course.url + " target='_blank'").
                            replace("%data%", course.school);

            $(".education-entry:last").append(link);
            $(".education-entry:last").append(onlineDates);
            $(".education-entry:last").append(onlineURL);

        });

    }
};

var work = {
    jobs : [
        {
            employer : 'Diego Carrera',
            title : 'Frontend Developer',
            location : 'Guayaquil, EC',
            dates : '2016-2017',
            description : 'Build Nawi and ECP website using different technologies.'
        },
        {
            employer : 'Diego Carrera',
            title : 'Openstack researcher',
            location : 'Guayaquil, EC',
            dates : '2015-2016',
            description : 'Use power of openstack virtualization to increase performace in render works.'
        }
    ],
    display : function() {

        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job){
            var workEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var workTitle = HTMLworkTitle.replace("%data%", job.title);
            var link = workEmployer + workTitle;
            var workDates = HTMLworkDates.replace("%data%", job.dates);
            var workLocation = HTMLworkLocation.replace("%data%", job.location);
            var workDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(link);
            $(".work-entry:last").append(workDates);
            $(".work-entry:last").append(workLocation);
            $(".work-entry:last").append(workDescription);

        });

    }
};

var projects = {
    projects : [
        {
            title : 'Ñawi',
            dates : '2017',
            description : 'Develop a website for academic journals.',
            images : ['images/nawi.jpg']
        },
        {
            title : 'ECP',
            dates : '2016',
            description : 'Development of a website using drupal to share course schedules in ECP.',
            images : ['images/ecp.jpg']
        }
    ],
    display : function() {

        $("#projects").append(HTMLprojectStart);

        projects.projects.forEach(function(project){
            var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var projectDates = HTMLprojectDates.replace("%data%", project.dates);
            var projectDescription = HTMLprojectDescription.replace("%data%", project.description);

            $(".project-entry:last").append(projectTitle);
            $(".project-entry:last").append(projectDates);
            $(".project-entry:last").append(projectDescription);

            project.images.forEach(function(image){
                var projectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(projectImage);
            });

        });

    }
};



$("#mapDiv").append(googleMap);

// Uncomment to show all data in JS console.
bio.display();
education.display();
work.display();
projects.display();