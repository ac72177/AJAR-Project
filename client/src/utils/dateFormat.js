export function stringToDate(dateString) {
    const date = new Date(params.value)
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
}