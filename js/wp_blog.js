const baseUrl = "https://www.malvinsdatter.no/wp-json/wp/v2/posts/";

const blogContainer = document.querySelector(".blog-post-list")

async function blogList(url) {
    const response = await fetch(url)
    const posts = await response.json()
    console.log(posts);

    posts.forEach((post) => {
        blogContainer.innerHTML += `<div class="post">
        <h3>${post.title.rendered}</h3>
        <a href="blog_posts.html?id=${post.id}"><img src="${post.x_featured_media_medium}"></a>
        </div>`
        
    });


}

blogList(baseUrl)