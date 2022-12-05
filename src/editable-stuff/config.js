// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Cynthia",
  middleName: "",
  lastName: "Kamau",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/CyndieKamau",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/cynthiamwihaki.kamau.1/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/cyndiekamau/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/cynthiakamau/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/CyndieKamau",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/CyndieKamau.png"),
  imageSize: 375,
  message:
    "My name is Cynthia Kamau.I am a High Performance Computing cluster engineer and an AWS Solutions Architect with a passion in CyberSecurity.I am really passionate about giving back to the community, especially raising awareness on CyberSecurity. In my free time I like blogging and teaching on AWS services.",
  resume: "https://drive.google.com/file/d/1QXAfxdsK38dg7FP8Dq2kPLNReqewPDbf/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "CyndieKamau", //i.e."My Projects"
  reposLength: 5,
  specificRepos: ["HPC-Documentation", "Network-Analysis", "Secure-Sysadmin-Practices", "My-DevOps-Projects", "ssh-pentesting"],
};

// VOLUNTEERING SECTION
const leadership = {
  show: true,
  heading: "Volunteering",
  message:
    "Volunteering is a core attribute of who I am. Here are some of my current volunteering activities;",
  images: [
    { 
      img: require("../editable-stuff/aws.png"), 
      label: "First slide label", 
      paragraph: "I am part of the AWS Community Builders program." 
    },
    { 
      img: require("../editable-stuff/ciso.jpeg"), 
      label: "Second slide label", 
      paragraph: "I am a team lead at the Young CISO Network organization." 
    },
    {
      img: require("../editable-stuff/isoc.png"),
      label: "Third slide label",
      paragraph: "I am a member of the Internet Society Kenya Chapter."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Linux", value: 90 },
    { name: "Python", value: 75 },
    { name: "Amazon Web Services", value: 85 },
    { name: "Network Exploitation", value: 75 },
    { name: "Network Administration", value: 90 },
    { name: "Privilege Escalation", value: 65 },
    { name: "Ansible", value: 55 },
    { name: "GitHub, Git", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Systems and Cloud Solutions Architect opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "cyndiekamaa@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Junior System Admin',
      companylogo: require("../assets/img/icipe.png"),
      date: 'July 2022 – Present',
    },
    {
      role: 'CyberSecurity intern', 
      companylogo: require("../assets/img/mosse.jpeg"),
      date: 'Sep 2021 - present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
