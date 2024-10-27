// Get references to the form and display area
 const form = document.getElementById('resume-form') as HTMLFormElement;
 const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

 // Handle form submission
 form.addEventListener('submit' , (event: Event) =>{
    event.preventDefault(); // prevent page reload
    
    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experienced = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
        
    // Genetate the resume content dynamically
    const resumeHtML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experienced}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;
    
     // Display the generated resume
     if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtML;
     } else {
        console.error('The resume display element is missing');
     }

 });