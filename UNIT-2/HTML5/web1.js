//The worker thread

self.addEventListener('message',function(e){
    self.postMessage(e.data)
},false)

//This basically on receiving the message main thread 
//and then sends the processed data