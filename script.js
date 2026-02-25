function sendMessage() {
    let input = document.getElementById("messageInput");
    let message = input.value;

    if (message.trim() === "") return;

    let chatBox = document.getElementById("chatbox"); // <-- lowercase b matches HTML

    let newMessage = document.createElement("p");
    newMessage.textContent = message;

    chatBox.appendChild(newMessage);

    input.value = "";

    // Auto-scroll
    chatbox.scrollTop =
chatbox.scrollHeight;
}