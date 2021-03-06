/** Get
 * 
 * @param {string} url - The url of the petition.
 * @returns data
 */
export async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

/** Post sin autorizacion
 * 
 * @param {string} url Url para hacer el post 
 * @param {json} data  Datos de usuario (name, password, isuser)
 * @returns 
 */
export async function post(url, data) {
    const response = await fetch(
        url,
        {
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    const responseData = await response.json();
    return responseData;

}

/** Post con autorizacion
 * 
 * @param {string} url - Url para hacer post.
 * @param {string} token - Token de autorizacion.
 * @param {string} data - String que incluye: idusuario y contenido del post.
 * @returns 
 */
export async function authPost(url, token, data) {
    const response = await fetch(
        url,
        {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        }
    );
    const responseData = await response.json();
    return responseData;
}


/** Obtener token de autorizacion
 * 
 * @param {string} id - Id de usuario, se usa el context para pasarselo.
 * @param {string} secret - Contraseña del usuario, tambien se usa context.
 * @returns 
 */
export function authToken(id, secret) { 
    const authToken = `${id}:${secret}`; 
    const base64token = btoa(authToken);
    return `Basic ${base64token}`;
}

/** Funcion para dar formato a la fecha
 * 
 * @param {number} miliseconds Funcion usada para modificar la fecha de milisecs a fecha-hora
 * @returns 
 */
export function dateArrange(miliseconds) {
    let time = new Date(miliseconds);
    let timeToString = time.toString()
    const timeArranged = timeToString.replace('GMT+0200 (hora de verano de Europa central)', '')
    return timeArranged
}