async function getCatFact() {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        document.getElementById('cat-fact').textContent = data.fact;
}
getCatFact();

const ideas = [
    "DIY Fridge," ,
    "Mac n Cheese Simulator",
    "gambling site",
    "Custom version control system",
    "recipe site",
    "artificial cat",
    "u dont make anything. just so eep vro"
];

function GenerateIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const idea = ideas[randomIndex];
    const display = document.querySelector('.idea');
    if (display) {
        display.innerText = idea;
    }
}

const CAT_API = "https://api.thecatapi.com/v1/images/search";
async function fetchCatPics() {
    const imgEl = document.getElementById('cat-img')
    try {
        btn = document.getElementById("cat-btn");
        btn.disabled = true;

        const img = await fetch(CAT_API);
        const data = await img.json();
        const catUrl = data[0].url;
        imgEl.src = catUrl;
        imgEl.style.display = "block";

        setTimeout(() => {
            btn.disabled = false
        }, 2000);
    } catch (error) {
        console.log("not working ok?");
    }
}