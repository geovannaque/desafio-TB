async function Repositorios(req, res) {
    const dadosGit = await fetch(`https://api.github.com/orgs/takenet/repos?language:C#&sort=created&direction=asc`);
    const dadosJson = await dadosGit.json();
    const repos = [];

    for (var i = 0; i < 5; i++) {
        repos.push({
            full_name: dadosJson[i].full_name,
            description: dadosJson[i].description,
            avatar_url: dadosJson[i].owner.avatar_url,
        });  
    }
    res.json({repos: repos});
  }
export default Repositorios;