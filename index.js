//timeline

$('.member-title').click(function(e) {
  console.log("Clicked");
  $(this).next().slideToggle();
  $(this).next().next().next().slideToggle();
})

document.addEventListener('DOMContentLoaded', function() {
  // Get all tab buttons
  const tabButtons = document.querySelectorAll('.nav-link');

  // Store the last clicked button
  let lastClickedButton = tabButtons[0]; // Default to the first button
  tabButtons[0].style.color= 'rgb(168, 0, 255)';

  tabButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remove active class from the last clicked button
          lastClickedButton.style.color = '';
          lastClickedButton.classList.remove('active');

          // Add active class to the currently clicked button
          button.classList.add('active');
          button.style.color= 'rgb(168, 0, 255)';
          // Hide all tab contents
          const tabContents = document.querySelectorAll('.tab-pane');
          tabContents.forEach(content => {
              content.classList.remove('show', 'active'); // Hide all tab contents
          });

          // Show the content for the currently clicked tab
          const targetContent = document.querySelector(button.getAttribute('data-bs-target'));
          targetContent.classList.add('show', 'active'); // Show the target content
          
          // Update the last clicked button
          lastClickedButton = button;
          console.log(typeof button)
          

          // Log the currently active tab
          //console.log(`Current active tab: ${button.textContent}`);
      });
  });
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.topnav');
  const firstSection = document.querySelector('.intro');

  // Get the height of the first section
  const firstSectionHeight = (firstSection.offsetHeight)/2;

  // Check if the page has been scrolled past the height of the first section
  if (window.scrollY > firstSectionHeight) {
      navbar.classList.add('scrolled'); // Add class to change background
  } else {
      navbar.classList.remove('scrolled'); // Remove class to revert background
  }
});


//certificates
//var slideIndex = 1;
//showSlides(slideIndex);

var slideIndex = 0;
showSlides();

/*
function plusSlides(n) {
  showSlides(slideIndex += n);
}*/

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides() {
	
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
/*

var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500);
  */
}
//overlay function

function openOverlay() {
  //console.log("inide openoverlay")
  let dictionary = {
    "Accenture" : "Contributed as a Software Engineer specializing in middleware support, deployment management, and client engagement. <br><br>My responsibilities included:<br><br><ul><li><b>Problem-Solving & Client Engagement:</b> Worked closely with diverse teams to address middleware issues impacting applications, fostering seamless communication and rapid resolution of client concerns.</li><li><b>Deployment Management:</b> Orchestrated weekly and monthly deployments to production environments, ensuring zero-downtime operations and upholding Accenture's high standards in service reliability.</li><li><b>Oracle Documaker Studio Expertise:</b> Utilized Oracle Documaker Studio 12.5 for document automation, developing and managing templates that enhanced document accuracy and processing speeds.</li><li><b>Documentation Integrity & RTB (Run-The-Business) Activities: </b>Maintained comprehensive documentation, aligned with operational standards, and managed RTB activities to streamline business processes.</li></ul><br>This role sharpened my abilities in problem-solving, team collaboration, and deployment management, and helped me build a solid foundation in ensuring operational efficiency.",
    "NITK" : "During this internship, I collaborated with the Centre for System Design at NITK Surathkal and the Virtual Labs National Coordination for the Ministry of Education, focusing on virtual lab development:<br><br><ul><li><b>Project Focus:</b> Developed an online experiment titled Measurement of Torque Using Torque Sensor for the Metrology and Measurement Lab under the Department of Mechanical Engineering.</li><li><b>Compliance with Standards:</b> Adhered to processes (R0 through R4) set by Virtual Lab National Coordination, ensuring the experiment met the quality and educational standards for Virtual Labs.</li><li><b>Technical Supervision:</b> Operated under the guidance of NITK faculty and PALS (Participating Agency for Labs and Simulation), enhancing my understanding of virtual labs and educational simulation technologies.</li></ul><br><br>This experience strengthened my technical skills in experiment development and exposed me to the educational application of technology in a virtual setting.",
    "MyAssessment": "In this programming internship, I focused on developing my Python programming skills, with daily tasks and hands-on problem-solving exercises:<br><br><ul><li><b>Python for Problem Solving:</b> Engaged in intensive Python training with daily programming tasks, which honed my skills in writing efficient code and solving complex problems.</li><li><b>Applied Knowledge:</b> Tackled real-world programming challenges, gaining practical experience in Python that laid the foundation for my future work in AI and data science.</li><li><b>Growth in Logical Thinking:</b> The internship reinforced critical thinking and logical problem-solving skills, essential for programming and data analysis.</li></ul><br><br>This internship allowed me to deepen my understanding of Python and build a strong programming foundation, which has been instrumental in my ongoing studies and AI-focused career path."
  }
  // Get the parent <p> element of the link that was clicked
  const link = event.target; // The clicked link
  const parentParagraph = link.parentElement; // The parent <p> element
  // Get the ID of the <p> element
  const paragraphId = parentParagraph.id;
  //console.log(paragraphId + "type:"+ typeof paragraphId)
  // Show the overlay
  document.getElementById("overlay").style.display = "block"; // Add this line
  document.getElementById("overlayText").style.display = "block";
  document.getElementById("Company").style.display = "block";
  document.getElementById("overlayText").innerHTML = ""; // Clear previous content
  document.getElementById("Company").innerHTML = ""; // Clear previous content

  if(paragraphId=="Accenture")
  {
    document.getElementById("overlayText").innerHTML = dictionary.Accenture;
    document.getElementById("Company").innerHTML = "Accenture";
  }
  else if(paragraphId=="NITK")
  {
    document.getElementById("overlayText").innerHTML = dictionary.NITK;
    document.getElementById("Company").innerHTML = "NITK Suratkal";
  }
  else{
    document.getElementById("overlayText").innerHTML = dictionary.MyAssessment;
    document.getElementById("Company").innerHTML = "My Assessment";
  }
  
  //console.log(dictionary.Accenture);
}

function closeOverlay()
{
  //console.log("inside close Overlay")
  document.getElementById("overlayText").style.display = "none";
  document.getElementById("overlayText").innerHTML = "";
  document.getElementById("Company").style.display = "none";
  document.getElementById("Company").innerHTML = "";
  document.getElementById("overlay").style.display = "none";
 
}

/*On window loads functions */
var i = 0;
var txt = 'Aspiring AI Engineer | IT & Middleware Specialist';
var speed =70;
function typeWriter() {

            if (i < txt.length) {
                document.getElementById("profession").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                // Reset the index to start typing again
                i = 0;
                // Optionally, clear the text before starting again
               document.getElementById("profession").innerHTML = '';
                // Start typing again after a delay
                setTimeout(typeWriter, 3); // 1 second delay before starting again
            }
        }

        // Start the typing effect as soon as the window is available
window.onload = function() {
  // Add the 'visible' class to the intro and image-wrapper elements
  document.querySelector('.intro').classList.add('visible');
  document.querySelector('.image-wrapper').classList.add('visible');
            typeWriter();
        };

