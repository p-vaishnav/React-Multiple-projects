const axios = require('axios').default;


axios.
get('https://randomuser.me/api/').
then(function(response){
    console.log(response);
}).
catch(function(error){
    console.log('error if any');
}).then(function(){
    console.log('excecutes always')
})
