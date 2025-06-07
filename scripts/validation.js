const showInputError = (formElement, inputElement, errorMessage) => {
  const inputError = formElement.querySelector(".modal__input-error");
  const errorMessageID = inputElement.id + "-error";
  const errorElement = formElement.querySelector("#" + errorMessageID);
  formElement.classList.add(inputError);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorMessageID = inputElement.id + "-error";
  const errorElement = formElement.querySelector("#" + errorMessageID);
  errorElement.textContent = "";
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log("toggleButtonState called", hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("modal__submit-button-disabled");
  }
};

const disableButton = (buttonElement) => {
  buttonElement.disabled = true;
  buttonElement.classList.add("modal__submit-button-disabled");
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__submit-button");
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();
