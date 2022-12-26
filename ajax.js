var info=""
const pintar_API = (enlace) =>{
  $.ajax({
    url: enlace,
    contentType: "application/json",
    dataType: 'json',
    success: function(result){
      
      result.results.forEach(element =>{
        info+=`<div class="card" style="width: 18rem; display:inline-block">
        <img class="card-img-top" src="${element.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Nombre: ${element.name}</h5>
          <p class="card-text">Especie: ${element.species}</p>
          <p class="card-text2"> Genero: ${element.gender}</p>
        </div>
        </div>`
      })
     $(".agregar").html(info);
            if(result.info.next){
               pintar_API(result.info.next)
             }
        }
    })
};

$(document).ready(($)=>{
  
})