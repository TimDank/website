document.addEventListener('DOMContentLoaded', () => {

    var isDark = true;

    var darkModeIcon = document.getElementById('dark-mode-icon');

    darkModeIcon.onclick = function () {
        var body = document.querySelector('body');
        if (isDark) {
            darkModeIcon.style.color = 'black';
            body.style.background = '#3d3d3d';
        } else {
            darkModeIcon.style.color = 'white';
            body.style.background = 'white';
        }

        isDark = !isDark;
    }
});
