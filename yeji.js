 window.onload=function(){
 document.getElementById("page1").onclick=function(){
	document.getElementById("page1").className="active";
	document.getElementById("page2").className="";
	document.getElementById("yejiPage2").style.display="none"; 
	document.getElementById("yejiPage1").style.display="block"; 
 };
 
    document.getElementById("page2").onclick=function(){
	document.getElementById("page2").className="active";
	document.getElementById("page1").className="";
	document.getElementById("yejiPage1").style.display="none"; 
	document.getElementById("yejiPage2").style.display="block"; 
 };
 };