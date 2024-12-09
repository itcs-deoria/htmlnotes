let currentElement, currentPasswordKey;

// Passwords for each section
const passwords = {
    password1: "1234",
    password2: "itcs",
    password3: "4321",
    password4: "itcs",
    password5: "htmltest"
};

// Show the custom modal
function showModal(element, passwordKey) {
    currentElement = element;
    currentPasswordKey = passwordKey;
    const modal = document.getElementById("passwordModal");
    modal.style.display = "flex";
}

// Validate password and toggle content
function validatePassword() {
    const enteredPassword = document.getElementById("modalPassword").value;
    if (enteredPassword === passwords[currentPasswordKey]) {
        const content = currentElement.nextElementSibling;
        const currentlyOpen = document.querySelector('.content.open');

        if (currentlyOpen && currentlyOpen !== content) {
            currentlyOpen.classList.remove('open');
        }

        content.classList.toggle('open');
        closeModal();
    } else {
        showErrorModal();
    }
}

// Show the error modal
function showErrorModal() {
    closeModal();
    const errorModal = document.getElementById("errorModal");
    errorModal.style.display = "flex";
}

// Close the password modal
function closeModal() {
    const modal = document.getElementById("passwordModal");
    modal.style.display = "none";
    document.getElementById("modalPassword").value = ""; // Clear the input
}

// Close the error modal
function closeErrorModal() {
    const errorModal = document.getElementById("errorModal");
    errorModal.style.display = "none";
}

// Close modal if clicked outside of it
window.onclick = function(event) {
    const passwordModal = document.getElementById("passwordModal");
    const errorModal = document.getElementById("errorModal");
    if (event.target === passwordModal) {
        closeModal();
    }
    if (event.target === errorModal) {
        closeErrorModal();
    }
};
