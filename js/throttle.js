export function throttle(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function(e) {
        if (running) { return; }
        running = true;
        requestAnimationFrame(function() {
            obj.dispatchEvent(new CustomEvent(name, {}));
            running = false;
        });
    };
    obj.addEventListener(type, func);
    return {type: type, func: func};
};
