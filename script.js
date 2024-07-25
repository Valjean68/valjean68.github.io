	
       

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


var lasbolas=bolasfooter.offsetTop*0.006

var bonjouruno=segundoinner.offsetTop*-1;
 	var bonjourdos=segundoinner.offsetTop*-0.9;
 	var bonjourtres=segundoinner.offsetTop*-1.1;
 	var bonjourcuatro=segundoinner.offsetTop*-0.7;
 	var bonjourcuatrovid=segundoinner.offsetTop*-0.8;
 	var bonjourcinco=segundoinner.offsetTop*-0.5;
 	var bonjourseis=segundoinner.offsetTop*-0.8;
 	var bonjourseisimg=segundoinner.offsetTop*-0.6;


 		r.style.setProperty('--lasbolas',lasbolas+'vw');

		r.style.setProperty('--segundouno',bonjouruno+'px');
		r.style.setProperty('--segundodos',bonjourdos+'px');
		r.style.setProperty('--segundotres',bonjourtres+'px');
		r.style.setProperty('--segundocuatro',bonjourcuatro+'px');
		r.style.setProperty('--segundocuatrovid',bonjourcuatrovid+'px');
		r.style.setProperty('--segundocinco',bonjourcinco+'px');
		r.style.setProperty('--segundoseis',bonjourseis+'px');
		r.style.setProperty('--segundoseisimg',bonjourseisimg+'px');
		

 	var thetaneg= window.pageYOffset/-1.2;

 	var thetaarriba=window.pageYOffset/4;

	var theta =  window.pageYOffset/5;
	var thetanoventa=(window.pageYOffset/5+90)
	var thetatrans=(window.pageYOffset/2*-1);
	var thetatranslento=(window.pageYOffset/5*-1);
	var thetaamaga=window.pageYOffset/18

	var transmas=(window.pageYOffset/-2);

	var achica=window.pageYOffset/-100

	

		r.style.setProperty('--thetaarriba',thetaarriba+'deg');
		r.style.setProperty('--thetacero',theta+'deg');
		r.style.setProperty('--thetanoventa',thetanoventa+'deg');
		r.style.setProperty('--transcero',thetatrans+'px');
		r.style.setProperty('--transcerolento',thetatranslento+'px');
		r.style.setProperty('--transamaga',thetaamaga+'px');

		r.style.setProperty('--thetaneg',thetaneg+'deg');

		r.style.setProperty('--transmas',transmas+'px');

		r.style.setProperty('--achica',achica+'vw');
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
