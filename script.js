function sendMessage() {
    let input = document.getElementById("messageInput");
    let message = input.value;

    if (message.trim() === "") return;

    let chatBox = document.getElementById("chatBox");

    // Create user message
    let userMessage = document.createElement("p");
    userMessage.textContent = "You: " + message;
    chatBox.appendChild(userMessage);

    // Clear input box
    input.value = "";

    // Bot reply after 1 second
    setTimeout(() => {
        let botMessage = document.createElement("p");
        botMessage.textContent = "Bot: I received - " + message;
        chatBox.appendChild(botMessage);
    }, 1000);
}
