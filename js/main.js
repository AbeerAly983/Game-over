import { Display } from "./display.js";

class AllGames {
  constructor() {
    // default value
    this.gameCategories("mmorpg");

    let category_value = document.querySelectorAll(".navbar-nav a");
    for (let i = 0; i < category_value.length; i++) {
      category_value[i].addEventListener("click", (e) => {
        e.preventDefault();
        document
          .querySelector(".navbar-nav .active")
          .classList.remove("active");
        e.target.classList.add("active");
        this.gameCategories(e.target.id);
      });
    }

    document.querySelector(".close-btn").addEventListener("click", (e) => {
      document.getElementById("games-container").classList.remove("d-none");
      document.getElementById("games-details").classList.add("d-none");
    });

    this.display = new Display();
  }

  // All Game Api and Display
  async gameCategories(category_name) {
    let loading = document.querySelector(".load");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const api = await fetch(
      ` https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category_name}`,
      options
    );

    const response = await api.json();
    // console.log(response)
    this.display.displayGams(response);

    // get game id  to display ditails

    let card = document.querySelectorAll(".card");
    for (let i = 0; i < card.length; i++) {
      card[i].addEventListener("click", () => {
        console.log(card[i]);

        this.gameDetails(card[i].id);
        document.getElementById("games-container").classList.add("d-none");
        document.getElementById("games-details").classList.remove("d-none");
      });
    }

    loading.classList.add("d-none");
  }

  async gameDetails(id) {
    let loading = document.querySelector(".load");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );

    const response = await api.json();
    // console.log(response);
    this.display.displayGameDetails(response);

    loading.classList.add("d-none");
  }
}

new AllGames();
