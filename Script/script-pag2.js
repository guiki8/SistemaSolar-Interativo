function func_escala() {
    document.getElementById('scale_button_on').style.display = 'none'
    document.getElementById('scale_button_off').style.display = 'block'
    document.getElementById('scale_ball').style.marginLeft = '50%'

    document.getElementById('mercurio').style.animationDuration='0.5s'
    document.getElementById('venus').style.animationDuration='1.25s'
    document.getElementById('terra').style.animationDuration='2s'
    document.getElementById('marte').style.animationDuration='3.7s'
    document.getElementById('jupiter').style.animationDuration='23.7s'
    document.getElementById('saturno').style.animationDuration='59s'
    document.getElementById('urano').style.animationDuration='168s'
    document.getElementById('netuno').style.animationDuration='329.5s'
}
function func_escala_back() {
    document.getElementById('scale_button_on').style.display = 'block'
    document.getElementById('scale_button_off').style.display = 'none'
    document.getElementById('scale_ball').style.marginLeft = '0'

    document.getElementById('mercurio').style.animationDuration='5s'
    document.getElementById('venus').style.animationDuration='5s'
    document.getElementById('terra').style.animationDuration='5s'
    document.getElementById('marte').style.animationDuration='5s'
    document.getElementById('jupiter').style.animationDuration='5s'
    document.getElementById('saturno').style.animationDuration='5s'
    document.getElementById('urano').style.animationDuration='5s'
    document.getElementById('netuno').style.animationDuration='5s'
}