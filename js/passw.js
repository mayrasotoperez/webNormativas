var N="x";

do {
	N = prompt("Ingrese la contraseña");

    if(N != "untrefpos"){
        alert("[Error] La contraseña es incorrecta");}
    else{
        window.location.href="menu.html";}

    } while(N != "untrefpos");