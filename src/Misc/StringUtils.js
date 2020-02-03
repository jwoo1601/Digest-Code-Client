export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function splitWords(str) {
    return Array.from(str.matchAll(/[A-Z][a-z0-9]*/), m => m[0]);
}