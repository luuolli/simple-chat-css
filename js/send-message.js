let input_message = document.querySelector('#chat-input-message')
let btn_send = document.querySelector('#chat-send-message-button')
let chat_messages_container = document.querySelector('#chat-messages-container')

btn_send.addEventListener('click', sendMensage)
window.addEventListener('keydown', (event) => {
  if (event.keyCode == 13) {
    sendMensage()
  }
})
function receavedMessage() {}

function sendMensage() {
  let message = input_message.value
  if (message == '') return
  let divMenssage = document.createElement('div')

  let itemMessage = `<div class="message-right">
        <div class="message-item">
            <span><strong>Você</strong></span
            ><br />
            <span>${message}</span>
        </div>
    </div>`

  divMenssage.innerHTML = itemMessage
  chat_messages_container.appendChild(divMenssage)
  input_message.value = ''

  chat_messages_container.scrollTo({
    top: chat_messages_container.scrollHeight,
  })
}
