// // YOUR CODE HERE:
var app = {};
app.init = function () {
}
app.send = function (){
  $.ajax({
//   // This is the url you should use to communicate with the parse API server.
url: 'https://api.parse.com/1/classes/chatterbox',
type: 'POST',
data: JSON.stringify(message),
contentType: 'application/json',
success: function (data) {
  console.log('chatterbox: Message sent', data);
},
error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});
}
app.fetch = function (){
    // This is the url you should use to communicate with the parse API server.
    $.ajax({
      url: 'https://api.parse.com/1/classes/chatterbox',
      type: 'GET',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {

        console.log('chatterbox: Message Recieved', data);
      },
      error: function (data) {
    // Sees: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message');
  }
});

  }
  app.clearMessages = function (){

  }
  app.addMessage = function (){

  }
  app.addRoom = function (){

  }
// var message = {
//   username: 'anonlife',
//   text: 'omg',
//   roomname: 'myroom'
// };
// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'https://api.parse.com/1/classes/chatterbox',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent', data);
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message');
//   }
// });
// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'https://api.parse.com/1/classes/chatterbox',
//   type: 'GET',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {

//     console.log('chatterbox: Message Recieved', data);
//   },
//   error: function (data) {
//     // Sees: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message');
//   }
// });
