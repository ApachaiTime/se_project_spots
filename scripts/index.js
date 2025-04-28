const initialCards = [
  {
    name: "Val of Thorens",
    link: "./images/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "./images/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "./images/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest",
    link: "./images/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "./images/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "./images/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];
const profileForm = document.querySelector("#profile-modal");
const editButton = document.querySelector(".profile__edit-button");
const profileModalCloseButton = profileForm.querySelector(
  ".modal__close-button"
);

const postForm = document.querySelector("#post-modal");
const imageInput = postForm.querySelector("#post-image-input");
const captionInput = postForm.querySelector("#post-caption-input");
const submitButton = postForm.querySelector(".modal__submit-button");
const postFormCloseButton = postForm.querySelector(".modal__close-button");
const newPostButton = document.querySelector(".profile__post-button");
const nameInput = profileForm.querySelector("#profile-name-input");
const profileName = document.querySelector(".profile__name");
const jobInput = profileForm.querySelector("#profile-description-input");
const job = document.querySelector(".profile__description");

editButton.addEventListener("click", function () {
  profileForm.classList.add("modal_is-opened");
  nameInput.value = profileName.textContent;
  jobInput.value = job.textContent;
});

profileModalCloseButton.addEventListener("click", function () {
  profileForm.classList.remove("modal_is-opened");
});

newPostButton.addEventListener("click", function () {
  postForm.classList.add("modal_is-opened");
});

postFormCloseButton.addEventListener("click", function () {
  postForm.classList.remove("modal_is-opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  profileForm.classList.remove("modal_is-opened");
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

function handlePostFormSubmit(evt) {
  evt.preventDefault();
  console.log(imageInput.value, captionInput.value);
  postForm.classList.remove("modal_is-opened");
  imageInput.value = "";
  captionInput.value = "";
}
postForm.addEventListener("submit", handlePostFormSubmit);

initialCards.forEach(console.log(initialCards));
