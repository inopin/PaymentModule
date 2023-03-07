export const inputDigits = (value) => {
    return value.replace(/[^\d]/g, '')
}

export const formatPan = (value) => {
    return value.replace(/\B(?=(?:\d{4})+(?!\d))/g, ' ')//расшифровать регулярку..
}