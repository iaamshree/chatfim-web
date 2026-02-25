function sendMessage() {
    let input = document.getElementById("messageInput");
    let message = input.value;

    if (message.trim() === "") return;

    let chatBox = document.getElementById("chatBox"); //
<__ lowercase b

    let newMessage = document.createElement("p");
    newMessage.textContent = message;

    chatBox.appendChild(newMessage);

    input.value = "";
}