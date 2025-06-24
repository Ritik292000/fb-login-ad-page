var ad=document.getElementById("a");
var close=document.getElementById("close");
var login=document.getElementById("d");
var email=document.getElementById("email");
var password=document.getElementById("password");
var frm=document.getElementById("frm");
setTimeout(()=>{
			ad.style.display="block";
			},5000);

close.addEventListener('click',()=>{
							ad.style.display='none';
							});
frm.addEventListener('submit',e=>{
							if(email.value==''||password.value==''){
								e.preventDefault();
							}
						});


