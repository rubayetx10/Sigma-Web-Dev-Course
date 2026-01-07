function createVideoItem(title, channelName, views, daysAgo, duration, thumbnailUrl) {

  // format views
  let viewText;
  if (views >= 1000000) {
    viewText = (views / 1000000).toFixed(1) + "M views";
  } 
  else if (views >= 1000) {
    viewText = (views / 1000).toFixed(1) + "K views";
  } 
  else {
    viewText = views + " views";
  }

  let videoItem = document.createElement("div");
  videoItem.className = "videoItem";

  videoItem.innerHTML = `
    <div class="videoThumb">
      <img src="${thumbnailUrl}">
      <span class="videoDuration">${duration}</span>
    </div>

    <div class="videoInfo">
      <h3>${title}</h3>
      <p>${channelName}</p>
      <p>${viewText} • ${daysAgo} days ago</p>
    </div>
  `;

  document.getElementById("videoList").append(videoItem);
}

// function call
createVideoItem(
  "Introduction to Backend || Sigma Web Dev Video #73",
  "CodeWithHarry",
  560,
  7,
  "31:33",
  "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg"
);
