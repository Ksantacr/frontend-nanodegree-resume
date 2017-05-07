
var bio = {
    name : 'Kevin Santacruz',
    rolo : 'Frontend Developer',
    contacts : {
        mobile : '+593-981893287',
        email : 'defonix0@gmail.com',
        github : 'Ksantacr',
        twitter : '',
        location : 'Guayaquil, EC'
    },
    welcomeMessage : 'Hello there! Feel free to browse on my page.',
    skills : [
        'HTML5',
        'CSS3',
        'JavaScript',
        'SQL',
        'Linux'
        ],
    biopic : 'http://i.imgur.com/2CmyWs1.jpg',
    display : function() {

    }
};

var education = {
    schools : [
        {
            name : 'San Benild - La Salle',
            location : 'Guayaquil, EC',
            degree : 'Bachelor in Computer Science',
            majors : [
                'Fake major 1',
                'Fake major 2'
            ],
            dates : '2006-2012',
            url : ''
        },
        {
            name : 'ESPOL',
            location : 'Guayaquil, EC',
            degree : 'Degree in Web Design',
            majors : [],
            dates : '2012-actual',
            url : 'http://www.espol.edu.ec/'

        }
    ],
    onlineCourses : [
        {
            title : '',
            school : '',
            dates : '2015-2016',
            url : 'https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-1'
        }
    ],
    display : function() {

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
        
    }
};