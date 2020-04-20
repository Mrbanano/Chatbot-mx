const actions = require('./actions')


exports.handleMessage = (webhookEvent)=>{
    if(webhookEvent.message){
        let message = webhookEvent.message;
        if(message.quick_reply){
            console.log("envio respuesta rapida");
        }else if (message.attachments){
            console.log("envio multimedia");
        }else if (message.text){
            actions.sendTextMessage("has enviado texto ",webhookEvent);
        }
    }
}

handlePostBack = (webhookEvent) =>{
    let event = webhookEvent.postback.playload;
    switch(event){
        case'encustas':
         console.log('presiono encuestas');
        break;
        case'sucursales':
            actions.sendTextMessage("oprimiste surcursales",webhookEvent);
        break;
        case'inicio':
            actions.sendTextMessage("bienvenido soy un chat bot",webhookEvent);
        break;
    }
}