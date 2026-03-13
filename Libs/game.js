let WT = 0;//721; 
let HT = 0;//1288; 

//let game = document.getElementById("unity-container");
//WT = game.clientWidth;
//HT = game.clientHeight;

//setTimeout(resize, 100);
//window.addEventListener('resize', resize);

//let buttons = game.getElementsByTagName("button");             //находим кнопку предупреждения о нестабильной работе WebGL 
//if (buttons && buttons[0])
//    buttons[0].click();

function resize() {
    let sw = window.innerWidth / WT;
    let sh = window.innerHeight / HT;
    let SE = Math.min(sw, sh);

    let w = WT * SE;
    let h = HT * SE;

    let OXE = (window.innerWidth - w) / 2;
    let OYE = (window.innerHeight - h) / 2;

    game.style.transform = `scale(${SE})`

    game.style.marginLeft = OXE + "px";
    game.style.marginTop = OYE + "px";
}


/** Размер баннера. */
window.BannerSize = {
    /** Зависит от размера вида. */
    AUTO : "100%_90px",
    /** Широкий (примерно 728x90) */
    WIDE : "728px_90px",
    /** Узкий (пимерно 320x50) */
    NARROW : "320px_50px",
    /** Квадратный (размер 300x250) */
    SQUARE : "300px_250px",
}


window.Gravity = {};
    /** Constant indicating that no gravity has been set **/
Gravity.NO_GRAVITY = 0x0000;

    /** Raw bit indicating the gravity for an axis has been specified. */
Gravity.AXIS_SPECIFIED = 0x0001;

    /** Raw bit controlling how the left/top edge is placed. */
Gravity.AXIS_PULL_BEFORE = 0x0002;
    /** Raw bit controlling how the right/bottom edge is placed. */
Gravity.AXIS_PULL_AFTER = 0x0004;
    /** Raw bit controlling whether the right/bottom edge is clipped to its
     * container, based on the gravity direction being applied. */
Gravity.AXIS_CLIP = 0x0008;

    /** Bits defining the horizontal axis. */
Gravity.AXIS_X_SHIFT = 0;
    /** Bits defining the vertical axis. */
Gravity.AXIS_Y_SHIFT = 4;

    /** Push object to the top of its container, not changing its size. */
Gravity.TOP = (Gravity.AXIS_PULL_BEFORE | Gravity.AXIS_SPECIFIED) << Gravity.AXIS_Y_SHIFT;
    /** Push object to the bottom of its container, not changing its size. */
Gravity.BOTTOM = (Gravity.AXIS_PULL_AFTER | Gravity.AXIS_SPECIFIED) << Gravity.AXIS_Y_SHIFT;
    /** Push object to the left of its container, not changing its size. */
Gravity.LEFT = (Gravity.AXIS_PULL_BEFORE | Gravity.AXIS_SPECIFIED) << Gravity.AXIS_X_SHIFT;
    /** Push object to the right of its container, not changing its size. */
Gravity.RIGHT = (Gravity.AXIS_PULL_AFTER | Gravity.AXIS_SPECIFIED) << Gravity.AXIS_X_SHIFT;

    /** Place object in the vertical center of its container, not changing its
     *  size. */
Gravity.CENTER_VERTICAL = Gravity.AXIS_SPECIFIED << Gravity.AXIS_Y_SHIFT;
    /** Grow the vertical size of the object if needed so it completely fills
     *  its container. */
Gravity.FILL_VERTICAL = Gravity.TOP | Gravity.BOTTOM;

    /** Place object in the horizontal center of its container, not changing its
     *  size. */
Gravity.CENTER_HORIZONTAL = Gravity.AXIS_SPECIFIED << Gravity.AXIS_X_SHIFT;
    /** Grow the horizontal size of the object if needed so it completely fills
     *  its container. */
Gravity.FILL_HORIZONTAL = Gravity.LEFT | Gravity.RIGHT;

    /** Place the object in the center of its container in both the vertical
     *  and horizontal axis, not changing its size. */
Gravity.CENTER = Gravity.CENTER_VERTICAL | Gravity.CENTER_HORIZONTAL;

    /** Grow the horizontal and vertical size of the object if needed so it
     *  completely fills its container. */
Gravity.FILL = Gravity.FILL_VERTICAL | Gravity.FILL_HORIZONTAL;

    /** Flag to clip the edges of the object to its container along the
     *  vertical axis. */
Gravity.CLIP_VERTICAL = Gravity.AXIS_CLIP << Gravity.AXIS_Y_SHIFT;

    /** Flag to clip the edges of the object to its container along the
     *  horizontal axis. */
Gravity.CLIP_HORIZONTAL = Gravity.AXIS_CLIP << Gravity.AXIS_X_SHIFT;
