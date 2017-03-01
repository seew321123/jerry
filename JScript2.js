window.onload=function(){
        document.getElementsByClassName('pro')[0].style.display="block";
 for(var i = 0; i < 11; i++){
    var navli = document.getElementsByClassName('navli')[i];
    navli.index = i;
    navli.onmouseover = function() {
        n = this.index;
		clear();
		document.getElementsByClassName('pro')[n].style.display="block";
    };
};

function clear(){
	for(var j=0;j<11;j++){
		document.getElementsByClassName('pro')[j].style.display="none";
	};
};
for(var k=0;k<document.getElementsByClassName('pro').length;k++){
    document.getElementsByClassName('pro')[k].onclick=function(){
	document.getElementById("night").style.display="block"; 
}
};

};

