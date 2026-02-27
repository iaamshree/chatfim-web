function sendMessage() {
    let input = document.getElementById("messageInput");
    let message = input.value;

    if (message.trim() === "") return;

    let chatBox = document.getElementById("chatbox");

    let newMessage = document.createElement("p");
    newMessage.textContent = message;

    chatBox.appendChild(newMessage);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send message when pressing Enter
document.getElementById("messageInput")
.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}