import FesAudio from './FesAudio'


const media=document.getElementById('media');
let _audio = new FesAudio(media);
// let _audio = new FesAudio();

document.getElementById("start_btn").addEventListener('click',()=>{_audio.start()})
document.getElementById("pause_btn").addEventListener('click', ()=>{_audio.pause()});
document.getElementById("getPitch").addEventListener('click', ()=>{console.log(_audio.getPitch())});
document.getElementById("getLoudness").addEventListener('click', ()=>{console.log(_audio.getLoudness())});

_audio.on('success', function () {
    // setInterval(function () {
    let t1 = new Date().getTime();
    console.log('FesAudio::pitch', _audio.getPitch(), new Date().getTime() - t1);
    console.log('FesAudio::loundness', _audio.getLoudness(), new Date().getTime() - t1);
    // }, 200);
});

_audio.on('failed', function (e) {
    console.log(e);

});


