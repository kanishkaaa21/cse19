// Search Bar

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", () => {

    let value = searchBox.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card.dataset.title.toLowerCase();

        if(title.includes(value))
        {
            card.style.display = "block";
        }
        else
        {
            card.style.display = "none";
        }

    });

});


// Play Button

const playBtn = document.querySelector(".play-btn");

playBtn.addEventListener("click", () => {

    alert("🎬 Playing Interstellar...");

});


// More Info Button

const infoBtn = document.querySelector(".info-btn");

infoBtn.addEventListener("click", () => {

    alert(
        "Interstellar\n\nIMDb Rating: 8.7/10\nGenre: Sci-Fi, Adventure\nDirector: Christopher Nolan"
    );

});


// Back To Top Button

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});