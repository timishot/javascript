#!/usr/bin/node
const forumLatest = "https://forum-proxy.freecodecamp.rocks/latest";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

const fetchData = async () => {
	try{
		const res = await fetch(forumLatest);
		const data = await res.json();
		showLatestPosts(data);
	} catch (err){
		console.error(err);
	}
}

const forumCategory = (id) => {
	let selectedCategory = {};

	if (allCategories.hasOwnProperty(id)){}
}

const showLatestPosts = (data)=>{
	const { topic_list, users } = data;
	const { topics } = topic_list;

	postsContainer.innerHTML = topics.map((item)=>{
		const { id, title, views, posts_count, slug, posters, category_id, bumbed_at } = item;
		return `
			<tr>
				<td>
					<a class= "post-title>${title}</a>
					${forumCategory(category_id)}
				</td>
				<td>
					<div class="avatar-container">
						${avatars(posters, users)}
					</div>
				</td>
			</tr>`
	})
}
fetchData()