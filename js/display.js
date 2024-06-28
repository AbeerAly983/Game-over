export class Display {
  // diplay all games
  displayGams(arr) {
    let gamesContainer = ``;
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].thumbnail);
      gamesContainer += `         
     <div class="col-md-4 col-lg-4 col-xl-3" >
            <div class="card" id="${arr[i].id}">
                <img src="${
                  arr[i].thumbnail
                }" class="card-img-top object-fit-cover p-2" alt="..." />
             

              <div class="card-body py-2">
                <div
                  class="title-details d-flex justify-content-between align-items-center mb-3  ">
                  <h5 class="card-title">${arr[i].title
                    .split(" ")
                    .slice(0, 3)
                    .join(" ")}</h5>
                  <a  class="button-details text-capitalize">free</a>
                </div>

                <p class="card-text px-2 text-center">
                ${arr[i].short_description.split(" ").slice(0, 10).join(" ")}
                </p>
              </div>
              <div
                class="card-footer px-2 py-2 d-flex justify-content-between align-items-center">
                <span class="footer-span">${arr[i].genre}</span>
                <span class="footer-span">${arr[i].platform}</span>
              </div>
            </div>
          </div>`;
    }
    document.getElementById("games").innerHTML = gamesContainer;
  }

  // display game details
  displayGameDetails(res) {
    let gameDetailsContainer = `
              <div class="col-md-4">
            <img src="${res.thumbnail}" class="w-100" alt="" />
          </div>
          <div class="col-md-8">
            <div class="inner-details">
              <h3>Title : ${res.title}</h3>
              <div class="mt-3">
                <span>Category:</span>
                <span class="details-span">${res.genre}</span>
              </div>
              <div class="mt-3">
                <span>Platform:</span>
                <span class="details-span">${res.platform}</span>
              </div>
              <div class="mt-3">
                <span>Status:</span>
                <span class="details-span">${res.status}</span>
              </div>
              <p class="my-3">
              ${res.description}
              </p>
              <div class="my-5">
                <a class="text-capitalize show-game"  target="_blank" href="${res.game_url}">show game </a>
              </div>
            </div>
          </div>
    `;

    document.querySelector(".game-details-container").innerHTML =
      gameDetailsContainer;
  }
}
