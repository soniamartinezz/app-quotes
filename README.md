Usar herramientas de automatización. Como tercera opción es muy común también usar herramientas que permiten automatizar el flujo de trabajo frontend, compilando archivos CSS, Javascript, optimizando imágenes, etc. Nos referimos a paquetes como Gulp, Grunt o Webpack (aunque este último es más un empaquetador). 

# gem install sass

sass -v

Ahora te debes situar con el terminal en la carpeta donde tengas el archivo que acabas de crear con el código SCSS. Entonces lanzarás el comando para compilar, de esta manera:

sass style.scss style.css
sass --watch style.scss:style.css

Las variables, mixin, mapas... usados en styles.scss se transforman en valores en styles.css

En SASS (Syntactically Awesome Style Sheets), un mapa es una estructura de datos que asocia pares clave-valor. La función principal de un mapa en SASS es organizar datos relacionados de manera estructurada y accesible. Puedes usar un mapa para almacenar variables, configuraciones, estilos o cualquier conjunto de datos que necesites agrupar.

Algunas de las funciones principales de un mapa en SASS son:

Organización de datos: Los mapas te permiten organizar datos de manera más clara y estructurada, en lugar de tener muchas variables sueltas.

Acceso a datos: Puedes acceder a los valores dentro de un mapa utilizando su clave correspondiente, lo que facilita la recuperación de información específica.

Iteración: Puedes iterar sobre un mapa para realizar operaciones en cada uno de sus elementos, lo que puede ser útil para aplicar estilos de manera dinámica.

Reutilización de código: Almacenar datos en un mapa puede ayudar a reutilizar esos datos en diferentes partes de tu código, lo que promueve la modularidad y la mantenibilidad.

En resumen, los mapas en SASS proporcionan una forma eficiente y estructurada de organizar y manipular datos, lo que facilita la escritura y mantenimiento de hojas de estilo más complejas.

