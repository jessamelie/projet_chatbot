const APIkey = "CCxBDV1v5cemAWgT"
const userID = "100012"
let urlAPI = `http://api.brainshop.ai/get?bid=174304&key=CCxBDV1v5cemAWgT&uid=100012&msg=hello`
const conversation = document.getElementById('conversation')

//MESSAGE D'ACCUEIL BOT
const firstBotMsg = document.getElementById("firstBotMsg")
 firstBotMsg.innerText ="Hi Buddy, how can I help you?"

//API
const sendAPI = async () => {
let response = await fetch(urlAPI)
let data = await response.json()
//botMsg(data.cnt)
return data

}

sendAPI()

//ENVOI MESSAGE UTILISATEUR
const messageInput = () => {
const messageUser = document.getElementById('messageInput')
const message = messageUser.value 
console.log(message)
conversation.innerHTML +=
    `<div class="messageUser">
        <div class="avatar">
        <img class="img-circle avatar" alt="chat avatar" src="directeur.png">
        </div>
        <div class="message-text-wrapper">
            <div class="message-text">
                ${message}
            </div>
        </div>
        <p class="time-stamp"><i class="fa fa-check"></i> 2 minute ago</p>
      </div>`
    messageUser.value = ""
}

document.getElementById('send').addEventListener("click", messageInput )