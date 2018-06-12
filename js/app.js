(function(){
    if(!('serviceWorker' in navigator)){
        console.log('Service worker not supported');
        return;
    }
       navigator.serviceWorker.register('/SWorker.js')
       .then(()=>{
           console.log('Registered');
       })
       .catch((error)=>{
           console.log('Registration failed:',error);
       });
 }());