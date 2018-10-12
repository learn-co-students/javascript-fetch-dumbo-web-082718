const app = "I don't do much.";
const token = '643f782ec3afba1c90c1e84bc69811000d6f85a9'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
