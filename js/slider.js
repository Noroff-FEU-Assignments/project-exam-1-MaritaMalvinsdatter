const baseUrl = "https://www.malvinsdatter.no/wp-json/wp/v2/blog?acf_format=standard";
const sliderCount = 5;
const slider = document.querySelector(".slider-container");
var currentSlide = 0;

async function sliderList(url) {

    try {
        const response = await fetch(url)
        const posts = await response.json()
        console.log(posts);

      for (let i = 0; i < sliderCount; i++) {
        let title = posts[i].acf.title;
        slider.innerHTML += `<div class="slider`+i+` slide-card">
        <div class="slider-img">
        <a href="blog_posts.html?id=${posts[i].id}"><img src="${posts[i].acf.featured_img.url}"></a>
        </div>
        <div class="slider-text">
         <h2 class="title">${title}</h2>
         <p>${posts[i].acf.p1}</p>
         <p><a href="blog_posts.html?id=${posts[i].id}">Read More</a></p>
        </div>
        </div>`

        if (i > 0) {
            document.querySelector(".slider" + i).setAttribute("style", "display: none")
        }
      }
        
    } catch (error) {
        slider.innerHTML += `An error has occured, please return to main page or contact us`;
    }
}

sliderList(baseUrl)

const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
buttonPrev.disabled = true;

buttonNext.onclick = function() {
    document.querySelector(".slider" + currentSlide).setAttribute("style", "display: none");
    currentSlide++
    document.querySelector(".slider" + currentSlide).setAttribute("style", "display: block");
    if (currentSlide == sliderCount-1) {
        buttonNext.disabled = true;
    } 
    if (currentSlide > 0) {
        buttonPrev.disabled = false;
    }
}

buttonPrev.onclick = function() {
    document.querySelector(".slider" + currentSlide).setAttribute("style", "display: none");
    currentSlide--
    document.querySelector(".slider" + currentSlide).setAttribute("style", "display: block");
    if (currentSlide == 0) {
        buttonPrev.disabled = true;
    } 
    if (currentSlide < sliderCount) {
        buttonNext.disabled = false;
    }
}
