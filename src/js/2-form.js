const formData = {
    email: "",
    message: "",
}

const refs = {
    formElem: document.querySelector("form"),
}
const storageKey = "feedback-form-state"

const savedData = localStorage.getItem(storageKey);

if (savedData) {
    const parsedData = JSON.parse(savedData);
    refs.formElem.elements.email.value = parsedData.email || "";
    refs.formElem.elements.message.value = parsedData.message || "";
    formData.email = parsedData.email;
    formData.message = parsedData.message
}

refs.formElem.addEventListener('input', e => {
    const currentEmail = e.currentTarget.elements.email.value.trim();
    const currentMessage = e.currentTarget.elements.message.value.trim();
    formData.email = currentEmail;
    formData.message = currentMessage;
    localStorage.setItem(storageKey, JSON.stringify(formData))
})

refs.formElem.addEventListener("submit", e => {
    e.preventDefault();
    const { email, message } = formData;
    if (email === "" || message === "") {
        alert("Fill please all fields");
        return;
    }
    
    console.log(formData);
    localStorage.removeItem("feedback-form-state")
    refs.formElem.reset();
    formData.email = "";
    formData.message = "";
})





