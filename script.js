document.getElementById('btn').addEventListener('click', showProfile)

var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        showProfile();
    }
});

function showProfile(){
    document.getElementById('result').style.backgroundColor = 'white';

    let username = document.getElementById('input').value

    let url = 'https://api.github.com/users/'+username

    fetch(url)
        .then(res=>res.json())
        .then(data=>{
            if(data.message){
                document.getElementById('result').innerHTML = `
                <h2 style="text-align: center">Profile Not Found</h2>`
            }else{
                document.getElementById('result').innerHTML = `
                    <img src="${data.avatar_url}" style="width:200px">
                    <p>${data.name ? data.bio : "[No Name]"} (${data.login})</p>
                    <p>${data.bio ? data.bio : "[No Bio]"}</p>
                    <p>-----------------------</p>
                    <p>Public Repositories: ${data.public_repos}</p>
                    <p>Followers: ${data.followers}</p>
                    <p>Following: ${data.following}</p>
                    <p>Company: ${data.company ? data.company : "[Not Informed]"}</p>
                    <p>Location: ${data.location ? data.location : "[Not Informed]"}</p>
                    <p>Hireable: ${data.hireable ? data.hireable : "[Not Informed]"}</p>
                    <p>Email: ${data.email ? data.email : "[Not Informed]"}</p>
                    <p>Last Update: ${data.updated_at}</p>
                    <p>GitHub: <a href="${data.html_url}" target="_blank">Link</a></p>
                `
            }
        })
        .catch(e=>{
            console.log(e)
        });

}
