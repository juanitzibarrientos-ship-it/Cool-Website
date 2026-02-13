// Lightbox
function openMedia(src, type) {
    const box = document.getElementById("lightbox");
    const content = document.getElementById("lightboxContent");

    if(type === "video") {
        content.innerHTML = `<video src="${src}" controls autoplay class="lightbox-content"></video>`;
    } else {
        content.innerHTML = `<img src="${src}" class="lightbox-content">`;
    }

    box.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

/* Proposal Logic */
let noCount = 0;
let size = 18;

const phrases = [
"Are you sure Lavinia? 🥺",
"Really sure? 😭",
"Think again please 💕",
"Don’t break my heart 😔",
"I’ll cry love 🥹",
"Please? 💗",
"You don’t mean that…",
"Okay okay just press YES 😭"
];

function pressNo() {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    noBtn.innerText = phrases[noCount % phrases.length];
    noCount++;

    size += 8;
    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding = (15 + noCount*3) + "px " + (40 + noCount*5) + "px";

    noBtn.style.position = "relative";
    noBtn.style.left = Math.random()*50 - 25 + "px";
}

function pressYes() {
    document.body.innerHTML = `
    <div class="section">
        <h1>SHE SAID YES 😭💖</h1>
        <img src="https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif" width="250">
        <p style="margin-top:20px;font-size:20px;">
        You just made me the happiest person alive, Lavinia 💕
        </p>
    </div>
    `;

    confetti({ particleCount: 250, spread: 120 });
}
