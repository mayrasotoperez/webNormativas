Hola! Si estás aca es porque querés agregar o modificar normativas/carreras.

A. Para ingresar una nueva carrera
B. Para modificar las normativas de una carrera existente

-----------------------------------------------------------------------------

A. Ingresar una nueva carrera
	1. Ingresar a la carpeta "pags"
	2. Copiar el archivo plantilla.html
	3. Pegarlo en la misma carpeta con el código correspondiente. 
	   Por ejemplo, si el código de la carrera es P00032 el archivo se 
	   llamará 032.html
	4. Crear una carpeta dentro de "pags" que se corresponda con la del 
	   Drive de Normativas con el código y nombre de la carrera.
	   Por ejemplo "032 - MAE Creación de Normativas"
	5. Incorporar los pdfs ya listos en la carpeta creada.
	6. Abrir el archivo html creado con algún editor de texto o de código.
	7. Ir a la sección comentada como <!-- CARPETA CON NORMATIVAS -->
	   Modificar el texto CARPETA con el nombre exacto de la carpeta 
	   creada en el paso 4.
	8. Ir a la sección comentada como <!-- CODIGO - NOMBRE DE LA CARRERA -->
	   Modificar el texto TITULO con el Código de la carrera, guión y el 
	   nombre de la carrera.
	   Por ejemplo: P00032 - Maestría en Creación de Normativas
	9. Ir a la sección comentada como <!--  BOTON CON NOMBRE DE NORMATIVA -->
		a. Modificar los dos textos NORMATIVA1 con el nombre exacto del
		   archivo de la normativa pdf (no incluir la extensión .pdf)
		b. Copiar el renglón siguiente cuantas veces sea necesario según la
		   cantidad de normativas que tenga la carrera. 
		   Cada renglón va a corresponder a una normativa.
		c. Modificar los nombres de las normativas siguientes de la misma 
		   forma que en a.
	10. Guardar 
	11. Abrir el archivo menu.html
	12. En este archivo se muestra un Menu con todas las carreras que hay
	    en UNTREF Posgrados. 
		Copiar el renglón de la última Carrera y pegarlo por debajo de ella.
	13. Reemplazar el código y nombre de la carrera con lo escrito en el 
	    punto 8.
	14. Reemplazar el texto entre comillas con el nombre del archivo
	    creado. Por ejemplo quedaría href="032.html" 
	15. Guardar y cerrar todo.
	16. Hacer un commit o guardar los cambios en git. 
	    El link se actualizará solo.

