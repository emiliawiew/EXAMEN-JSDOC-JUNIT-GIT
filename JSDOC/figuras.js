/**
 * Calcula el área de un triángulo a partir de su base y altura
 *
 * @function calcularArea
 * @param {number} base - Longitud de la base del triángulo
 * @param {number} altura - Altura del triángulo
 * @returns {number} El área calculada: (base * altura) / 2
 * @example
 * // devuelve 10
 * calcularArea(5, 4);
 */
function calcularArea(base, altura) {
  return (base * altura) / 2;
}

/**
 * Devuelve una cadena descriptiva con el nombre de la figura
 *
 * @function describir
 * @param {string} nombre - Nombre de la figura geométrica
 * @returns {string} Cadena que describe la figura
 * @example
 * // devuelve "Esta es una figura llamada: triángulo"
 * describir('triángulo');
 */
function describir(nombre) {
  return "Esta es una figura llamada: " + nombre;
}

/**
 * Cambia el nombre de una figura (simulado: devuelve el nuevo nombre)
 *
 * @function cambiarNombre
 * @param {string} nombreActual - Nombre actual de la figura (no usado en el retorno)
 * @param {string} nuevoNombre - Nuevo nombre que se asignará
 * @returns {string} El nuevo nombre de la figura
 * @example
 * // devuelve "rombo"
 * cambiarNombre('cuadrado', 'rombo');
 */
function cambiarNombre(nombreActual, nuevoNombre) {
  return nuevoNombre;
}

/**
 * Comprueba si dos lados son iguales y determina si es un cuadrado
 *
 * @function esCuadrado
 * @param {number} lado1 - Longitud del primer lado
 * @param {number} lado2 - Longitud del segundo lado
 * @returns {string} "Es un cuadrado." si son iguales, "No es un cuadrado." si no
 * @example
 * // devuelve "Es un cuadrado."
 * esCuadrado(5, 5);
 *
 * @example
 * // devuelve "No es un cuadrado."
 * esCuadrado(5, 4);
 */
function esCuadrado(lado1, lado2) {
  if (lado1 === lado2) {
    return "Es un cuadrado.";
  } else {
    return "No es un cuadrado.";
  }
}