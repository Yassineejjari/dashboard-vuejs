export const usePercentage = (_a, _total) => {
    return `${(_a / _total * 100).toFixed(1)}%`
}