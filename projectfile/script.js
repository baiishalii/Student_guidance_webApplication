const data = {
frontend: {
title: 'Frontend Developer',
desc: 'Build user interfaces using HTML, CSS and JavaScript',
roadmap: ['Basics: HTML & CSS', 'JavaScript fundamentals', 'DOM & Events', 'Version control (Git)', 'Build tools & bundlers', 'Frameworks (React/Vue)'],
tech: ['HTML', 'CSS', 'JavaScript', 'Git', 'React (optional)'],
resources: [
{name:'MDN Web Docs', url:'https://developer.mozilla.org'},
{name:'freeCodeCamp', url:'https://www.freecodecamp.org'}
]
},
backend: {
title: 'Backend Developer',
desc: 'Server-side development, databases and APIs',
roadmap: ['Programming language (Node/Java/Python)', 'REST APIs', 'Databases (SQL/NoSQL)', 'Authentication', 'Deployment'],
tech: ['Node.js', 'Express', 'MySQL/Postgres', 'Docker'],
resources: [{name:'Node.js Docs', url:'https://nodejs.org'}]
},
data: {
title: 'Data Scientist',
desc: 'Data analysis, ML, and statistics',
roadmap: ['Python basics', 'Data manipulation (Pandas)', 'Statistics', 'Machine Learning'],
tech: ['Python', 'Pandas', 'scikit-learn'],
resources: [{name:'Kaggle', url:'https://kaggle.com'}]
},
devops: {
title: 'DevOps Engineer',
desc: 'CI/CD, infrastructure and automation',
roadmap: ['Linux basics', 'Scripting', 'Containers', 'CI/CD pipelines'],
tech: ['Docker', 'Kubernetes', 'Jenkins'],
resources: [{name:'Docker Docs', url:'https://docs.docker.com'}]
}
}


const rolesList = document.getElementById('roles-list')
rolesList.addEventListener('click', (e) => {
const li = e.target.closest('li')
if (!li) return
const role = li.dataset.role
updateUI(role)
})


function updateUI(roleKey){
const role = data[roleKey]
document.getElementById('role-title').textContent = role.title
}
