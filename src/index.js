import './index.html';
//new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';


//use modules

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
    <source src="video/video.webp" type="video/webp">
    <source src="video/video.mp4" type="video/mp4">
`;