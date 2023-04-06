let message = ""
//VARIABLES ACCESS API
const APIkey = "CCxBDV1v5cemAWgT"
const userID = "100012"


//BOT : MESSAGE D'ACCUEIL FIXE
const firstBotMsg = document.getElementById("firstBotMsg")
 firstBotMsg.innerHTML =`<div class="response">
 <div class="responseAvatar">
 <img class="img-circle avatar" alt="chat avatar" src="bot.png">
 </div>
 <div class="message-text-wrapper">
     <div class="message-text">
        Hey buddy, how can I help you?
     </div>
 </div>
 <!-- <p class="time-stamp"><i class="fa fa-check"></i> 2 minute ago</p>-->
</div>`

//USER : MESSAGE REQUETE

const sendAPI = async() => {
    const messageUser = document.getElementById('messageInput')
    message = messageUser.value 
    let urlAPI = `http://api.brainshop.ai/get?bid=174304&key=${APIkey}&uid=${userID}&msg=${message}`

    conversation.innerHTML +=
    `<div class="request">
        <div class="requestAvatar">
        <img class="img-circle avatar" alt="chat avatar" src="directeur.png">
        </div>
        <div class="message-text-wrapper">
            <div class="message-text">
                ${message}
            </div>
        </div>
        <!-- <p class="time-stamp"><i class="fa fa-check"></i> 2 minute ago</p>-->
      </div>`
    messageUser.value = ""

     let response = await fetch(urlAPI)
     let data = await response.json()

     conversation.innerHTML +=
     `<div class="response">
     <div class="responseAvatar">
     <img class="img-circle avatar" alt="chat avatar" src="bot.png">
     </div>
     <div class="message-text-wrapper">
         <div class="message-text">
         ${data.cnt}
         </div>
     </div>
    <!-- <p class="time-stamp"><i class="fa fa-check"></i> 2 minute ago</p>-->
    </div>`
                 
             


}
document.getElementById('send').addEventListener("click", sendAPI )













// const conversation = document.getElementById('conversation')



// //API

// //botMsg(data.cnt)
// return data

// }

// sendAPI()

// //ENVOI MESSAGE UTILISATEUR
// const messageInput = () => {

// console.log(message)

// }
