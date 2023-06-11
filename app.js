
let resume = {
  basicInfo: {},
  education: [],
  workExperience: [],
  skills: [],
  achievements: '',
  projects: [],
  socialLinks: {},
};

function displayContent(sectionId) {
  const sections = document.querySelectorAll('.main-content > div');
  const downloadButton = document.getElementById('downloadButton');

  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = 'block';
      downloadButton.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

function addSkill() {
  const skillInput = document.querySelector('#skills input[name="skill"]');
  const skillList = document.getElementById('skill-list');

  if (skillInput.value.trim() !== '') {
    const skill = document.createElement('li');
    skill.textContent = skillInput.value.trim();
    skillList.appendChild(skill);
    skillInput.value = '';
    
    // Save the skill in the resume object
    resume.skills.push(skill.textContent);
  }
}

// Function to save basic info
function saveBasicInfo() {
  const fullName = document.querySelector('input[name="Full name"]').value;
  const mobileNumber = document.querySelector('input[name="Mobile Number"]').value;
  const dob = document.querySelector('input[name="DOB"]').value;
  const title = document.querySelector('input[name="Title"]').value;
  const email = document.querySelector('input[name="Email"]').value;
  const address = document.querySelector('textarea[name="address"]').value;


  // Display saved basic info in the download section
  const downloadSection = document.querySelector('#download');
  downloadSection.innerHTML = `
    <h2>Download Resume</h2>
    <p>Name: ${fullName}</p>
    <p>Mobile: ${mobileNumber}</p>
    <p>DOB: ${dob}</p>
    <p>Email: ${email}</p>
    <p>Title: ${title}</p>
    <p>Address: ${address}</p>
  `;
  
}

document.querySelector('#basic-info button').addEventListener('click', saveBasicInfo);

// Function to save education
function saveEducation() {
  const instituteName = document.querySelector('input[name="institute name"]').value;
  const state = document.querySelector('input[name="STATE"]').value;
  const degree = document.querySelector('input[name="DEGREE"]').value;
  const fieldOfStudy = document.querySelector('input[name="FIELD OF STUDY"]').value;
  const startDate = document.querySelector('input[name="START DATE"]').value;
  const percentageCGPA = document.querySelector('input[name="PERCENTAGE/CGPA"]').value;

  const education = {
    instituteName,
    state,
    degree,
    fieldOfStudy,
    startDate,
    percentageCGPA,
  };

  resume.education.push(education);

  // Display saved education in the download section
  let educationHTML = '<h2>Education</h2>';
  for (const edu of resume.education) {
    educationHTML += `
      <p>Institute: ${edu.instituteName}</p>
      <p>State: ${edu.state}</p>
      <p>Degree: ${edu.degree}</p>
      <p>Field of Study: ${edu.fieldOfStudy}</p>
      <p>Start Date: ${edu.startDate}</p>
      <p>Percentage/CGPA: ${edu.percentageCGPA}</p>
    `;
  }
  const downloadSection = document.querySelector('#download');
  downloadSection.innerHTML += educationHTML;


}

// Add event listener for the education section
document.querySelector('#education button').addEventListener('click', saveEducation);

// Function to save work experience
function saveWorkExperience() {
  const employer = document.querySelector('input[name="EMPLOYER"]').value;
  const jobTitle = document.querySelector('input[name="JOB TITLE"]').value;
  const startDate = document.querySelector('input[name="START DATE"]').value;
  const state = document.querySelector('input[name="STATE"]').value;
  const description = document.querySelector('textarea[name="DISCRIPTION"]').value;

  const workExp = {
    employer,
    jobTitle,
    startDate,
    state,
    description,
  };

  resume.workExperience.push(workExp);

  // Display saved work experience in the download section
  let workExpHTML = '<h2>Work Experience</h2>';
  for (const exp of resume.workExperience) {
    workExpHTML += `
      <p>Employer: ${exp.employer}</p>
      <p>Job Title: ${exp.jobTitle}</p>
      <p>Start Date: ${exp.startDate}</p>
      <p>State: ${exp.state}</p>
      <p>Description: ${exp.description}</p>
    `;
  }
  const downloadSection = document.querySelector('#download');
  downloadSection.innerHTML += workExpHTML;


}

// Add event listener for the "Save" button in the work experience section
document.querySelector('#work-experience button').addEventListener('click', saveWorkExperience);

// Function to save skills
function saveSkills() {
  const skillsInput = document.querySelector('#skills input[name="skill"]');
  const skillsList = document.getElementById('skill-list');
  const skills = Array.from(skillsList.children).map((skill) => skill.textContent);

  resume.skills = skills;

  // Display saved skills in the download section
  const skillsHTML = `<h2>Skills</h2><p>${skills.join(', ')}</p>`;
  const downloadSection = document.querySelector('#download');
  downloadSection.innerHTML += skillsHTML;

 
}

// Add event listener for the "Save" button in the skills section
document.querySelector('#skills #add1').addEventListener('click', saveSkills);

// Function to save achievements
function saveAchievements() {
  const achievements = document.querySelector('textarea[name="Achievements"]').value;

  resume.achievements = achievements;

  // Display saved achievements in the download section
  const achievementsHTML = `<h2>Achievements</h2><p>${achievements}</p>`;
  const downloadSection = document.querySelector('#download');
  downloadSection.innerHTML += achievementsHTML;


}

// Add event listener for the "Save" button in the achievements section
document.querySelector('#achievements button').addEventListener('click', saveAchievements);

// Function to save projects
function saveProjects() {
  const projectTitle = document.querySelector('input[name="Project Title"]').value;
  const projectURL = document.querySelector('input[name="Project URL"]').value;
  const projectDescription = document.querySelector('textarea[name="Project Description"]').value;

  const project = {
    projectTitle,
    projectURL,
    projectDescription,
  };

  resume.projects.push(project);

  // Display saved projects in the download section
  let projectsHTML = '<h2>Projects</h2>';
  for (const proj of resume.projects) {
    projectsHTML += `
      <p>Project Title: ${proj.projectTitle}</p>
      <p>Project URL: ${proj.projectURL}</p>
      <p>Project Description: ${proj.projectDescription}</p>
    `;
  }
  const downloadSection = document.querySelector('#download');
  downloadSection.innerHTML += projectsHTML;

}

// Add event listener for the "Save" button in the projects section
document.querySelector('#projects button').addEventListener('click', saveProjects);

// Function to save social links
function saveSocialLinks() {
  const github = document.querySelector('input[name="Github"]').value;
  const linkedIn = document.querySelector('input[name="LinkedIn"]').value;

  resume.socialLinks = {
    github,
    linkedIn,
  };

  // Display saved social links in the download section
  const downloadSection = document.querySelector('#download');
  downloadSection.innerHTML += `
    <h2>Social Links</h2>
    <p>Github: ${github}</p>
    <p>LinkedIn: ${linkedIn}</p>
  `;


}

// Add event listener for the "Save" button in the social links section
document.querySelector('#social-links button').addEventListener('click', saveSocialLinks);


function downloadResume() {
  const fullName = document.querySelector('input[name="Full name"]').value;
  const mobileNumber = document.querySelector('input[name="Mobile Number"]').value;
  const dob = document.querySelector('input[name="DOB"]').value;
  const title = document.querySelector('input[name="Title"]').value;
  const email = document.querySelector('input[name="Email"]').value;
  const address = document.querySelector('textarea[name="address"]').value;

  let educationHTML = '<h2>Education</h2>';
  for (const edu of resume.education) {
    educationHTML += `
      <p>Institute: ${edu.instituteName}</p>
      <p>State: ${edu.state}</p>
      <p>Degree: ${edu.degree}</p>
      <p>Field of Study: ${edu.fieldOfStudy}</p>
      <p>Start Date: ${edu.startDate}</p>
      <p>Percentage/CGPA: ${edu.percentageCGPA}</p>
    `;
  }

  let workExpHTML = '<h2>Work Experience</h2>';
  for (const exp of resume.workExperience) {
    workExpHTML += `
      <p>Employer: ${exp.employer}</p>
      <p>Job Title: ${exp.jobTitle}</p>
      <p>Start Date: ${exp.startDate}</p>
      <p>State: ${exp.state}</p>
      <p>Description: ${exp.description}</p>
    `;
  }

  let skillsHTML = '<h2>Skills</h2>';
  if (resume.skills.length > 0) {
    skillsHTML += '<ul>';
    for (const skill of resume.skills) {
      skillsHTML += `<li>${skill}</li>`;
    }
    skillsHTML += '</ul>';
  }

  let achievementsHTML = '';
  if (resume.achievements !== '') {
    achievementsHTML = `<h2>Achievements</h2><p>${resume.achievements}</p>`;
  }

  let projectsHTML = '<h2>Projects</h2>';
  for (const proj of resume.projects) {
    projectsHTML += `
      <p>Project Title: ${proj.projectTitle}</p>
      <p>Project URL: ${proj.projectURL}</p>
      <p>Project Description: ${proj.projectDescription}</p>
    `;
  }

  let socialLinksHTML = '';
  if (resume.socialLinks.github || resume.socialLinks.linkedIn) {
    socialLinksHTML = '<h2>Social Links</h2>';
    if (resume.socialLinks.github) {
      socialLinksHTML += `<p>Github: ${resume.socialLinks.github}</p>`;
    }
    if (resume.socialLinks.linkedIn) {
      socialLinksHTML += `<p>LinkedIn: ${resume.socialLinks.linkedIn}</p>`;
    }
  }

  const resumeHTML = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Resume</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff9f9;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      }
      h2 {
        color: #db75b4;
        margin-bottom: 10px;
      }
      p {
        margin: 0;
        margin-bottom: 5px;
        padding-top: 3%;
      }
      .basicinfo{
        border: 1px solid black;
        padding: 2%;
        margin-bottom: 2%;
      }
        .skills{
            border: 1px solid black;
            padding: 2%;
            margin-bottom: 2%;
        }
        .education{
            border: 1px solid black;
            padding: 2%;
            margin-bottom: 2%;
        }
    .workexp{
      border: 1px solid black;
      padding: 2%;
      margin-bottom: 2%;
  }
  .achive{
    border: 1px solid black;
    padding: 2%;
    margin-bottom: 2%;
}
.project{
  border: 1px solid black;
    padding: 2%;
    margin-bottom: 2%;
}
.social{
  border: 1px solid black;
    padding: 2%;
    margin-bottom: 2%;
}
    </style>
  </head>
  <body>
 
    <div id="download" class="container mt-5">
      <div class="basicinfo">   
        <h2>Basic Information</h2>
        <p>Name: ${fullName}</p>
        <p>Mobile: ${mobileNumber}</p>
        <p>DOB: ${dob}</p>
        <p>Email: ${email}</p>
        <p>Title: ${title}</p>
        <p>Address: ${address}</p>
      </div>
      <div class="education">
      ${educationHTML}
      </div>
      <div class="workexp">
      ${workExpHTML}
      </div>
      <div class="skills">
        ${skillsHTML}
      </div>
      <div class="achive">
        ${achievementsHTML}
      </div>
      <div class="project">
      ${projectsHTML}
    </div>
      <div class="social">
        ${socialLinksHTML}
      </div>
    </div>
  </body>
  </html>
  
  `;

  const blob = new Blob([resumeHTML], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'resume.html';
  link.click();
}
document.getElementById('downloadButton').addEventListener('click', downloadResume);
