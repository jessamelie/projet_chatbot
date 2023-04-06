const APIkey = "CCxBDV1v5cemAWgT"
const userID = "100012"
let urlAPI = `http://api.brainshop.ai/get?bid=174304&key=CCxBDV1v5cemAWgT&uid=100012&msg=hello`

//MESSAGE D'ACCUEIL BOT
const firstBotMsg = document.getElementById("firstBotMsg")
 firstBotMsg.innerText ="Hi Buddy, how can I help you?"

 //AFFICHAGE MESSAGE BOT
 const botMsg = () => {
    
 }


 //API
 const sendAPI = async () => {
    let response = await fetch(urlAPI)
    let data = await response.json()
responseBot(data)
 }


 const responseBot = (data) => {

 }