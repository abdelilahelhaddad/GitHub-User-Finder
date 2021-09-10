const searchBTN = document.querySelector('#searchBTN');
const user = document.querySelector('#user');
const getProfileInfos = document.querySelector('#getProfileInfos');
client_id = 'd9308aacf8b204d361fd';
client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
repos_count = 5;
repos_sort = 'created: asc';

const userValue = user.value;

async function getUser(userValue) {
  const profileResponse = await fetch(`https://api.github.com/users/${userValue}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

  const profile = await profileResponse.json();

  return profile;
}

searchBTN.addEventListener('click', (e) => {
  e.preventDefault();
  if (userValue !== '') {
    getUser(userValue).then(

    )
  } else {
    console.log('error');
  }
});

function displayInfos() {
  getProfileInfos.innerHTML = `
  <div class="flex-row p-4 border card bg-light d-flex w-100">
  <div id="profile-avatar">
    <img class="rounded-circle img-fluid" src="./avatar.jpg" alt="User picture">
  </div>
  <div id="profile-infos" class="ml-5">
    <div class="top-infos d-flex justify-content-between align-items-center">
      <p class="fullname font-weight-bold">Abdelilah Elhaddad</p>
      <p class="join-date">Member Since: <span id="date">01 Jav 2019</span></p>
    </div>
    <a href="https://github.com/abdelilahelhaddad" class="username">@<span>abdelilahelhaddad</span></a>
    <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic quo ea perspiciatis
      officiis vero
      eaque ipsum, eum corrupti explicabo et aperiam odit rem voluptas facere nostrum autem aut? Impedit aperiam,
      atque odio saepe quibusdam cum!</p>
    <div id="mid-infos" class="mt-4 text-white d-flex justify-content-between">
      <div class="p-4 text-center rounded repos bg-dark">
        <p>Public Repos</p>
        <p>40</p>
      </div>
      <div class="p-4 text-center rounded ghists bg-dark">
        <p>Public Gists</p>
        <p>7</p>
      </div>
      <div class="p-4 text-center rounded followers bg-dark">
        <p>Followers</p>
        <p>5</p>
      </div>
      <div class="p-4 text-center rounded following bg-dark">
        <p>Following</p>
        <p>15</p>
      </div>
    </div>
    <div id="bottom-infos" class="mt-4">
      <div class="row">
        <div id="location" class="mb-3 col">
          <i class="fas fa-map-marker-alt"></i>
          <span> Morocco</span>
        </div>
        <div id="twitter" class="col">
          <i class="fab fa-twitter"></i>
          <a href="https://twitter.com/AbdilahElhaddad"> @<span>AbdilahElhaddad</span></a>
        </div>
      </div>
      <div class="row">
        <div id="website" class="mb-3 col">
          <i class="fas fa-link"></i>
          <a href="https://github.com"><span> https://github.com</span></a>
        </div>
        <div id="organization" class="col">
          <i class="far fa-building"></i>
          <span> Abdelilah Elhaddad</span>
        </div>
      </div>
    </div>
  </div>
</div>
  `
}