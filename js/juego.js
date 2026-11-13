let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

function juego(jugador) {
    const opciones = ["piedra", "papel", "tijera"];
    const máquina = opciones[Math.floor(Math.random() * opciones.length)];
    let mensaje; 

    partidas++;

    if (jugador === máquina) {
    mensaje = "Empate";
    empatadas++;
    } 
    
     else if (
     (jugador === "piedra" && máquina === "tijera") ||
     (jugador === "papel" && máquina === "piedra") ||
     (jugador === "tijera" && máquina === "papel") 
     ) {
      mensaje = "Ganaste";
      ganadas++
      } else {
     mensaje = "Perdiste";
     perdidas++
     }

     document.getElementById("jugada-jugador").textContent = 
     `Tu elección: ${jugador}`;
     document.getElementById("jugada-máquina").textContent = 
     `La máquina eligió: ${máquina}`;
     document.getElementById("mensaje").textContent = mensaje;

     document.getElementById("marcador").textContent =
     `Partidas jugadas: ${partidas}`;
     document.getElementById("ganadas").textContent =`Ganadas: ${ganadas}`;
     document.getElementById("empatadas").textContent =`Empates: ${empatadas}`;
     document.getElementById("perdidas").textContent =`Derrotas: ${perdidas}`;

}