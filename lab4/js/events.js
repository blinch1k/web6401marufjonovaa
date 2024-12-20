document.querySelectorAll(".sub_form").forEach(sub_form => {
    let textarea = document.querySelector(".sub_form > textarea")
    sub_form.addEventListener("submit", event => {
        let text = textarea.value;
        if (text == "Я субаравод.") {
            event.preventDefault();
            if(!sub_form.children[0].classList.contains("error")) {
                sub_form.prepend(createError("Проверка не пройдена!!!"));
            }
        }
    })
});

function createError(message) {
    let error = document.createElement("p");
    error.classList.add("error");
    error.textContent = message;
    return error
}