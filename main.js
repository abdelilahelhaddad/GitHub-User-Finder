const searchBTN = document.querySelector('#searchBTN');
const user = document.querySelector('#user');
const getProfileInfos = document.querySelector('#getProfileInfos');
client_id = 'YOUR_CLIENT_ID';
client_secret = 'YOUR_CLIENT_SECRET';

async function getUser(userValue) {
  const profileResponse = await fetch(`https://api.github.com/users/${userValue}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  const profile = await profileResponse.json();
  return profile;
}

searchBTN.addEventListener('click', (e) => {
  e.preventDefault();
  const userValue = user.value;
  if (userValue !== '') {
    getUser(userValue).then(
      data => {
        displayInfos(data);
      }
    )
  } else {
    console.log('error');
  }
});

function displayInfos(data) {
  getProfileInfos.innerHTML = `
  <div class="flex-row p-4 border card bg-light d-flex w-100">
  <div id="profile-avatar">
    <img class="rounded-circle img-fluid" src="${data.avatar_url}" alt="User picture">
  </div>
  <div id="profile-infos" class="ml-5">
    <div class="top-infos d-flex justify-content-between align-items-center">
      <p class="fullname font-weight-bold">${data.name}</p>
      <p class="join-date">Member Since: <span id="date">${(data.created_at).slice(0, -10)}</span></p>
    </div>
    <a href="${data.html_url}" class="username">@<span>${data.login}</span></a>
    <p class="my-3">${data.bio}</p>
    <div id="mid-infos" class="mt-4 text-white d-flex justify-content-between">
      <div class="p-4 text-center rounded repos bg-dark">
        <p>Public Repos</p>
        <p>${data.public_repos}</p>
      </div>
      <div class="p-4 text-center rounded ghists bg-dark">
        <p>Public Gists</p>
        <p>${data.public_gists}</p>
      </div>
      <div class="p-4 text-center rounded followers bg-dark">
        <p>Followers</p>
        <p>${data.followers}</p>
      </div>
      <div class="p-4 text-center rounded following bg-dark">
        <p>Following</p>
        <p>${data.following}</p>
      </div>
    </div>
    <div id="bottom-infos" class="mt-4">
      <div class="row">
        <div id="location" class="mb-3 col">
          <i class="fas fa-map-marker-alt"></i>
          <span> ${data.location}</span>
        </div>
        <div id="twitter" class="col">
          <i class="fab fa-twitter"></i>
          <a href="https://twitter.com/${data.twitter_username}"> @<span>${data.twitter_username}</span></a>
        </div>
      </div>
      <div class="row">
        <div id="website" class="mb-3 col">
          <i class="fas fa-link"></i>
          <a href="${data.blog}"><span> ${data.blog}</span></a>
        </div>
        <div id="organization" class="col">
          <i class="far fa-building"></i>
          <span> ${data.company}</span>
        </div>
      </div>
    </div>
  </div>
</div>
  `
}