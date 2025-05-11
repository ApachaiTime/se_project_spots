const initialCards = [
  {
    name: "Golden Gate bridge",
    link: " https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
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
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");
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
const imageModal = document.querySelector("#image-modal");
const modalCaption = imageModal.querySelector(".modal__caption");
const modalImage = imageModal.querySelector(".modal__image");
const imageModalClosebtn = imageModal.querySelector(".modal__image_close");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__description");
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    openModal(imageModal);
    modalImage.src = data.link;
    modalImage.alt = data.name;
    modalCaption.textContent = data.name;
  });

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

imageModalClosebtn.addEventListener("click", () => {
  closeModal(imageModal);
});

editButton.addEventListener("click", function () {
  openModal(profileForm);

  nameInput.value = profileName.textContent;
  jobInput.value = job.textContent;
});

profileModalCloseButton.addEventListener("click", function () {
  closeModal(profileForm);
});

newPostButton.addEventListener("click", function () {
  openModal(postForm);
});

postFormCloseButton.addEventListener("click", function () {
  closeModal(postForm);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closeModal(profileForm);
}
profileForm.addEventListener("submit", handleProfileFormSubmit);

function handlePostFormSubmit(evt) {
  evt.preventDefault();
  console.log(imageInput.value, captionInput.value);
  closeModal(postForm);
  inputValues = {
    name: captionInput.value,
    link: imageInput.value,
  };
  captionInput.value = "";
  imageInput.value = "";
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
}
postForm.addEventListener("submit", handlePostFormSubmit);
{
}

initialCards.forEach(function (item) {
  cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
