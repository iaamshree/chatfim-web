function sendMessge() {
    let msg =
document,getElementByID("message").value;

    if (msg.trim() === "") {
        alert("please type something!");
        return;
    }
    
document,getElementByID("output").innerTe
xt = "you typed: " + msg;

}
