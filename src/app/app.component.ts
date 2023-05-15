import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title : string = 'ProyectoJuegoAngular';
  img : string = './assets/img/imagenPrincipal.png';
  winround : string = "Empieza el juego";
  cpu : number = 0;
  puntosCpu : number = 0;
  barraCpu: number = 0;
  barraIncremento: number = 0;
  puntosJugador: number = 0;
  barraJugador : number = 0;
  cardDisplay : string = "";
  maxPuntos : number = 0;
  btnEmpezar: string = "disabled";
  btnReset: string = "disabled";
  btnJugador: string[] = [
    "disabled",
    "disabled",
    "disabled",
    "disabled",
    "disabled",
  ];
  btnCpu: string[] = [
    "btn btn-warning",
    "btn btn-warning",
    "btn btn-warning",
    "btn btn-warning",
    "btn btn-warning",
  ];
  InicioJuego(jugador:number){
    this.cpu =Math.floor(Math.random() *5)
    this.colorBotones(this.cpu);
    switch (this.cpu){
      case 0:
        if (jugador == 0){
          this.empate();
        }else if (jugador == 1){
          this.ganajugador();
        } else if (jugador == 2){
          this.ganacpu();
        }else if (jugador == 3){
          this.ganacpu();
        }else if (jugador == 4){
          this.ganajugador();
        }
        break;
      case 1: //papel
        if (jugador == 1){
          this.empate();
        }else if (jugador == 0){
          this.ganacpu();
        } else if (jugador == 2){
          this.ganajugador();
        }else if (jugador == 3){
          this.ganajugador();
        }else if (jugador == 4){
          this.ganacpu();
        }
        break;
      case 2: //tijera
        if (jugador == 2){
          this.empate();
        }else if (jugador == 0){
          this.ganajugador();
        } else if (jugador == 1){
          this.ganacpu();
        }else if (jugador == 3){
          this.ganacpu();
        }else if (jugador == 4){
          this.ganajugador();
        }
        break;
      case 3: // lagarto
        if (jugador == 3){
          this.empate();
        }else if (jugador == 0){
          this.ganajugador();
        } else if (jugador == 1){
          this.ganacpu();
        }else if (jugador == 2){
          this.ganajugador();
        }else if (jugador == 4){
          this.ganacpu();
        }
        break;
      case 4: //spook
        if (jugador == 4){
          this.empate();
        }else if (jugador == 0){
          this.ganacpu();
        } else if (jugador == 1){
          this.ganajugador();
        }else if (jugador == 2){
          this.ganacpu();
        }else if (jugador == 3){
          this.ganajugador();
        }
    }
    //Si alguien consigue el maximo de puntos, se termina el juego
    if(this.puntosCpu === this.maxPuntos || this.puntosJugador === this.maxPuntos){
      this.deshabilitarBotones();
      //Opcion de mostrar por alerta
      //alert(this.winround);
      this.btnReset = "";
    }
  }

  ganacpu(){
    this.winround = "Gana CPU";
    this.puntosCpu++;
    if(this.puntosCpu === this.maxPuntos){
      this.barraCpu = 100;
    }else{
      this.barraCpu = this.barraCpu + this.barraIncremento;
    }
  }

  ganajugador(){
    this.winround = "Gana Jugador"
    this.puntosJugador++;
    if(this.puntosJugador === this.maxPuntos){
      this.barraJugador = 100;
    }else{
      this.barraJugador = this.barraJugador + this.barraIncremento;
    }
  }

  empate(){
    this.winround = "Empate";
  }

  //Resetea el color de los botones y cambia el color al botón seleccionado por la cpu
  colorBotones(number: number){
    for (let index = 0; index < this.btnCpu.length; index++) {
      this.btnCpu[index] = "btn btn-warning";
    }
    this.btnCpu[number] = "btn btn-danger";
  }

  //Al elegir a cuantas rondas jugar
  rondas(number: number){
    switch(number){
      case 0:
        this.maxPuntos = 3;
        this.barraIncremento = 33,4;
        break;
      case 1:
        this.maxPuntos = 5;
        this.barraIncremento = 20;
        break;
      case 2:
        this.maxPuntos = 7;
        this.barraIncremento = 14,3;
        break;
    }
    this.btnEmpezar = "";
  }

  empezar(){
    this.cardDisplay = "hidden";
    this.habilitarBotones();
    this.btnEmpezar = "disabled";
  }

  habilitarBotones(){
    for (let index = 0; index < this.btnJugador.length; index++) {
      this.btnJugador[index] = "";
    }
  }

  deshabilitarBotones(){
    for (let index = 0; index < this.btnJugador.length; index++) {
      this.btnJugador[index] = "disabled";
    }
  }

  reset(){
    this.puntosJugador = 0;
    this.puntosCpu = 0;
    this.btnEmpezar = "disabled";
    this.cardDisplay = "";
    this.btnCpu = [
      "btn btn-warning",
      "btn btn-warning",
      "btn btn-warning",
      "btn btn-warning",
      "btn btn-warning",
    ];
    this.btnReset = "disabled";
    this.barraCpu = 0;
    this.barraJugador = 0;
  }
}
