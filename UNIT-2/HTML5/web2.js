self.addEventListener('message',function(event){
    var num=event.data;
    var sqr=num*num;
    var result="The square of the number is :"+sqr;
    self.postMessage(result);
})