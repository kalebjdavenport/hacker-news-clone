
export async function getPost(id) {
  const postURL = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
  const post = await fetch(postURL);
  return await post.json();
}

export async function getUser(id) {
  const userURL = `https://hacker-news.firebaseio.com/v0/user/${id}.json`;
  const currUser = await fetch(userURL);
  return await currUser.json();
}

export async function getArrOfUserIdsOfType(storyType) {
  const url = `https://hacker-news.firebaseio.com/v0/${storyType}stories.json`;
  const topStories = await fetch(url);
  return await topStories.json();
}

export const load25Posts = arrOfIds =>
  arrOfIds.slice(0, 25).map(id => getPost(id));

