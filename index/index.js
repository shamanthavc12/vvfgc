document.getElementById('contact-form')
.addEventListener('submit',function(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message =document.querySelector("message").value;
    var subject="New message form"+name;
    var body="Name:"+ name +"/n Email:"+ email +"/n Message:"+ message ;
    var mailto_link='mailto:shamanthavc0@gmail.com'+'?subject='
    +subject+'&body='+ encodeURIComponent(body);
        window.location.href=mailto_link
});