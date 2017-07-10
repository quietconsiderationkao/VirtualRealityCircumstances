window.onload = function (e) {
    var video = document.getElementById('player');
    var range = document.querySelector('input');

    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(function (stream) {
        /* use the stream */
        video.srcObject = stream;
        video.onloadedmetadata = function (e) {
            video.play();
            video.muted = true;
        };
        // Create a MediaStreamAudioSourceNode
        // Feed the HTMLMediaElement into it
        var audioCtx = new AudioContext();
        audioCtx.sampleRate = 22050;

        var source = audioCtx.createMediaStreamSource(stream);
        // Create a biquadfilter
        var biquadFilter = audioCtx.createBiquadFilter();
        biquadFilter.type = "lowshelf";
        biquadFilter.frequency.value = 1000;
        biquadFilter.gain.value = range.value;
        // connect the AudioBufferSourceNode to the gainNode
        // and the gainNode to the destination, so we can play the
        // music and adjust the volume using the mouse cursor
        source.connect(biquadFilter);
        biquadFilter.connect(audioCtx.destination);
        // Get new mouse pointer coordinates when mouse is moved
        // then set new gain value
        range.oninput = function () {
            biquadFilter.gain.value = range.value;
        }

    }).catch(function (err) {
        /* handle the error */
    });
}