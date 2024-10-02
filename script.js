let unidadeSegundo = document.getElementById("unidadeSegundo")
let dezenaSegundo = document.getElementById("dezenaSegundo")
let unidadeMinuto = document.getElementById("unidadeMinuto")
let dezenaMinuto = document.getElementById("dezenaMinuto")
let doisPontos = document.getElementById("doisPontos")
let unidadeHora = document.getElementById("unidadeHora")
let dezenaHora = document.getElementById("dezenaHora")
let uniSeg = 0
let dezSeg = 0
let uniMin = 0
let dezMin = 0
let uniHora = 0
let dezHora = 0
let pisca = 0
let cont
let efeito

//Inicializa a cor
doisPontos.style.color = "#027FF7"

function aumentaHora() {
    uniHora++
    if (dezHora < 1) {
        if (uniHora > 9) {
            uniHora = 0
            dezHora++
            dezenaHora.textContent = dezHora
        }
    }
    else if (dezHora === 1) {
        if (uniHora > 2) {
            uniHora = 1
            dezHora = 0
            dezenaHora.textContent = dezHora
        }
    }
    unidadeHora.textContent = uniHora
}

function diminuiHora() {
    if (uniHora > 0) {
        uniHora--
        if (uniHora === 0) {
            if (dezHora === 0) {
                dezHora = 1
                uniHora = 2
                dezenaHora.textContent = dezHora
            }
        }
        unidadeHora.textContent = uniHora
    }
    else if (uniHora === 0) {
        if (dezHora === 1) {
            dezHora = 0
            uniHora = 9
            unidadeHora.textContent = uniHora
            dezenaHora.textContent = dezHora
        }
    }
}

function aumentaMinuto() {
    uniMin++
    if (dezMin < 5) {
        if (uniMin > 9) {
            uniMin = 0
            dezMin++
            dezenaMinuto.textContent = dezMin
        }
    }
    else if (dezMin === 5) {
        if (uniMin > 9) {
            uniMin = 0
            dezMin = 0
            dezenaMinuto.textContent = dezMin
        }
    }
    unidadeMinuto.textContent = uniMin
}

function diminuiMinuto() {
    if (uniMin > 0) {
        uniMin--
        unidadeMinuto.textContent = uniMin
    }
    else if (uniMin === 0) {
        if (dezMin > 0) {
            dezMin--
            uniMin = 9
            unidadeMinuto.textContent = uniMin
            dezenaMinuto.textContent = dezMin
        }
        else if (dezMin === 0) {
            dezMin = 5
            uniMin = 9
            unidadeMinuto.textContent = uniMin
            dezenaMinuto.textContent = dezMin
        }
    }
}

function iniciar() {
    //Definindo a hora inicial
    // dezenaMinuto.textContent = dezMin
    // unidadeMinuto.textContent = uniMin
    // unidadeHora.textContent = uniHora
    // dezenaHora.textContent = dezHora
efeito = setInterval(function () {
    //Coloca efeito de pisca
    if (pisca == 0) {
        doisPontos.style.color = "#191970"
        pisca++
    }
    else {
        doisPontos.style.color = "#027FF7"
        pisca--
    }    
}, 500);

    //Realiza a contagem das horas
    cont = setInterval(function () {
        uniSeg++        

        if (uniSeg > 9) {
            uniSeg = 0
            dezSeg++

            if (dezSeg > 5) {
                dezSeg = 0
                uniMin++

                if (uniMin > 9) {
                    uniMin = 0
                    dezMin++

                    if (dezMin > 5) {
                        dezMin = 0
                        uniHora++

                        if (dezHora < 1) {
                            if (uniHora > 9) {
                                uniHora = 0
                                dezHora++
                            }
                        }
                        else {
                            if (uniHora > 2) {
                                uniHora = 0
                                dezHora++
                            }
                        }

                        if (dezHora > 1) {
                            dezHora = 0
                            uniHora = 1
                        }
                        dezenaHora.textContent = dezHora
                    }
                    unidadeHora.textContent = uniHora
                }
                dezenaMinuto.textContent = dezMin
            }
            unidadeMinuto.textContent = uniMin
        }
        dezenaSegundo.textContent = dezSeg
        //}
        unidadeSegundo.textContent = uniSeg        
    }, 1000);
}


function parar() {
    clearInterval(cont)
    clearInterval(efeito)
    uniSeg = 0
    dezSeg = 0
    uniMin = 0
    dezMin = 0
    uniHora = 1
    dezHora = 0
    pisca = 0
    unidadeSegundo.textContent = uniSeg
    dezenaSegundo.textContent = dezSeg
    unidadeMinuto.textContent = uniMin
    dezenaMinuto.textContent = dezMin
    unidadeHora.textContent = uniHora
    dezenaHora.textContent = dezHora
    //Inicializa a cor
    doisPontos.style.color = "#027FF7"
}

