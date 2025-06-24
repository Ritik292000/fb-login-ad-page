var ad=document.getElementById("a");
var close=document.getElementById("close");
setTimeout(()=>{
			ad.style.display="block";
			},5000);

close.addEventListener('click',()=>{
							ad.style.display='none';
							});


