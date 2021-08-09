/* --------BUSCADOR-----------------------

When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = removeAccents(input.value.toUpperCase());
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (removeAccents(txtValue.toUpperCase()).indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } ;


/* ----------PDFS INTERACTIVOS------------*/ 


const diaf1 = new Vue({
    el: '#mostrarpdfs',
    data: {
      rutapdf: "../default.pdf",
      carpeta:"",
      tituloo:"Seleccione la Normativa que desea previsualizar"},
    methods: {
        cambiarcarpeta : function(y){
          this.carpeta = `${y}`
        },
        cambiarpdf : function(x){
          diaf1.cambiartituloo(x),
          this.rutapdf = this.carpeta +`/${x}.pdf`
          
        },
        
        cambiartituloo : function(z){
          this.tituloo = `${z}`
        },
    }
});

