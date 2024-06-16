document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    var button = document.getElementById('myButton');

    video.addEventListener('timeupdate', function() {
        var percentage = (video.currentTime / video.duration) * 100;

        if (percentage >= 75) {
            button.style.display = 'block';
        }
    });
});
