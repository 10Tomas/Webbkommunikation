function truncateText(text, maxWords) {
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxWords);
    return truncatedWords.join(' ');
}

async function fetchAllposts() {
    try {
        const response = await fetch("https://blog-api-assignment.up.railway.app/posts");
        const posts = await response.json();

        let postslistHTML = "";
        for (let post of posts) {
            const truncatedContent = truncateText(post.content, 100);

            postslistHTML += `
            <li id="posts">
                <p>${post.title} <br> ${post.author} <br> ${post.date} <br> ${truncatedContent}
                    <a href="post.html?id=${post._id}">Read more</a>
                </p> 
            </li>`;
        }

        document.getElementById("blog-posts").innerHTML = postslistHTML;

    } catch (error) {
        console.log(error);
    }
}

fetchAllposts();


