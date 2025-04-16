const editButton = document.querySelector(".profile__edit-button");
const editModal = document.querySelector("#edit-profile-modal");
const editModalCloseButton = editModal.querySelector(".modal__close-button");
const postModal = document.querySelector("#new-post-modal");
const postModalCloseButton = postModal.querySelector(".modal__close-button");
const newPostButton = document.querySelector(".profile__post-button");

editButton.addEventListener("click", function () {
  editModal.classList.add("modal_is-opened");
});

editModalCloseButton.addEventListener("click", function () {
  editModal.classList.remove("modal_is-opened");
});

newPostButton.addEventListener("click", function () {
  postModal.classList.add("modal_is-opened");
});

postModalCloseButton.addEventListener("click", function () {
  postModal.classList.remove("modal_is-opened");
});
