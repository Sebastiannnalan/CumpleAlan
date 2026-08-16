function actualizarCountdown() {
    // Fecha y hora del evento: 13 de Septiembre de 2026 a las 3:00 PM (15:00)
    const fechaEvento = new Date("September 13, 2026 15:00:00").getTime();
    const ahora = new Date().getTime();

    // Cálculo del tiempo faltante en milisegundos
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    // Conversión a Días, Horas, Minutos y Segundos
    const diasFaltantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horasFaltantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosFaltantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundosFaltantes = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualización del HTML formateando a 2 dígitos
    document.getElementById("dias").textContent = String(diasFaltantes).padStart(2, "0");
    document.getElementById("horas").textContent = String(horasFaltantes).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutosFaltantes).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundosFaltantes).padStart(2, "0");
}

// Ejecución inicial e intervalo cada segundo
actualizarCountdown();
setInterval(actualizarCountdown, 1000);