let date = new Date();
//-------------------------------------------------//
export function getTime() {
    return date.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: 'numeric'
    });
}
//-------------------------------------------------//
export function getDate() {
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}
//-------------------------------------------------//