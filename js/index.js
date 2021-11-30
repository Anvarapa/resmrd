const openButton = document.querySelectorAll('#open');
const modal_window_show = document.querySelector('.modal_window_show')
const closeButton = document.querySelector('#close')
const modalContainer = document.querySelector('.modal_container')

openButton.forEach((item)=>{
item.addEventListener('click', ()=>{
  modal_window_show.classList.add('modal_show');
})
});
closeButton.addEventListener('click', ()=>{
  modal_window_show.classList.remove('modal_show')
})

document.addEventListener('click', function(item){
  if (item.target === modalContainer) {
    modal_window_show.classList.remove('modal_show')
  }
})

function gotowhatsapp() {
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;

    var url = "https://wa.me/996557899400?text=" 
    + "Имя:  " + name + "%0a"
    + "Телефон:  " + phone + "%0a"
    + "Email:  " + email  + "%0a"
    + "Имя товара:  " + service; 

    window.open(url, '_blank').focus();
}

function footerContact(){
  var footerName = document.getElementById('footer_name').value;
  var footerText = document.getElementById('footer_text').value;

  var url = "https://wa.me/996557899400?text=" 
    + "Имя:  " + footerName + "%0a"
    + "Сообщения:  " + footerText + "%0a";

    window.open(url, '_blank').focus();
}
