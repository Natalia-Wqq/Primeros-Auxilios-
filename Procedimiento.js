function muestraProcedimiento() {
  const numeroProced = parseInt(document.getElementById('numeroProced').value);
    let nombrePeli;

    switch (numeroProced) {
          case 1:
              nombreProced = "Posición lateral de seguridad";
              break;
          case 2:
              nombreProced = "Control de hemorragias";
              break;
          case 3:
              nombreProced = "Manejo de fracturas y esguinces";
              break;
          case 4:
              nombreProced = "Reanimación cardiopulmonar (RCP)";
              break;
          case 5:
              nombreProced = "Tratamiento de quemaduras";
              break;    
          default:
              nombreProced = "Número no válido. Por favor, introduce un número entre 1 y 5.";
              break;
    }
      document.getElementById('result').textContent = nombreProced;
}        