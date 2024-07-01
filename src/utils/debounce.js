export default function debounce(fn, duration = 1000) {
    let timer = null;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, duration);
    }
}