/**
 * 
 * @param {string} url - The url of the petition.
 * @returns data
 */
export async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}