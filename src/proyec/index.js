const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCyAcd-0NDzCN4yMsaBaUnNg&part=snippet%2Cid&order=date&maxResults=3";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5b4aa38292mshc5779cc49af1976p16832fjsn7f99248f4d9a",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
const content = null || document.getElementById("contentVideo");

async function fechData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}
// llamar una funcion anonima
(async () => {
  try {
    const videos = await fechData(API);
	console.log(videos)
    let view = `
		${videos.items
      .map(
        video => `
		<div class="col-md-4">
		<a href="#" target="_blank">
			<img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="img-thumbnail">
		</a>
		<h3 class="title">${video.snippet.title}</h3>
		</div>
		`
      )
      .slice(0, 2)
      .join('')}
		`;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
