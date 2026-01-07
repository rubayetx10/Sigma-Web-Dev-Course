function createCard(title, cName, views, date, duration, thumbnail) {

  // views format
  let viewStr;
  if (views >= 1000000) {
    viewStr = (views / 1000000).toFixed(1) + "M views";
  } 
  else if (views >= 1000) {
    viewStr = (views / 1000).toFixed(1) + "K views";
  } 
  else {
    viewStr = views + " views";
  }

  let card = document.createElement("div");
  card.className = "container";

  card.innerHTML = `
    <div class="thumbnail">
      <img src="${thumbnail}">
      <span class="duration">${duration}</span>
    </div>

    <div class="details">
      <h3>${title}</h3>
      <p>${cName}</p>
      <p>${viewStr} • ${date} days ago</p>
    </div>
  `;

  document.getElementById("cards").append(card);
}

// function call
createCard(
  "Introduction to Backend || Sigma Web Dev Video #73",
  "CodeWithHarry",
  560,
  7,
  "31:33",
  "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg"
);
