// your code here
function getRepositories() {
  const username= document.getElementByID('username').value
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`);
  req.send()
}


function showRepositories(){
  const repos = JSON.parse 

}