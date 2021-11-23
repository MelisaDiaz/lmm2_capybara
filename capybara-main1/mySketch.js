//imágenes escenarios
var biblioteca, ganaste, perdiste, inicio, instrucciones, credito, ciudad, barraDialogo, caraAguila, caraCarpincho, tablaVidas, bibliotecaAguila, aguilaParada;
//cinematica
var cinematicaBiblioteca, cinematicaPelea, cinemticaAguila;

//sonidos
var caidaAguila, golpe, impacto_cuerpo, revolea_libro, musicaCiudad,sonidoCarpinchoBiblioteca;

//estado
var estado = "ciudad";
var terminarLanzar = false;
var sentido = "izquierda"; //primer tucan
var sentido2 = "izquierda"; //segundo tucan
var entrarBibliotecaAguila;

//dialogos
var dialogoBiblioteca1;
var dialogo1;
var dialogoCiudad;

//aguila
var aguiX;
var aguilaVolando;
var aguilaVolandoIzq;

//variables carpincho
var carX, carY, tamCar, velCarX;
var carSprites = [];
var carSpritesIzquierda = [];
var carSpritesBiblioteca = [];
var direccionCar = "derecha";

//variables animales
var tucan, tucanDerecha;
var tucX, tucX2;
var tucY;
var cont = 0;
var pinguino;
var vidasP;
var vidasA;
var vidasT1;
var vidasT2;
var vidas;

//variables pluma
var pluma;
var plumaY;
var plumaX, plumaX2;
var plumaPosActual;
var cayendo;

//variables libro 1 (libro que se dispara)
var libroX;
var libroY;
var libroPosActual; //sigue el rastro de donde está el libro ahora
var libroVel;
var tamLibro;
var disparado; //si estoy o no disparando

//variables ciudad
var cX;
var libroYCiudad;
var plumaXA, plumaYA;



function preload() {

	//cinematicas
	cinematicaBiblioteca = loadImage("animacion-inicio.gif");
	cinematicaPelea = loadImage('escenaPelea.gif');

	//sonidos
	soundFormats('mp3', 'ogg');
	musicaCiudad= loadSound("musicaCiudad.mp3");
	caidaAguila = loadSound('caida_aguila_1.mp3');
	golpe = loadSound('golpe_1.mp3');
	impacto_cuerpo = loadSound('impacto_cuerpo.mp3');
	revolea_libro = loadSound('rebolea_libro.mp3');
	sonidoCarpinchoBiblioteca= loadSound ('sonidoCarpinchoBiblioteca.mp3');

	//FONDOS
	inicio = loadImage("pantalla inicial.png");
	instrucciones = loadImage("instrucciones.png");
	biblioteca = loadImage("fondo01.png"); //biblioteca
	ciudad = loadImage("fondo_ciudad02.png");
	bibliotecaAguila = loadImage("bibliotecaAguila.png");
	creditos = loadImage("creditos.png");
	ganaste = loadImage("ganaste.png");
	perdiste = loadImage("perdiste.png");

	//elementos
	libroimg = loadImage("libro.png");
	caraAguila = loadImage("caraAguila.png");
	caraCarpincho = loadImage("caraCarpincho.png");
	tablaVidas = loadImage("tablaVidas.png");
	pluma = loadImage("pluma.png");

	//personajes
	tucan3vidas = loadImage("tucan.png");
	tucan3vidasDer = loadImage("tucanDerecha.png");
	tucan2vidas = loadImage("tucan2vidas.png");
	tucan1vida = loadImage("tucan1vida.png");
	tucan2vidasDer = loadImage("tucan2vidasDer.png");
	tucan1vidaDer = loadImage("tucan1vidaDer.png");
	tucanConLibro = loadImage("tucanConLibro.png");

	aguilaParada = loadImage("aguilaParada.png");
	pinguino = loadImage("pinguino.png");
	pinguinoAlas = loadImage("pinguinoAlas.png");
	pinguinoAlasDerecha = loadImage("pinguinoAlasDerecha.png");
	aguilaVolando = loadImage("aguilaVolando.png");
	aguilaVolandoIzq = loadImage("aguilaVolandoIzq.png");

	pinguinoConLibro = loadImage("pinguinoConLibro.png");
	pinguino3vidas = loadImage("pinguino3vidas.png");
	pinguino2vidas = loadImage("pinguino2vidas.png");
	pinguino1vida = loadImage("pinguino1vida.png");
	pinguino3vidasDer = loadImage("pinguino3vidasDer.png");
	pinguino2vidasDer = loadImage("pinguino2vidasDer.png");
	pinguino1vidaDer = loadImage("pinguino1vidaDer.png");

	//dialogos
	dialogoBiblioteca1 = loadImage("dialogoBiblioteca1.png");
	dialogoPing= loadImage("dialogoPinguino.png");
	dialogoCiudad= loadImage("dialogoCiudad.png");

	//carpincho en la ciudad
	//faltan agregar los demas
	carSprites[0] = loadImage("carDerecha.png");
	/*	carSprites[1] = loadImage("car_1.png");
		carSprites[2] = loadImage("car_2.png");
		carSprites[3] = loadImage("car_3.png");
		carSprites[4] = loadImage("car_4.png");
		carSprites[5] = loadImage("car_5.png");
		carSprites[6] = loadImage("car_6.png");
		carSprites[7] = loadImage("car_7.png");
		carSprites[8] = loadImage("car_8.png");
		carSprites[9] = loadImage("car_9.png");
		carSprites[10] = loadImage("car_10.png");
		carSprites[11] = loadImage("car_11.png");*/

	carSpritesIzquierda[0] = loadImage("carIzquierda.png");

	//carpincho biblioteca
	carSpritesBiblioteca[0] = loadImage("Carpincho_Carro_01.png");
	carSpritesBiblioteca[1] = loadImage("Carpincho_Carro_01Izq.png");
	/*	carSpritesBiblioteca[2] = loadImage("Carpincho_Carro_03.png");
		carSpritesBiblioteca[3] = loadImage("Carpincho_Carro_04.png");
		carSpritesBiblioteca[4] = loadImage("Carpincho_Carro_05.png");
		carSpritesBiblioteca[5] = loadImage("Carpincho_Carro_06.png");
		carSpritesBiblioteca[6] = loadImage("Carpincho_Carro_07.png");
		carSpritesBiblioteca[7] = loadImage("Carpincho_Carro_08.png");
		carSpritesBiblioteca[8] = loadImage("Carpincho_Carro_09.png");
		carSpritesBiblioteca[9] = loadImage("Carpincho_Carro_10.png");
		carSpritesBiblioteca[10] = loadImage("Carpincho_Carro_11.png");
		carSpritesBiblioteca[11] = loadImage("Carpincho_Carro_12.png");*/




}


function setup() {
	createCanvas(1000, 700);
	background(255);
	cont = 0;
	inicializarVariables();
}

function imprimir() {
	// print("mouseX: " + mouseX);
	// print("mouseY: " + mouseY);

//	print("car" + cX);
}

function inicializarVariables() {

	tamCar = width / 3.5;
	carX = width - 600;
	carY = height - 170;
	velCarX = 5;

	//libro
	libroX = carX + 100;
	libroY = carY - 50;
	libroPosActual = 0; //sigue el rastro de donde está el libro ahora
	libroVel = 15;
	tamLibro = width / 15;
	disparado = false;

	//PLUMA
	plumaX = tucX;
	plumaX2 = tucX2;
	plumaY = tucY + 20;
	plumaVel = 10;
	plumaPosActual = 0;
	cayendo = false;
	//ciudad movimiento
	cX = 0;
	//contador de vidas
	vidas = 3;
	vidasA = 3;
	vidasT1=3;
	vidasT2=3;
	//variable animales
	tucX = 1644;
	tucX2 = 2400;
	tucY = 182;
	aguiX = 800;


	//Pingüino
	pingX = 50;
	pingY = 100;
	pingTamX = 215;
	pingTamY = 185;
	vidasP = 3;
	colision1 = false;
	colision2 = false;
	entrarBibliotecaAguila = false;

	//dialogos
	dialogo1=true;
	//cinematica
	cinematicaAguila=false;
}

function draw() {
	imageMode(CORNER);
	//llamar funciones
	keyTyped();
	keyPressed();
	imprimir(); //ver valores en consola y ubicarlos en una sola funcion


	if (estado == "inicio") {
		background(inicio, 0, 0, width, height);
	}
	if (estado == "instrucciones") {
		background(instrucciones, 0, 0, width, height);
	}
	if(estado=="animacionInicio"){
		print(estado);
		if(cinematicaBiblioteca.getCurrentFrame()<45){

			image(cinematicaBiblioteca, 0, 0);
		} else {
			estado="biblioteca";
		}
	}
	if (estado == "biblioteca") {
		imageMode(CORNER);
		background(biblioteca, 0, 0, width, height);
		carpinchoBiblioteca();
		escenaBiblioteca();
		libro();
	}
	if (estado == "ciudad") {
		escenaCiudad();
		carpinchoPersonaje();
		ciudadAnimales();
		libro();
		//musicaCiudad.play();
	}
	if(estado=="animacionPelea"){
		print(cinematicaPelea.getCurrentFrame());
		if(cinematicaPelea.getCurrentFrame()<323){
			image(cinematicaPelea, 0, 0);
		} else {
			estado="bibliotecaAguila";
		}
	}
	if (estado == "bibliotecaAguila") {
		bibliotecaAguilaF();
		carpinchoPersonaje();
		libro();
	}
	if (estado == "perdiste") {
		background(perdiste, 0, 0, width, height);
		inicializarVariables();
	}
	if (estado == "ganaste") {
		background(ganaste, 0, 0, width, height);
		inicializarVariables();
	}
	if (vidas == 0) {
		estado = "perdiste";

	}
	if (vidasA == 0) {
		estado = "ganaste";

	}

}



function libro() { //----- LIBRO ---------------------------------------------------------------------------------------------
	imageMode(CENTER);
	//estados de posición del libro
		//* 0 = pos del carpincho, listo para ser disparado
		//* 1 = en movimiento después de haber sido disparado
		//* 2 = colisión con enemigos o el cielo, vuelve a 0

	//dibujar libro
	image(libroimg, libroX, libroY, tamLibro, tamLibro);

	//seguir el rastro y disparar el libro
	if (disparado == true && libroPosActual == 0){
		libroPosActual = 1;
	}

	//disparar libro
	if(libroPosActual == 1){
		libroX = libroX; //deja de seguir a carpincho
		libroY = libroY-libroVel; //se mueve para arriba

		//si pasa el borde de la ventana o se pierde
		if(libroY <=0){
			libroPosActual = 2; //colisiona y vuelve a 0
		}

	}//cierro disparar libro
	else{
		//cuando no está disparando, el libro sigue al carpincho
		//libroX = carX + 100; lo comente porque lo puse en la funcion keyTyped asi se pone bien el libro cuando va hacia la izq
		libroY = carY - 50;
	}

	//recargar libro
	if(libroPosActual == 2){
		libroX = carX + 100;
		libroY = carY - 50;
		libroPosActual = 0; //reiniciar para poder disparar de nuevo
	}


} //cierro libro

function bibliotecaAguilaF() { //----- BIBLIOTECA ÁGUILA ---------------------------------------------------------------------------
	background(bibliotecaAguila, 0, 0, width, height);

	image(tablaVidas, 34, 30, 293, 61); //tabla carpincho
	if (vidas == 3) {
		image(caraCarpincho, 85,40); //primer vida carp
		image(caraCarpincho, 150,40); //segunda vida carp
		image(caraCarpincho, 215, 40); //tercera vida carp
	}
	if (vidas == 2) {
		image(caraCarpincho, 85,40); //primer vida carp
		image(caraCarpincho, 150,40); //segunda vida carp
	}
	if (vidas == 1) {
		image(caraCarpincho, 85,40); //primer vida carp
	}
	image(tablaVidas, 674, 30, 293, 61); //tabla aguila
	if (vidasA == 3) {
		image(caraAguila, 727, 34,47,44); //primer vida a aguila
		image(caraAguila, 793, 34,47,44); //segunda vida a aguila
		image(caraAguila, 860, 34,47,44); //tercera vida a aguila
	}
	if (vidasA == 2) {
		image(caraAguila, 727, 34,47,44); //primer vida a aguila
		image(caraAguila, 793, 34,47,44); //segunda vida a aguila
	}
	if (vidasA == 1) {
		image(caraAguila, 727, 34,47,44); //primer vida a aguila
	}

	//aguila volando despues de la cinematica
	if (aguiX >= 160 / 2 && sentido == "izquierda") {
			image(pluma, plumaXA, plumaYA, 57, 54);
			image(aguilaVolando, aguiX, 40, 340, 382);
			aguiX = aguiX - 10;
			plumaXA = plumaXA - 10;
			sentido = "izquierda";
		} else {
			sentido = "derecha";
		}
	if (sentido == "derecha" && aguiX <= 1000 ) {
			image(pluma, plumaXA, plumaYA, 57, 54);
			image(aguilaVolandoIzq, aguiX, 40, 340, 382);
			aguiX = aguiX + 10;
			plumaXA = plumaXA + 10;
		} else {
		sentido = "izquierda";
		}

	if (libroX >= aguiX - 340 / 2 && libroX <= aguiX + 340 / 2 && libroY >= 40 - 382 / 2 && libroY <= 40 + 382 / 2) {
		vidasA --;
		libroPosActual = 2; //envio el libro devuelta al carpincho
	}
}



//funcion personaje carpincho
function carpinchoPersonaje() {
	imageMode(CENTER);
	if (estado == "ciudad") {
		if (direccionCar == "derecha") {
			image(carSprites[0], carX, 582, 146,282);
		}
		if (direccionCar == "izquierda") {
			image(carSpritesIzquierda[0], carX, 582, 146,282);
		}
	}
	if (estado == "bibliotecaAguila") {
		if (direccionCar == "derecha") {
			image(carSprites[0], carX, 582,146,282);
		}
		if (direccionCar == "izquierda") {
			image(carSpritesIzquierda[0], carX, 582, 146,282);
		}


	}
	keyTyped();
}

//funcion personaje carpincho biblioteca
function carpinchoBiblioteca() { //----- CARPINCHO BIBLIOTECA -------------------------------------------------------------------------------------
	imageMode(CENTER);
	if (direccionCar == "derecha") {
		image(carSpritesBiblioteca[0], carX, carY, tamCar, tamCar);
	}
	if (direccionCar == "izquierda") {
		image(carSpritesBiblioteca[1], carX, carY, tamCar, tamCar);
	}
}


//funcion primer escena biblioteca
function escenaBiblioteca() { //----- ESCENA BIBLIOTECA ----------------------------------------------------------------------------------------

	if(dialogo1==true){
		image(dialogoBiblioteca1,298,604);
		//sonidoCarpinchoBiblioteca.play();
	}
		//PINGÜINO
	//cambio de estado del pingüino

	//Cuando tiene 3 vidas -------------------------
	if (vidasP == 3) {
		if (pingX >= 50 && sentido == "izquierda") {
			image(pinguino3vidas, pingX, pingY, pingTamX, pingTamY);
			pingX = pingX - 5;
			sentido = "izquierda";
		} else {
			sentido = "derecha";
		}
		if (sentido == "derecha" && pingX <= 600) {
			image(pinguino3vidasDer, pingX, pingY, pingTamX, pingTamY);
			pingX = pingX + 5;
		} else {
			sentido = "izquierda";
		}
	} //cierro 3 vidas

	//Cuando tiene 2 vidas ---------------
	if (vidasP == 2) {
		if (pingX >= 50 && sentido == "izquierda") {
			image(pinguino2vidas, pingX, pingY, pingTamX, pingTamY);
			pingX = pingX - 5;
			sentido = "izquierda";
		} else {
			sentido = "derecha";
		}
		if (sentido == "derecha" && pingX <= 600) {
			image(pinguino2vidasDer, pingX, pingY, pingTamX, pingTamY);
			pingX = pingX + 5;
		} else {
			sentido = "izquierda";
		}
	} //cierro 2 vidas

	//Cuando tiene 1 vida --------------
	if (vidasP == 1) {
		if (pingX >= 50 && sentido == "izquierda" ) {
			image(pinguino1vida, pingX, pingY, pingTamX, pingTamY);
			pingX = pingX - 5;
			sentido = "izquierda";
		} else {
			sentido = "derecha";
		}
		if (sentido == "derecha" && pingX <= 600) {
			image(pinguino1vidaDer, pingX, pingY, pingTamX, pingTamY);
			pingX = pingX + 5;
		} else {
			sentido = "izquierda";
		}
	} //cierro 1 vida

	//Cuando ya no tiene vidas --------------
	if (vidasP == 0) {
			image(pinguinoConLibro, 130, 320, 190, 225);
			image(dialogoPing,298,604);
	}
	//colisión entre libro y pingüino
	if (libroX >= pingX - pingTamX / 2 && libroX <= pingX + pingTamX / 2 && libroY >= pingY - pingTamY / 2 && libroY <= pingY + pingTamY / 2) {
		vidasP --;
		libroPosActual = 2; //envio el libro devuelta al carpincho
	}



	//sale carpincho a la ciudad si el pingüino no tiene mas vidas
	if (estado == "biblioteca" && vidasP == 0 && carX >= width) {
		estado = "ciudad";
		carX = width - 600;
	}

}

function caidaPluma() { //----- CAIDA PLUMA ---------------------------------------------------------------------------------------------
	cont = cont +1;
	//print(cont);
	if(cont>=100){
		plumaY= plumaY - 10;
	}
	if(plumaY>=carY){
		plumaY= tucY + 10;
		cont=0;
	}
}

function plumaCae() { //----- CAIDA PLUMA ---------------------------------------------------------------------------------------------
	//dibujar pluma
	image(pluma, plumaX, plumaY, 57, 54);
	image(pluma, plumaX2, plumaY, 57, 54);

	cont = cont +1; //contador tipo framecount
	if(cont>=100){
		cayendo = true; //si llega a 100, se dispara las plumas
	}
	if(cayendo == true && plumaPosActual == 0){
		plumaPosActual = 1;
	}

	if (plumaPosActual == 1) {
		plumaX = plumaX;
		plumaX2 = plumaX2;
		plumaY = plumaY+plumaVel;

		if(plumaY <= 670){ //si llega al piso, se reinicia
			plumaPosActual = 2;
			cont = 0;
		}
	}
	else { //si no, sigue a los tucanes
		plumaX = tucX;
		plumaX2 = tucX2;
		plumaY = tucY + 20;
	}

	if(plumaPosActual == 2){
		plumaX = tucX;
		plumaX2 = tucX2;
		plumaY = tucY + 10;
		plumaPosActual = 0;
	}
}

function escenaCiudad() { //----- CIUDAD ---------------------------------------------------------------------------------------------
	print("vidas" + vidas);
	//-----------------------------------------------
	//ELEMENTOS
	image(ciudad, cX, 0, 5705, height);
	//image(barraDialogo, 20, 834, 785, 176);
	image(tablaVidas, 34, 30, 293, 61); //tabla carpincho
	if (vidas == 3) {
		image(caraCarpincho, 85,40); //primer vida carp
		image(caraCarpincho, 150,40); //segunda vida carp
		image(caraCarpincho, 215, 40); //tercera vida carp
	}
	if (vidas == 2) {
		image(caraCarpincho, 85,40); //primer vida carp
		image(caraCarpincho, 150,40); //segunda vida carp
	}
	if (vidas == 1) {
		image(caraCarpincho, 85,40); //primer vida carp
	}

}

//funcion segunda escena paseo por la ciudad vs animales
function ciudadAnimales() { //----- ANIMALES EN CIUDAD -------------------------------------------------------------------------------------------
	// //---TUCÁN 1--------------------------------------------
	// //Cuando tiene 3 vidas
	// if (vidasT1 == 3) {
	// 	if (tucX >= 160 / 2 && sentido == "izquierda") {
	// 		image(tucan3vidas, tucX, tucY, 200, 190);
	// 		tucX = tucX - 5;
	// 		sentido = "izquierda";
	// 	} else {
	// 		sentido = "derecha";
	// 	}
	// 	if (sentido == "derecha" && tucX <= 1000 ) {
	// 		image(tucan3vidasDer, tucX, tucY, 200, 190);
	// 		tucX = tucX + 5;
	// 	} else {
	// 		sentido = "izquierda";
	// 	}
	// } //cierro 3 vidas
	//
	// //Cuando tiene 2 vidas ---------------
	// if (vidasT1 == 2) {
	// 	if (tucX >= 160 / 2 && sentido == "izquierda") {
	// 		image(tucan2vidas, tucX, tucY, 200, 190);
	// 		tucX = tucX - 5;
	// 		sentido = "izquierda";
	// 	} else {
	// 		sentido = "derecha";
	// 	}
	// 	if (sentido == "derecha" && pingX <= 600) {
	// 		image(tucan2vidasDer, tucX, tucY, 200, 190);
	// 		ucX = tucX + 5;
	// 	} else {
	// 		sentido = "izquierda";
	// 	}
	// } //cierro 2 vidas
	//
	// //Cuando tiene 1 vida --------------
	// if (vidasT1 == 1) {
	// 	if (tucX >= 160 / 2 && sentido == "izquierda") {
	// 		image(tucan1vida, tucX, tucY, 200, 190);
	// 		tucX = tucX - 5;
	// 		sentido = "izquierda";
	// 	} else {
	// 		sentido = "derecha";
	// 	}
	// 	if (sentido == "derecha" && tucX <= 1000) {
	// 		image(tucan1vidaDer, tucX, tucY, 200, 190);
	// 		tucX = tucX + 5;
	// 	} else {
	// 		sentido = "izquierda";
	// 	}
	// } //cierro 1 vida
	//
	// //Cuando Tucán1 ya no tiene vidas
	// if (vidasT1 == 0) {
	// 		image(tucanConLibro, 130, 320, 190, 225);
	//  }
	//
	// //---TUCÁN 2-------------------------------------------------------------------
	// //Cuando tiene 3 vidas -------------------------
	// if (vidasT2 == 3) {
	// 	if (tucX2 >= 160 / 2 && sentido2 == "izquierda") {
	// 		image(tucan3vidas, tucX2, tucY, 200, 190);
	// 		tucX2 = tucX2 - 5;
	// 		sentido = "izquierda";
	// 	} else {
	// 		sentido = "derecha";
	// 	}
	// 	if (sentido2 == "derecha" && tucX2 <= 1000 ) {
	// 		image(tucan3vidasDer, tucX2, tucY, 200, 190);
	// 		tucX2 = tucX2 + 5;
	// 	} else {
	// 		sentido = "izquierda";
	// 	}
	// } //cierro 3 vidas
	//
	// //Cuando tiene 2 vidas ---------------
	// if (vidasT2 == 2) {
	// 	if (tucX2 >= 160 / 2 && sentido2 == "izquierda") {
	// 		image(tucan2vidas, tucX2, tucY, 200, 190);
	// 		tucX2 = tucX2 - 5;
	// 		sentido = "izquierda";
	// 	} else {
	// 		sentido = "derecha";
	// 	}
	// 	if (sentido2 == "derecha" && tucX2 <= 1000 ) {
	// 		image(tucan2vidasDer, tucX2, tucY, 200, 190);
	// 		tucX2 = tucX2 + 5;
	// 	} else {
	// 		sentido = "izquierda";
	// 	}
	// } //cierro 2 vidas
	//
	// //Cuando tiene 1 vida --------------
	// if (vidasT1 == 1) {
	// 	if (tucX2 >= 160 / 2 && sentido2 == "izquierda") {
	// 		image(tucan1vida, tucX2, tucY, 200, 190);
	// 		tucX2 = tucX2 - 5;
	// 		sentido = "izquierda";
	// 	} else {
	// 		sentido = "derecha";
	// 	}
	// 	if (sentido2 == "derecha" && tucX2 <= 1000 ) {
	// 		image(tucan1vidaDer, tucX2, tucY, 200, 190);
	// 		tucX2 = tucX2 + 5;
	// 	} else {
	// 		sentido = "izquierda";
	// 	}
	// } //cierro 1 vida
	//
	// //Cuando Tucán2 ya no tiene vidas
	// if (vidasT2 == 0) {
	// 		image(tucanConLibro, 130, 320, 190, 225);
	//  }
	//
	//  //Cuando los dos tucanes no tienen vidas
	//  if (vidasT1 == 0 && vidasT2 == 0) {
	// 			 image(dialogoCiudad,298,604);
	// 			 if(cX <= -1960){
	// 				 estado="animacionPelea"
	// 			 }
	// 	}

	//animal tucan
	if(vidasT1>=1){
	if (tucX >= 160 / 2 && sentido == "izquierda") {
		image(tucan3vidas, tucX, tucY, 160, 149);
		//image(pluma, plumaX, plumaY, 57, 54);
		tucX = tucX - 5;
		//plumaX = plumaX - 10;
		sentido = "izquierda";
	} else {
		sentido = "derecha";
	}
	if (sentido == "derecha" && tucX <= 1000 ) {
		image(tucan3vidasDer, tucX, tucY, 160, 149);
		//image(pluma, plumaX, plumaY, 57, 54);
		tucX = tucX + 5;
		//plumaX = plumaX + 10;
	} else {
		sentido = "izquierda";
	}

	plumaCae();

	}

	if(vidasT2>=1){
	if (tucX2 >= 160 / 2 && sentido2 == "izquierda" ) {
		//image(pluma, plumaX2, plumaY, 57, 54);
		image(tucan3vidas, tucX2, 182, 160, 149);
		tucX2 = tucX2 - 5;
		//plumaX2 = plumaX2 - 10;

		sentido2 = "izquierda";
	} else {
		sentido2 = "derecha";
	}
	if (sentido2 == "derecha" && tucX2 <= 1000 ) {
		//image(pluma, plumaX2, plumaY, 57, 54);
		image(tucan3vidasDer, tucX2, 182, 160, 149);
		tucX2 = tucX2 + 5;
	//	plumaX2 = plumaX2 + 10;

	} else {
		sentido2 = "izquierda";
	}
	}

	if(vidasT1<1 && vidasT2<1){
		image(dialogoCiudad,298,604);
		if(cX <= -1960){
			estado="animacionPelea"
		}
	}


	//colisión entre libro y tucanes
	if (libroX >= tucX - 160 / 2 && libroX <= tucX + 160 / 2 && libroY >= tucY - 149 / 2 && libroY <= tucY + 149 / 2) {
		vidasT1 --;
		libroPosActual = 2; //envio el libro devuelta al carpincho
	}
	if (libroX >= tucX2 - 160 / 2 && libroX <= tucX2 + 160 / 2 && libroY >= tucY - 149 / 2 && libroY <= tucY + 149 / 2) {
		vidasT2 --;
		libroPosActual = 2; //envio el libro devuelta al carpincho
	}

}

function mouseClicked() {
	cambiarEscena();

}

function cambiarEscena() { //----- CAMBIAR ESCENA CON BOTONES -------------------------------------------------------------------------------------

	if (estado == "inicio") {
		if (botones(370, 613, 350, 470)) {
			estado = "animacionInicio";
		}
		if (botones(55, 140, 50, 130)) {
			estado = "instrucciones";
		}
	}
	if (estado == "perdiste") {
		if (botones(50, 100, 40, 90)) {
			estado = "inicio";
		}
	}
	if (estado == "ganaste") {
		if (botones(50, 100, 40, 90)) {
			estado = "inicio";
		}
	}
}//cerrar cambiar escena

//funcion controlar botones pantalla
function botones(px1, px2, py1, py2) { //FUNCION PARA VERIFICAR SI SE CLICKEO EN LA ZONA DEL BOTÓN
	if (mouseX >= px1 && mouseX <= px2 && mouseY >= py1 && mouseY <= py2) {
		return true;
	}
	return false;
}


function keyTyped() {

	if (keyDown('m')) { // momentaneo porque no funcionaba el boton para volver atras en las instrucciones
		estado = "inicio";
		print("escape");
	}

	if (estado != "ciudad") {
		if (keyDown('a')) {
			carX = carX - velCarX;
			direccionCar = "izquierda";
			libroX=carX - 100;
		}

		if (keyDown('d')) {
			carX = carX + velCarX;
			direccionCar = "derecha";
			libroX=carX + 100;

		}
	}
	if (estado == "ciudad") {
		if (keyDown('p')) {
			caidaPluma();
		}
		if (cX > -3960) { //bordes de la pantalla
			if (keyDown('d')) {
				cX = cX - velCarX;
				libroX = libroX - velCarX;
				direccionCar = "derecha";
			}
		}

		if (cX < 120) { //bordes de la pantalla
			if (keyDown('a')) {
				cX = cX + velCarX;
				libroX = libroX + velCarX;
				direccionCar = "izquierda";
			}
		}
	}

	if (estado=="biblioteca"){ //funcion para detectar si el jugador apreto una tecla y desaparece el dialogo
		if(keyDown('a')){
			dialogo1=false;
		}
		if(keyDown('d')){
			dialogo1=false;
		}
	}

}

function keyPressed() {
	if (keyDown(' ') && keyIsPressed) {
		disparado = true;
	} else {
		disparado = false;
	}
}
