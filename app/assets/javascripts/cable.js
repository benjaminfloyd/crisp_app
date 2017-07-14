// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);

window.onload = function(){
document.querySelector('.cont_modal').className = "cont_modal";    
}
var c = 0;
function open_close(){
  if(c % 2 == 0){    
document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";  
c++;
  }else {
document.querySelector('.cont_modal').className = "cont_modal";  
c++;    
  }  
} 
 