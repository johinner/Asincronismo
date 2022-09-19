const marvel = {
  render: () => {
    // const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=072cd79c13ba43f12865fc729ab63940&hash=3b478ad5d35bb2facdb225f639e26441";
    const urlAPI = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=072cd79c13ba43f12865fc729ab63940&hash=3b478ad5d35bb2facdb225f639e26441'
    const container = document.getElementById("marvel-row");
    let contentHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
         console.log(json, 'RES.JSON')
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += ` 
                <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.title}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.title}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML
    });
  },
};
marvel.render();
