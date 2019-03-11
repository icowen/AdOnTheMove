export function sortAlphabetically(a, b) {
    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
}