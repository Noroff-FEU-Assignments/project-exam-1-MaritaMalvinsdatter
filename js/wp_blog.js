const baseUrl = "https://www.malvinsdatter.no/wp-json/wp/v2/posts";
const blogContainer = document.querySelector(".blog-post-list");
const morePosts = document.querySelector(".more-posts")

async function blogList(url) {

    try {
        const response = await fetch(url)
        const posts = await response.json()
        console.log(posts);
    
        posts.forEach((post) => {
            blogContainer.innerHTML += `<div class="post-cards">
            <a href="blog_posts.html?id=${post.id}"><img src="${post.x_featured_media_medium}"></a>
            <h3>${post.title.rendered}</h3>
            </div>`
            
        });
        
    } catch (error) {
        blogContainer.innerHTML += `An error has occured, please return to main page or contact us`;
    }

}

blogList(baseUrl)

morePosts.onclick = function() {
    const newUrl = baseUrl + "?per_page=20";
    blogContainer.innerHTML = "";
    blogList(newUrl);
}