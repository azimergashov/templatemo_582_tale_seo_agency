
const telegram_bot_id = "5570784931:AAHAk5u0j9bqSIYGP3L1GjOsTUylRwnDDH8"

const chat_id = -1001502748774

const telInput = document.querySelector('.number-input')

const telInputChange = function () {
    telInput.value = '+998 '
}
// var name, surname, address, tel_number, u_message, message
const getValues = function () {

}

const telegramSend = document.getElementById('.telegram-send')




const  send = function() {
    // e.preventDefault()
    let u_name = document.querySelector('.name').value
    let surname = document.querySelector('.surname').value
    let address = document.querySelector('.address').value
    let tel_number = document.querySelector('.tel_number').value
    let u_message = document.querySelector('.message').value

    console.log(123);

    console.log(u_name);
    const message = "Ismi: " + u_name + "\nFamiliya: " + surname + "\nManzil: " + address + '\ntel-raqami:' + tel_number + "\nIzoh: "+ u_message;

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
    document.querySelector(".name").value = "";
    document.querySelector(".surname").value = "";
    document.querySelector(".address").value = "";
    document.querySelector(".tel_number").value = "";
    document.querySelector(".message").value = "";
    alert("Tezzda alloqaga chiqamiz")
    return false;

}

const sendTelegram = () =>{
    let u_name = document.querySelector('.name').value
    let surname = document.querySelector('.surname').value
    let address = document.querySelector('.address').value
    let tel_number = document.querySelector('.tel_number').value
    let u_message = document.querySelector('.message').value

    let  a = ""
    const  tel = tel_number.split(' ').map(e => a = a + e)

    console.log( Number(a) );



    if( !u_name){
        return alert("Ismingizni  kiriting!!")
    }
    if( !surname  ){
        return alert("Familiyangizni kiriting!!")
    }
    if( !address ){
        return alert("Manzilni  kiriting!!")
    }
    if( !tel_number ){
       return alert("Raqamingizni  kiriting!!")
    }
    if(!Number(a)){
        return alert("Raqamingizni to'g'ri kiriting ")
    }
    if(a.length != 13){
        return alert("Raqamingizni to'g'ri kiriting ")
    }
    // if( ! tel_number){

    // }

    const message = "Ismi: " + u_name + "\nFamiliya: " + surname + "\nManzil: " + address + '\ntel-raqami:' + a + "\nIzoh: "+ u_message;

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
    document.querySelector(".name").value = "";
    document.querySelector(".surname").value = "";
    document.querySelector(".address").value = "";
    document.querySelector(".tel_number").value = "";
    document.querySelector(".message").value = "";
    alert("Tezzda alloqaga chiqamiz")
    return false;

}