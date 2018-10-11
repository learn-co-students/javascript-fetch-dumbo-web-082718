const app = "I don't do much.";

const token = '519e915b2758a446e698a4388c8ffcbe7c307fb8'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
