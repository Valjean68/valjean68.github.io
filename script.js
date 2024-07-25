	
       

let body=document.querySelector('body')
let boxi=document.querySelector('.boxi')
let segundoinner=document.querySelector('.segundoinner')

	var r = document.querySelector(':root');

let bolasfooter=document.querySelector('.footer')


 let progress=document.querySelector('.progressbar')
 let totalheight=document.body.scrollHeight-window.innerHeight
 window.onscroll=function(){
 	let progressheight=(window.pageYOffset/totalheight)*100
 	progress.style.height=progressheight+'%'


 }





// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("elespan");

var modalImg = document.getElementById("img01");
var modalVid = document.getElementById("img02");
var captionText = document.getElementById("caption");



   function modall(elemento,texto){

    modal.style.display = "block";

    switch(Boolean(elemento.getElementsByTagName('video')[0])){
    	case true:
    	modalVid.style.display='block'
       modalVid.src = elemento.getElementsByTagName('video')[0].src;
       modalImg.style.display='none';
       break;
       case false:
        modalImg.style.display='block'
       modalImg.src = elemento.getElementsByTagName('img')[0].src;
       modalVid.style.display='none';
       break;
    }
    	

   


      

       captionText.innerHTML=texto

 }



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


const form=document.querySelector('.formulario')

function sendMsg(){
	

	const name=document.getElementById('nombre'),email=document.getElementById('mail'),telefono=document.getElementById('telefono'),asunto=document.getElementById('nombre'),msg=document.getElementById('nombre')

Email.send({
    SecureToken : "3be4db6a-bfe3-4708-9cf8-e1372db86605",
    To : 'grandbaudio@gmail.com',
    From : 'grandbaudio@gmail.com',
    Subject : asunto.value,
    Body : nombre.value+'<br>Teléfono: '+telefono.value+'<br>Mail: '+mail.value+'<br>'+msg.value
}).then(
  message => alert(message)
);
}
