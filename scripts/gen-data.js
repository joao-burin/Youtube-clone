import { faker } from 'https://esm.sh/@faker-js/faker';

const videoGrid = document.getElementById('videos');
const VIDEO_CATEGORIES = ['music', 'sports', 'gaming'];

for (const _ of Array(30)) {
    const videoInfo = {
        title: faker.commerce.productName(),
        chanelName: faker.company.name(),
        thumbnail: faker.image.urlPicsumPhotos({ width: 1280, height: 720}),
        category: faker.helpers.arrayElement(VIDEO_CATEGORIES),
    };

    const video = createVideo(videoInfo);
    videoGrid.appendChild(video);
    
}

function createVideo(videoInfo) {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    videoCard.classList.add(videoInfo.category);

    const videoThumbnail = document.createElement('img');
    videoThumbnail.src = videoInfo.thumbnail;
    videoThumbnail.alt = 'video Thumbnail';

    const videoTitle = document.createElement('h3');
    videoTitle.textContent = videoInfo.title;

    const videoChanel = document.createElement('p');
    videoChanel.textContent = videoInfo.chanelName;

    const videoCategory = document.createElement('p');
    videoCategory.textContent = videoInfo.category;

    videoCard.appendChild(videoThumbnail);
    videoCard.appendChild(videoTitle);
    videoCard.appendChild(videoChanel);
    videoCard.appendChild(videoCategory);

    return videoCard;
}


