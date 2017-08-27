var starta=document.getElementById("starta");
var enda=document.getElementById("enda");
var box=document.getElementsByClassName("box");
var color=["blue","green","orange","pink","grey"];
function changecolor(){
	for(var i=0;i<box.length;i++)
	{
		box[i].style.background=color[parseInt(Math.random()*5)];
	}
}
var i=0;
var kk;
starta.onclick=function(){
	if(i=1)
	{clearInterval(kk);}
	kk=setInterval(changecolor,1000);
		starta.style.background="white";
		starta.style.color="orange";
		enda.style.background="orange";
		enda.style.color="white";
		i=1;
	};

enda.onclick=function(){clearInterval(kk);
	enda.style.background="white";
	enda.style.color="orange";
	starta.style.background="orange";
	starta.style.color="white";
	}