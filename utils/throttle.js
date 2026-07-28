/**
 * js节流
 * @param method
 * @param delay
 * @param duration
 * @return {Function}
 */
function throttle1(method, delay, duration) {
    var timer = null;
    var begin = new Date();
    return function () {
        var ctx = this, args = arguments;
        var current = new Date();
        clearTimeout(timer);
        if (current - begin >= duration) {
            method.apply(ctx, args);
            begin = current;
        } else {
            timer = setTimeout(function () {
                method.apply(ctx, args);
            }, delay);
        }
    }
}

// window.onscroll = throttle(scrollFn, 100, 500)

/**
 * js节流
 * @param method
 * @param delay
 * @return {Function}
 */
function throttle(method, delay) {
    var timer = null;
    var begin = new Date();
    return function () {
        var ctx = this, args = arguments;
        var current = new Date();
        var remaining = delay - (current - begin);
        clearTimeout(timer);
        if (remaining <= 0) {
            method.apply(ctx, args);
            begin = new Date();
        } else {
            timer = setTimeout(function () {
                method.apply(ctx, args);
            }, remaining);
        }
    }
}

