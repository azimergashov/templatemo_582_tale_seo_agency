
var  telegram_bot_id = "5570784931:AAHAk5u0j9bqSIYGP3L1GjOsTUylRwnDDH8"

var chat_id = -1001502748774

var telInput = document.querySelector('.number-input')

var telInputChange = function () {
    telInput.value = '+998 '
}
var name, surname, address, tel_number, u_message, message;
var getValues = function () {

    u_name = document.getElementById('user_name').value
    surname = document.getElementById('surname').value
    address = document.getElementById('address').value
    tel_number = document.getElementById('tel_number').value
    u_message = document.getElementById('message').value
    message = "Ismi: " + u_name + "\nFamiliya: " + surname + "\nManzil: " + address + '\ntel-raqami:' + tel_number, '\nIzoh:' + u_message;
}



var sendTelegram = function () {
    getValues()
    const  settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    }

    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("user_name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("tel_number").value = "";
    document.getElementById("message").value = "";
    alert("Tezzda alloqaga chiqamiz")
    return false;

}