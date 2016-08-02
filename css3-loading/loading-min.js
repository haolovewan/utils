/**
 * Created by hand on 8/2 0002.
 */
(function (window) {
    window.onload = function () {
        //吃小球loading
        var eat_ball = document.querySelectorAll('.eat-ball')[0];
        if(eat_ball){
            eat_ball.innerHTML = "<div></div><div></div><div></div><div></div>";
        }
        //九宫格小球
        var ball_grid_pulse = document.querySelectorAll('.ball-grid-pulse')[0];
        ball_grid_pulse ? ball_grid_pulse.innerHTML = "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>" : '';
        //三个小点
        var ball_pulse = document.querySelectorAll('.ball-pulse')[0];
        ball_pulse ? ball_pulse.innerHTML = "<div></div><div></div><div></div>" : '';
    }
})(window);