<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Evaluación de Jefes de Cocina</title>
  <link rel="stylesheet" href="styles.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js"></script>
  <script src="script.js" defer></script>
</head>
<body>
  <div class="container">
    <h1>Evaluación de Desempeño</h1>
    <p>Complete la evaluación para el jefe de cocina:</p>

    <!-- Datos del Evaluado -->
    <div class="section">
      <h2>Datos del Evaluado</h2>
      <div class="form-group">
        <label for="legajo">Legajo:</label>
        <input type="text" id="legajo" required>
      </div>
      <div class="form-group">
        <label for="nombre">Nombre y Apellido:</label>
        <input type="text" id="nombre" required>
      </div>
    </div>

    <!-- Competencias -->
    <div class="section">
      <h2>Competencias</h2>
      <table id="competencias">
        <thead>
          <tr>
            <th>Competencia</th>
            <th>MB (1)</th>
            <th>B (0.75)</th>
            <th>R (0.5)</th>
            <th>NM (0.25)</th>
          </tr>
        </thead>
        <tbody>
          <!-- Las competencias se agregarán dinámicamente con JavaScript -->
        </tbody>
      </table>
    </div>

    <!-- Resultados -->
    <div class="section">
      <h2>Resultados</h2>
      <div class="form-group">
        <label for="puntaje-total">Puntaje Total:</label>
        <input type="text" id="puntaje-total" readonly>
      </div>
      <div class="form-group">
        <label for="porcentaje-final">Porcentaje Final:</label>
        <input type="text" id="porcentaje-final" readonly>
      </div>
    </div>

    <!-- Botones -->
    <div class="buttons">
      <button id="calcular">Calcular Puntaje</button>
      <button id="generar-pdf">Generar PDF</button>
      <button id="enviar-email">Enviar por Email</button>
    </div>
  </div>
</body>
</html>
