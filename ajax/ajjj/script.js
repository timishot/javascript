const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

const fetchData = async () => {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    console.log(data);
    showLatestPosts(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

const showLatestPosts = (data) => {
  const { topic_list, users } = data;
  const { topics } = topic_list;

  postsContainer.innerHTML = topics.map((topic) => {
    const user = users.find((u) => u.id === topic.posters[0].user_id);
    const avatarSrc = user
      ? `${avatarUrl}${user.avatar_template.replace("{size}", "45")}`
      : ""; // Replace {size} with the desired size

    return `
      <div class="post">
        <img src="${avatarSrc}" alt="User Avatar" class="avatar">
        <div class="content">
          <h3>${topic.title}</h3>
          <p>Category: <a href="${forumCategoryUrl}${topic.category_id}">${topic.category_name}</a></p>
          <p>Author: ${user ? user.username : "Unknown"}</p>
          <p><a href="${forumTopicUrl}${topic.id}">Read more</a></p>
        </div>
      </div>
    `;
  }).join('');
};
