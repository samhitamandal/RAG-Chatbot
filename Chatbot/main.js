const msgerForm = document.querySelector(".msger-inputarea");
const msgerInput = document.querySelector(".msger-input");
const msgerChat = document.querySelector(".msger-chat");
const fileInput = document.getElementById("file-input");
const fileBtn = document.querySelector(".msger-file-btn");

fileBtn.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
    displayFileMessage(file);
    }
});

msgerForm.addEventListener("submit", event => {
    event.preventDefault();
    const msgText = msgerInput.value;
    if (!msgText) return;

    msgerInput.value = "";
    addMessage("User", "user.jpeg", "right", msgText);
});

function addMessage(name, img, side, text) {
    const msgHTML = `
    <div class="msg ${side}-msg">
        <div class="msg-img" style="background-image: url(${img})"></div>
        <div class="msg-bubble">
        <div class="msg-text">${text}</div>
        <div class="msg-info">
            <div class="msg-info-name">${name}</div>
            <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        </div>
    </div>
    `;
    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
}

function displayFileMessage(file) {
    const fileHTML = `
        <div class="msg right-msg">
        <div class="msg-img" style="background-image: url(user.jpeg)"></div>
        <div class="msg-bubble">
            <div class="msg-file">
            <i class="fas fa-file-alt msg-file-icon"></i>
            <a href="${URL.createObjectURL(file)}" download="${file.name}">${file.name}</a>
            </div>
            <div class="msg-info">
            <div class="msg-info-name">User</div>
            <div class="msg-info-time">${formatDate(new Date())}</div>
            </div>
        </div>
        </div>
    `;
    msgerChat.insertAdjacentHTML("beforeend", fileHTML);
    msgerChat.scrollTop += 500;
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
}
