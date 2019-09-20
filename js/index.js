// your code here
function getRepositories() {
  const username= document.getElementByID('username').value
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  console.log(`https://api.github.com/users/${username}/repos`)
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send()
}


function showRepositories(){
  const repos = JSON.parse(this.responseText)
  cosole.log(repos); 
  const repoList= `<ul>${repos.map(r => '<li>' +
       r.full_name + " - " + r.html_url + " - " + r.name +
       ' - <a href="#" data-repo="' +
       r.full_name + '" onclick="getCommits(this)">Get Commits</a></li>' +
       ' - <a href="#" data-repo="' +
       r.name + '" onclick="getBranches(this)">Get Branches</a></li>'
      )
    .join("")}</ul>`;
    
    document.getElementByID('repositories').innerHTML = repoList;
    
}