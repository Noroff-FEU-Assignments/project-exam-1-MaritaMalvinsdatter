const baseUrl = "https://www.malvinsdatter.no/wp-json/wp/v2/posts";
const sliderCount = 5;
const slider = document.querySelector(".slider");

async function sliderList(url) {

    try {
        const response = await fetch(url)
        const posts = await response.json()
        console.log(posts);

      for (let i = 0; i < sliderCount; i++) {
        let title = posts[i].title.rendered;
        slider.innerHTML += `${title}`
      }
        
    } catch (error) {
        slider.innerHTML += `An error has occured, please return to main page or contact us`;
    }
}

sliderList(baseUrl)