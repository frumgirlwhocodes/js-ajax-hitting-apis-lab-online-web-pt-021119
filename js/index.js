// your code here
function getRepositories() {
  const username= document.getElementById('username').value
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayRepositories);
  console.log(`https://api.github.com/users/${username}/repos`)
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send()
}


function displayRepositories(){
  const repos = JSON.parse(this.responseText)
  console.log(repos); 
  const repoList= `<ul>${repos.map(r => '<li>' +
       r.full_name + " - " + r.html_url + " - " + r.name +
       ' - <a href="#" data-repo="' +
       r.full_name + '" onclick="getCommits(this)">Get Commits</a></li>' +
       ' - <a href="#" data-repo="' +
       r.name + '" onclick="getBranches(this)">Get Branches</a></li>'
      )
    .join("")}</ul>`;
    
    document.getElementById('repositories').innerHTML = repoList;
    
}

function getCommit(el)
{
  const rname= el.dataset.repository;
  const username= el.dataset.username
}
}