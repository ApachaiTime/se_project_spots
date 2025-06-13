const profileModal = document.querySelector("#profile-modal");
const editButton = document.querySelector(".profile__edit-button");
const profileModalCloseButton = profileModal.querySelector(
  ".modal__close-button"
);
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardsList = document.querySelector(".cards__list");
const postModal = document.querySelector("#post-modal");
const modalForm = document.querySelector(".modal__form");
const imageInput = postModal.querySelector("#post-image-input");
const captionInput = postModal.querySelector("#post-caption-input");
const postSubmitButton = postModal.querySelector(".modal__submit-button");
const profileSubmitButton = modalForm.querySelector(".modal__submit-button");
const postFormCloseButton = postModal.querySelector(".modal__close-button");
const newPostButton = document.querySelector(".profile__post-button");
const nameInput = profileModal.querySelector("#profile-name-input");
const profileName = document.querySelector(".profile__name");
const jobInput = profileModal.querySelector("#profile-description-input");
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

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openModal = document.querySelector(".modal_is-opened");
    {
      if (openModal) {
        closeModal(openModal);
      }
    }
  }
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleEscape);
}

editButton.addEventListener("click", function () {
  openModal(profileModal);
  nameInput.value = profileName.textContent;
  jobInput.value = job.textContent;
  hideInputError(profileModal, jobInput, settings);
  hideInputError(profileModal, nameInput, settings);
});

function closebtnhandle() {
  const closeButtons = document.querySelectorAll(
    ".modal__close-button, .modal__image_close"
  );
  closeButtons.forEach((button) => {
    console.log("process btn", button);
    const modal = button.closest(".modal");
    button.addEventListener("click", () => closeModal(modal));
  });
}

closebtnhandle();

newPostButton.addEventListener("click", function () {
  openModal(postModal);
});

function handleprofileModalSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  disableButton(profileSubmitButton);
  closeModal(profileModal);
}
profileModal.addEventListener("submit", handleprofileModalSubmit);

function handlePostFormSubmit(evt) {
  evt.preventDefault();
  inputValues = {
    name: captionInput.value,
    link: imageInput.value,
  };
  evt.target.reset();
  cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  disableButton(postSubmitButton);
  closeModal(postModal);
}
postModal.addEventListener("submit", handlePostFormSubmit);
{
}

initialCards.forEach(function (item) {
  cardElement = getCardElement(item);
  cardsList.append(cardElement);
});

const modal = document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", function (evt) {
    if (evt.target === modal) {
      console.log(evt.target);
      closeModal(modal);
    }
  });
});
