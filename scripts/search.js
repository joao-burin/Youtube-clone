function searchVideo(event) {
    const search = event.target.value.toLowerCase();
    const videos = document.getElementsByClassName("video-card");
    //const videos = document.querySelectorAll(".video-card");

    for (const video of videos) {
        const [chanelNameElement, categoryElement] = video.getElementsByTagName("P");

        const videoInfo = {
            title: video.getElementsByTagName("h3")[0].innerText.toLowerCase(),
            chanelName: chanelNameElement.innerText.toLowerCase(),
            category: categoryElement.innerText.toLowerCase()
        }

        video.style.display = "revert";

        if (!matches(videoInfo, search)) {
          video.style.display = "none"; 
        }
    }     
}

function matches(videoInfo, searchTens) {
    return (
        videoInfo.title.includes(searchTens) ||
        videoInfo.chanelName.includes(searchTens) ||
        videoInfo.category.includes(searchTens)
    );
}