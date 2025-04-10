/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// const FRESH_PRINCE_URL =
//   "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL =
//   "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL =
//   "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)

// Board Game Catalog - Array of Objects
let gameDirectory = [
  {
    id: 1,
    title: "Catan",
    imageURL: "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__imagepage/img/M_3Vg1j2HlNgkv7PL2xl2BJE2bw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2419375.jpg",
    releaseYear: 1995,
    players: "3-4",
    playTime: "60-120 minutes",
    description: "In this game, players try to establish settlements on the island of Catan by building roads, cities, and settlements. Players collect and trade resources to build and expand their civilization."
  },
  {
    id: 2,
    title: "Tapple",
    imageURL: "https://cf.geekdo-images.com/ug2wHUhS3E-LA_lmLQYyNQ__imagepage/img/EOvL07ZTPgjIzy0O6-sOTHPe_sk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6650117.jpg",
    releaseYear: 1995,
    players: "3-4",
    playTime: "60-120 minutes",
    description: "Players shout answers to trivia categories and eliminate letters as they go. The game is fast-paced and requires quick thinking and a good vocabulary."
  },
  {
    id: 3,
    title: "Codenames",
    imageURL: "https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__imagepage/img/rc_Do8f5v41nWEGcwHE1eKAkIfI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2582929.jpg",
    releaseYear: 2015,
    players: "2-8",
    playTime: "15 minutes",
    description: "Give your team clever one-word clues to help them spot their agents in the field. But be careful! The other team is trying to do the same thing, and you don't want to help them out."
  },
  
];

// Keep a reference to the original data so we can reset filters
let displayedItems = [...gameDirectory];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < gameDirectory.length; i++) {
    let game = gameDirectory[i];
    let bulletPoints = [game.releaseYear, game.players, game.playTime, game.description];
    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, game.title, game.imageURL, bulletPoints); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL, newInfo) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";
  for (let i = 0; i < newInfo.length; i++) {
    const list = card.querySelector("ul");
    list.innerHTML = ""; // Clear old list items
    newInfo.forEach(info => {
      const li = document.createElement("li");
      li.textContent = info;
      list.appendChild(li);
    });
  }

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
