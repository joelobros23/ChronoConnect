document.addEventListener('DOMContentLoaded', () => {
    // Function to handle liking/unliking a post
    const handleLike = async (postId, likeButton) => {
        try {
            const response = await fetch('api/like_post.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ post_id: postId })
            });

            const data = await response.json();

            if (response.ok) {
                // Update the like count and button appearance
                const likeCountElement = document.querySelector(`#like-count-${postId}`);
                if (likeCountElement) {
                    likeCountElement.textContent = data.likes;
                }

                if (data.liked) {
                    likeButton.classList.add('liked'); // Add 'liked' class for styling
                    likeButton.textContent = 'Unlike';
                } else {
                    likeButton.classList.remove('liked'); // Remove 'liked' class
                    likeButton.textContent = 'Like';
                }
            } else {
                console.error('Error liking/unliking post:', data.message);
                alert(data.message); // Show error to the user
            }
        } catch (error) {
            console.error('Error liking/unliking post:', error);
            alert('An error occurred while liking/unliking the post.');
        }
    };

    // Attach event listeners to like buttons
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('like-button')) {
            const postId = event.target.dataset.postId;
            handleLike(postId, event.target);
        }
    });

    // Example of fetching and displaying posts (replace with your actual implementation)
    const fetchPosts = async () => {
        try {
            const response = await fetch('api/get_posts.php');
            const posts = await response.json();

            // Example: Assuming you have a container with id 'posts-container'
            const postsContainer = document.getElementById('posts-container');
            if (postsContainer) {
                posts.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.innerHTML = `
                        <h3>${post.content}</h3>
                        <p>Date: ${post.date}</p>
                        <p>Likes: <span id="like-count-${post.id}">${post.likes}</span></p>
                        <button class="like-button" data-post-id="${post.id}">Like</button>
                    `;
                    postsContainer.appendChild(postElement);
                });
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    // Call fetchPosts or your equivalent function to initialize the posts display
    // fetchPosts(); // Uncomment when you have the 'posts-container' in your HTML
});