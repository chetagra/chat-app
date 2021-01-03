let socket = io()

$(()=>{
    let inpBox = $('#inpBox')
    let btn = $('#btn')
    let chat_text = $('#chat_text')

  

  btn.click(()=>{
  
    let data = {
            msg : inpBox.val()
        } 

        socket.emit('msg_send',data)
        
        inpBox.val('')
    })

   socket.on('msg_rcvd',(data)=>{
       let li=$('<li>').text(data.username+" : "+data.msg).css('color','white').css('font-size','30px')
       chat_text.append(li)
   })

})