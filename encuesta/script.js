// Datos de las competencias (extraídos de tu Excel)
const competencias = [
  { id: 1, nombre: "Liderazgo y conducción de equipos" },
  { id: 2, nombre: "Organización y manejo del tiempo" },
  { id: 3, nombre: "Resolución de conflictos" },
  // ... Agrega las demás competencias aquí
];

// Inicializar la tabla de competencias
document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('#competencias tbody');
  
  competencias.forEach(competencia => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${competencia.id}- ${competencia.nombre}</td>
      <td><input type="radio" name="competencia-${competencia.id}" value="1" required></td>
      <td><input type="radio" name="competencia-${competencia.id}" value="0.75" required></td>
      <td><input type="radio" name="competencia-${competencia.id}" value="0.5" required></td>
      <td><input type="radio" name="competencia-${competencia.id}" value="0.25" required></td>
    `;
    
    tbody.appendChild(row);
  });

  // Calcular puntaje al hacer clic en el botón
  document.getElementById('calcular').addEventListener('click', calcularPuntaje);
  document.getElementById('generar-pdf').addEventListener('click', generarPDF);
  document.getElementById('enviar-email').addEventListener('click', enviarEmail);
});

// Función para calcular el puntaje
function calcularPuntaje() {
  let puntajeTotal = 0;
  
  competencias.forEach(competencia => {
    const selected = document.querySelector(`input[name="competencia-${competencia.id}"]:checked`);
    if (selected) puntajeTotal += parseFloat(selected.value);
  });

  const porcentajeFinal = ((puntajeTotal / competencias.length) * 100).toFixed(2);
  
  document.getElementById('puntaje-total').value = puntajeTotal;
  document.getElementById('porcentaje-final').value = `${porcentajeFinal}%`;
}

// Función para generar PDF (usando jsPDF)
function generarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Evaluación de Jefes de Cocina", 10, 10);
  doc.autoTable({
    head: [['Competencia', 'Puntaje']],
    body: competencias.map(comp => {
      const selected = document.querySelector(`input[name="competencia-${comp.id}"]:checked`);
      return [comp.nombre, selected ? selected.value : 'No seleccionado'];
    }),
    startY: 20
  });

  doc.save('evaluacion-jefe-cocina.pdf');
}

// Función para enviar email (usando EmailJS)
function enviarEmail() {
  // Configura EmailJS (https://www.emailjs.com/)
  const serviceID = 't
