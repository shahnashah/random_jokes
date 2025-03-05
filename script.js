const joke = document.getElementById("joke");
const GetJokes = document.getElementById("getjokes");
const URL = "https://official-joke-api.appspot.com/random_joke";


 async function getJokes(){
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data.setup);
    console.log(data.punchline);

    joke.innerHTML =`
    <span id="setup">${data.setup}</span><br><br/>
    <span id="punchline">${data.punchline}</span>
    
    `;

}
GetJokes.addEventListener("click",getJokes);

