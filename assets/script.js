function captura(){
  
  let nombre= document.getElementById("Nombre").value;
  let apellido= document.getElementById("Apellido").value;
  let edad= document.getElementById("Edad").value;
  let telefono= document.getElementById("telefono").value;
  let tiposangre= document.getElementById("tiposangre").value;
  

  if(nombre ===""|| apellido ==="" || edad ==="" || tiposangre ==="" ){
  alert('Favor ingresar todos los Datos')
}
   if (edad <18){
  alert('Debe ser mayor de edad para ingresar')
  return
   }
  alert(`Carnet generado:\n \n nombre: ${nombre}\n apellido: ${apellido}\n Edad: ${edad}\n telefono ${telefono}\n Tipo de sangre ${tiposangre} `)
}
