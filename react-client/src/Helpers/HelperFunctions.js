export function sortByName(a, b) {
    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
}

export function sortByGroup(a, b) {
    return a.group_name.toLowerCase() < b.group_name.toLowerCase() ? -1 : 1

}