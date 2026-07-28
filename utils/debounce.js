/**
 * 函数防抖
 * @param method
 * @param delay
 * @return {Function}
 */
function debounce(method, delay) {
    let timer = null;
    return function (...agrs) {
        var ctx = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            console.log(this)
            method.apply(ctx, args);
        }, delay);
    }
}
// const f = debounce(function (...args) {
//   console.log("args", args);
// }, 100)
