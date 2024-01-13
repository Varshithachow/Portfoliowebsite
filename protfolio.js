<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Your existing JavaScript code for dynamic content
        const skillsList = document.querySelector('.skills-list');
        const achievementsList = document.querySelector('.achievements-list');
        const projectsList = document.querySelector('.projects-list');
        const contactDetails = document.querySelector('.contact-details');

        // Populate Skills
        const skills = [
            'Problem Solving Skills',
            'Good Grip of Data Structures and Algorithms',
            'Proficient in Java Language',
            'Python',
            'C Languages',
            'Social Media Skills',
            'Leadership Skills',
            'Communication Skills',
            'Team Working Skills',
            'Time Management Skills'
        ];
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill;
            skillsList.appendChild(li);
        });

        // Populate Achievements
        const achievements = [
            'Runner up at Ideathon - Awarded 3k prize money',
            'Won gold badge in HackerRank in many programming languages',
            'Done an Artificial Intelligence and Machine Learning internship provided by Google',
            'Participated as a volunteer in 24 hours Hackathon',
            'Done courses on cybersecurity and Python on Cisco - Awarded a badge',
            'Attended interviews for internships including Google Apprenticeship program',
            'Participated in many technical and non-technical events'
        ];
        achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.innerText = achievement;
            achievementsList.appendChild(li);
        });

        // Populate Projects
        const projects = [
            { name: 'Brainy Bot', description: 'This is an AI-powered conversational agent...', link: 'https://github.com/Varshithachow/Brainy-Bot' },
            { name: 'Sudoku Puzzle', description: 'This is a Data structures based sudoku puzzle builder...', link: 'https://github.com/Varshithachow/Sudoku-puzzle' },
            { name: 'Portfolio Website', description: 'This portfolio website itself', link: '#' }
        ];
        projects.forEach(project => {
            const div = document.createElement('div');
            div.innerHTML = `<h3 class="text-lg font-bold">${project.name}</h3>
                             <p>${project.description}</p>
                             <a href="${project.link}" class="text-blue-500">GitHub Link</a>`;
            projectsList.appendChild(div);
        });

        // Populate Contact Details
        const contactInfo = [
            'Email: varshichowdarymuppalla@gmail.com',
            'LinkedIn: www.linkedin.com/in/varshitha-chowdary-7b7a25261',
            'GitHub: https://github.com/Varshithachow',
            'Contact No: 7013113227'
            // Add more contact details as needed
        ];
        contactInfo.forEach(info => {
            const p = document.createElement('p');
            p.innerHTML = info;
            contactDetails.appendChild(p);
        });
    });
</script>
