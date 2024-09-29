export const data = {
    name: "Jaden Frimpong",
    role: "Software Engineer",
    availability:"open",
    location:"Virginia",
    email:"fjaden08@gmail.com",
    image:"unamed.jpg",
    resume: "Resume.pdf",
    experience: [{
        image:"mathnasium.png",
        description:"Instructor",
        title:"Mathnasium",
        role:"Instructor",
        tags:["1yoe"],
        href:"/experience/mathnasium",
        duration:"1",
    }],
    education:[{
        image:"UVA.jpg",
         title:"University of Virginia", 
         description:"Bachelor of Science in Computer Engineering",
         tags:["Minor in Data Science", "4yoe"], 
         href:"/education/uva",

    }],
    projects: [{
        image:"if82cpbS_400x400.jpg",
        title:"NextJS Portfolio",
        description:"A record of my most recent programming projects stored on Nextjs", 
        tags:["Nextjs", "shadcn/ui", "Tailwind", "React"], 
        href:"/projects/portfolio",
        extraInfo:`
        **Creation Process:**
        - This portfolio was built using Next.js, a powerful React framework that supports both server-side rendering and static site generation.
        - Tailwind CSS was integrated for utility-first styling, enabling responsive design and rapid development.
        
        **Deployment Process:**
        - The project was deployed using AWS, with Defang.io managing the cloud infrastructure and deployment process.
        - Defang.io streamlined cloud setup, containerization, and scaling, allowing for easy and automated deployment.
        - Docker was utilized for containerizing the application to ensure consistency across development and production environments.
        
        **Tech Stack:**
        - React
        - Next.js
        - Tailwind CSS
        - Vercel
        - Docker
        `

    },
    {
        image:"best-light-bulbs-job-graphic-chart_8e5f6580353811bf5ee03a4a41e50937.jpg",
        title:"Lightbulb Image Classifier",
        description:"A machine learning model that classifies different types of lightbulbs using TensorFlow.js.", 
        tags:["TensorFlow.js", "Teachable Machine", "Image Classification", "JavaScript", "Web Development"], 
        href:"/projects/lightbulb-classifier",
        extraInfo:`
        **Creation Process:**
        - This project utilizes Google's Teachable Machine to train a model specifically for classifying images of different lightbulbs.
        - The model operates directly in the browser using TensorFlow.js, enabling real-time classification without the need for a backend server.
        - JavaScript manages file uploads, image processing, and model inference, providing a smooth and interactive user experience.
        
        **Deployment Process:**
        - The application was developed and tested locally using Five Server, a local development server for previewing web projects.
        - For deployment, the application can be hosted on platforms like Vercel, Netlify, or GitHub Pages, which handle static site hosting and provide automated deployments from version control systems.
        
        **Tech Stack:**
        - TensorFlow.js
        - Teachable Machine
        - Javascript
        - HTML/CSS
        - Five Server (for local development)
        `

    }
],
}