document.addEventlistener("DOMContentLoaded", function(){

    const formularioLibros = document.getElementById("formularioLibro");
  
  const filaTabla = document.getElementById("registroTabla");
  let librosRegistrados = [];
  
  
  formularioLibros.addEventlistener("submit", function(event){
      event.defaultPrevented();
    
    const tituloLibro = document.getElementById("tituloLibro");
    
    const autor = document.getElementById("autor");
    
    const editorial = document.getElementById("editorial");
    
    const categoria = document.getElementById("categoria");
    
    const fecha = document.getElementById("fecha");
    
      const libro = {
      
      tituloLibro: tituloLibro,
      autor: autor,
      editorial: editorial,
      categoria: categoria,
      fecha: fecha
  
  };
  
  librosRegistrados.push(libro);
  agregarLibros();
  
  });
  
  function agregarLibros(){
      filaTabla.innerHTML = '';
    
    librosRegistrados.forEach(function(libro, indice){
    
            const fila= 
          <tr>
            <td>${libro.tituloLibro}</td>
            <td>${libro.autor}</td>
            <td>${libro.editortial}</td>
            <td>${libro.categoria}</td>
            <td>${libro.fecha}</td>
        </tr>        
  
      filaTabla.innerHTML += fila;
    });
    

      
    
  
    
  }

});
