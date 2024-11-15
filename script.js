const actividades = [];


function agregarActividad() {
    const destino = document.getElementById("destino").value;
    const actividad = document.getElementById("actividad").value;
    
    if (destino && actividad) {
        actividades.push({ destino, actividad });
        actualizarItinerario();

        document.getElementById("destino").value = '';
        document.getElementById("actividad").value = '';
    } else {
        alert("Completa todos los campos.");
    }
}

function actualizarItinerario() {
    const listaActividades = document.getElementById("listaActividades");
    listaActividades.innerHTML = actividades.map(
        (a, index) => `<p>${index + 1}. ${a.destino} - ${a.actividad}</p>`
    ).join('');

    const itinerarioContenido = document.getElementById("itinerarioContenido");
    itinerarioContenido.innerHTML = actividades.length > 0
        ? actividades.map(a => `<p>${a.destino}: ${a.actividad}</p>`).join('')
        : "<p>No hay actividades agregadas aún.</p>";
}

function calcularPresupuesto() {
    const presupuestoTotal = parseFloat(document.getElementById("presupuesto").value) || 0;
    const transporte = parseFloat(document.getElementById("transporte").value) || 0;
    const alojamiento = parseFloat(document.getElementById("alojamiento").value) || 0;
    const actividadesPresupuesto = parseFloat(document.getElementById("actividadesPresupuesto").value) || 0;

    const totalGastado = transporte + alojamiento + actividadesPresupuesto;
    const saldoRestante = presupuestoTotal - totalGastado;

    let mensaje = `Total gastado: ${totalGastado.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}. `;
    mensaje += saldoRestante >= 0 
        ? `Saldo restante: ${saldoRestante.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}`
        : `Excediste el presupuesto por ${Math.abs(saldoRestante).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })}`;

    document.getElementById("resultadoPresupuesto").textContent = mensaje;
}
