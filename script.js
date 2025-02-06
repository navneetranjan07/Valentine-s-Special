let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");

let audio = new Audio("song.mp3");

function playMusic() {
    audio.play();
}
playBtn.addEventListener("click", playMusic)

function pauseMusic() {
    audio.pause();
}
pauseBtn.addEventListener("click", pauseMusic)

const valentineweek = [
    {
        day: "Valentine's Week Special",
        description: "This Valentine's Day, express your deepest love to your soulmate with a heartfelt digital greeting that speaks the language of your heart!❤️✨"
    },
    {
        day: "Rose Day",
        description: "Just like a rose symbolizes love and beauty, you bring fragrance and joy into my life. Every petal of my heart blooms for you. Happy Rose Day, my love!🌹"
    },
    {
        day: "Propose Day",
        description: "From the moment I met you, I knew you were the one. I promise to cherish, protect, and love you forever. Will you be mine, not just today but for a lifetime? Happy Propose Day, my sweetheart!💕"
    },
    {
        day: "Chololate Day",
        description: "You are the sweetest part of my life, more delightful than the finest chocolate. Every moment with you melts my heart just like chocolate melts in the warmth of our love. Happy Chocolate Day, my love!🍫"
    },
    {
        day: "Teddy Day",
        description: "I wish I could be a teddy bear so that I could always be by your side, hugging you whenever you need warmth. But until then, this little teddy will remind you of my endless love. Happy Teddy Day, my darling!🧸"
    },
    {
        day: "Promise Day",
        description: "I promise to stand by your side in every joy and sorrow, to hold your hand in every moment of life, and to love you endlessly. My love for you will never fade. Happy Promise Day, my love!🤞"
    },
    {
        day: "Hug Day",
        description: "A warm hug from you is all I need to forget all worries and fears. Your embrace is my safest place, where I find peace, love, and happiness. Sending you tight hugs, my love. Happy Hug Day!🤗"
    },
    {
        day: "Kiss Day",
        description: "A single kiss from you is enough to brighten my darkest days and make my heart race. You are my love, my happiness, and my forever. Happy Kiss Day, my love!😘"
    },
    {
        day: "Valentine's Day",
        description: "Every moment, every heartbeat, and every breath of mine whispers your name. You are the love of my life, my forever Valentine. I love you more than words can express. Happy Valentine's Day, my love!"
    },
];


let currentDayIndex = 0;
const titleElement = document.querySelector('.day-title');
const descriptionElement = document.querySelector('.day-description')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')


function updateDay() {
    const currentDay = valentineweek[currentDayIndex];
    titleElement.textContent = currentDay.day;
    descriptionElement.textContent = currentDay.description;
}

prevBtn.addEventListener('click', () => {
    if (currentDayIndex === 0) {
        alert("No any preious slide")
        return
    }
    currentDayIndex = (currentDayIndex - 1 + valentineweek.length) % valentineweek.length;
    updateDay();
});

nextBtn.addEventListener('click', () => {
    if (currentDayIndex === 8) {
        alert("Please refresh the page")
        return
    }
    currentDayIndex = (currentDayIndex + 1) % valentineweek.length;
    updateDay();
});

updateDay();