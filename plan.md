# Project Plan: ChronoConnect

**Description:** A social networking platform centered around shared memories and timelines, allowing users to post events, photos, and stories linked to specific dates, fostering a sense of collective history and individual narratives.


## Development Goals

- [ ] Design and implement the database schema in database.sql, including tables for users, posts, comments, friendships, and likes.
- [ ] Create a database connection file (api/config.php) to handle database interactions.
- [ ] Develop user authentication functionalities: registration (api/register.php, register.html, assets/js/auth.js) and login (api/login.php, login.html, assets/js/auth.js) with secure password hashing.
- [ ] Implement user logout functionality (api/logout.php).
- [ ] Build the main website structure including index.html (landing page), home.html (user feed), profile.html, search.html, and friends.html.
- [ ] Design and implement reusable HTML components like navbar (components/navbar.html) and footer (components/footer.html).
- [ ] Style the website using Tailwind CSS (assets/css/style.css) to ensure responsiveness and a modern design.
- [ ] Implement post creation (api/create_post.php, home.html, assets/js/main.js) allowing users to submit text content and dates.
- [ ] Develop post retrieval (api/get_posts.php, home.html, assets/js/main.js) to display posts on the home page, ordered by date.
- [ ] Build user profile functionality: fetching user data (api/get_user.php, profile.html, assets/js/profile.js) and updating profile information (api/update_profile.php, profile.html, assets/js/profile.js).  Include handling profile picture uploads.
- [ ] Implement user search functionality (api/search_users.php, search.html, assets/js/search.js) to find other users on the platform.
- [ ] Develop friendship management: sending friend requests (api/send_friend_request.php, assets/js/friends.js, search.html, profile.html), accepting friend requests (api/accept_friend_request.php, assets/js/friends.js, friends.html), and rejecting friend requests (api/reject_friend_request.php, assets/js/friends.js, friends.html).
- [ ] Implement retrieval of friend lists (api/get_friends.php, friends.html, assets/js/friends.js).
- [ ] Develop post liking functionality (api/like_post.php, assets/js/main.js) allowing users to like and unlike posts.
- [ ] Implement comment creation (api/create_comment.php, post.html, assets/js/main.js) and retrieval (api/get_comments.php, post.html, assets/js/main.js).
- [ ] Create a single post view, allowing to view the post content, comments and date of the post (post.html).
