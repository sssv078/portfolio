var arrow=document.getElementsByClassName("arrow");
document.getElementById("htxt").style.textShadow="2px 4px 6px #ff3131";
document.getElementById("slider").style.backgroundImage="url('images/0.jpg')";
document.getElementById("htxt").innerHTML="E-Racer<br> Unleashing the Gamer Inside<br> Rising the adrenaline Gush";
document.getElementById("htxt").style.color="#dc12ea";
document.getElementById("htxt").style.fontSize="30px";

var message="";


arrow[1].addEventListener("click",function(){
	var slider=document.getElementById("slider");
	var sname=slider.style.backgroundImage;
	var s_int=(parseInt(sname.match(/\d+/g))+1)%3;
		if(s_int==0){
			message="E-Racer<br> Unleashing the Gamer Inside<br> Rising the adrenaline Gush";
			htxt.style.color="#dc12ea";
			htxt.style.fontSize="26px";
			htxt.style.textShadow="2px 4px 6px #dc12ea";
		}
		else if(s_int==1){
			message="Loves to Cook and  <b>TRUE GOURMET</b>";
			htxt.style.color="white";
			htxt.style.fontSize="28px";
			htxt.style.textShadow="2px 4px 6px #ff3131";
		}
		else if(s_int==2){
			message="A hodophile By Genes<br>This wanderLust has taken me<br>to various place in this Incredible India!";
			htxt.style.color="#fdb93b";
			htxt.style.fontSize="26px";
			htxt.style.textShadow="2px 4px 6px #ff3131";
		}
	slider.style.backgroundImage="url('images/"+s_int+".jpg')";
	htxt.innerHTML=message;
	resetAnim();
});

arrow[0].addEventListener("click",function(){
	var slider=document.getElementById("slider");
	var sname=slider.style.backgroundImage;
	var s_int=(parseInt(sname.match(/\d+/g))-1)%3;
	if(s_int<0){
		s_int=2;
	}
		if(s_int==0){
			message="E-Racer<br> Unleashing the Gamer Inside<br> Rising the adrenaline Gush";
			htxt.style.color="#dc12ea";
			htxt.style.fontSize="26px";
		}
		else if(s_int==1){
			message="Loves to Cook and  <b>TRUE GOURMET</b>";
			htxt.style.color="white";
			htxt.style.fontSize="28px";
			htxt.style.textShadow="2px 4px 6px #ff3131";
		}
		else if(s_int==2){
			message="A hodophile By Genes<br>This wanderLust has taken me<br>to various place in this Incredible India!";
			htxt.style.color="#fdb93b";
			htxt.style.fontSize="26px";
			htxt.style.textShadow="2px 4px 6px #ff3131";
		}
	slider.style.backgroundImage="url('images/"+s_int+".jpg')";
	htxt.innerHTML=message;
	resetAnim();
});

var play=setInterval(auto,4000);


function auto(){
	var slider=document.getElementById("slider");
	var sname=slider.style.backgroundImage;
	var htxt=document.getElementById("htxt");
	setTimeout(function(){
	    var s_int=(parseInt(sname.match(/\d+/g))+1)%3;
		if(s_int==0){
			message="E-Racer<br> Unleashing the Gamer Inside<br> Rising the adrenaline Gush";
			htxt.style.color="#dc12ea";
			htxt.style.fontSize="30px";
		}
		else if(s_int==1){
			message="Loves to Cook and  <b>TRUE GOURMET</b>";
			htxt.style.color="white";
			htxt.style.fontSize="32px";
			htxt.style.textShadow="2px 4px 6px #ff3131";
		}
		else if(s_int==2){
			message="A Hodophile By Genes<br>This wanderLust has taken me<br>to various place in this Incredible India!";
			htxt.style.color="#fdb93b";
			htxt.style.fontSize="28px";
			htxt.style.textShadow="2px 4px 6px #ff3131";
		}
	    slider.style.backgroundImage="url('images/"+s_int+".jpg')";
		htxt.innerHTML=message;
	},800);
	setTimeout(function(){
		slider.classList.remove("anim");
		htxt.classList.remove("anim");
	},1600);
	slidemation();
	
}


function slidemation(){
	var slider=document.getElementById("slider");
	var htxt=document.getElementById("htxt");
	slider.className+=" anim";
	htxt.className+=" anim";
}

function resetAnim(){
	clearInterval(play);
	play=setInterval(auto,4000);
}







