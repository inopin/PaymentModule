export const formatPan = (value) => {
    return value.replace(/[^\d]/g, '').replace(/\B(?=(?:\d{4})+(?!\d))/g, ' ')//расшифровать регулярку..
}