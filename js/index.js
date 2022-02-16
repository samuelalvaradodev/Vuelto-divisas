let precio1 = document.getElementById("caja1");
let precio2 = document.getElementById("caja2");
let precio3 = document.getElementById("caja3");
let dolar = document.getElementById("dolar");
let pago1 = document.getElementById('pago1');
let pago2 = document.getElementById('pago2');
let pago3 = document.getElementById('pago3');
let pago4 = document.getElementById('pago4');
let diferencia1 = document.getElementById('diferencia1');
let diferencia2 = document.getElementById('diferencia2');
let vueltoc1 = document.getElementById('vueltoc1');
let vueltoc2 = document.getElementById('vueltoc2');
let vueltoc3 = document.getElementById('vueltoc3');

precio1.addEventListener("keyup", () => {
    function dolares() {
        //precio3.value = Number(precio1.value) * dolar;

        let casa;
        let calculo = Number(precio1.value) * Number(dolar.value);
        casa = document.getElementById("caja3").value = calculo.toFixed(2);
        if (precio3.value == 0) {
            document.getElementById("caja3").value = '';
        }
    }
    dolares();

});

precio3.addEventListener("keyup", () => {
    function bolivares() {
        //precio1.value = Number(precio3.value).toFixed(2) / dolar;
        let calculo2 = Number(precio3.value) / Number(dolar.value);
        let casa2 = document.getElementById("caja1").value = calculo2.toFixed(2)
        if (precio3.value == 0) {
            document.getElementById("caja1").value = '';
        }
    }
    bolivares();
});

//tipo pago $



pago1.addEventListener('keyup', () => {
    function pago() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value);
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) - Number(converD);
        let Pago = document.getElementById("diferencia1").value = calculoPago1.toFixed(2);
        /*if (pago1.value == 0) {
            document.getElementById("diferencia1").value = '';
        }*/
    }
    pago();
});
pago2.addEventListener('keyup', () => {
    function pagoa() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value);
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) - Number(converD);
        let Pago = document.getElementById("diferencia1").value = calculoPago1.toFixed(2);
       /* if (pago2.value == 0) {
            document.getElementById("diferencia1").value = '';
        }*/
    }
    pagoa();
});
pago3.addEventListener('keyup', () => {
    function pagob() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value);
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) - Number(converD);
        let Pago = document.getElementById("diferencia1").value = calculoPago1.toFixed(2);
        /*if (pago3.value == 0) {
            document.getElementById("diferencia1").value = '';
        }*/
    }
    pagob();
});

pago4.addEventListener('keyup', () => {
    function pagoc() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value);
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) - Number(converD);
        let Pago = document.getElementById("diferencia1").value = calculoPago1.toFixed(2);
        /*if (pago4.value == 0) {
            document.getElementById("diferencia1").value = '';
        }*/
    }
    pagoc();
});

//// termina tipo pago $

// Pago tipo bs

pago1.addEventListener('keyup', () => {
    function pago2a() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value);
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) - Number(converD);
        let calculoPago2 = calculoPago1 * Number(dolar.value);
        let Pago = document.getElementById("diferencia2").value = calculoPago2.toFixed(2);
        /*if (pago1.value == 0) {
            document.getElementById("diferencia2").value = '';
        }*/
    }
    pago2a();
});

pago2.addEventListener('keyup', () => {
    function pago2b() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value);
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) - Number(converD);
        let calculoPago2 = calculoPago1 * Number(dolar.value);
        let Pago = document.getElementById("diferencia2").value = calculoPago2.toFixed(2);
        /*if (pago2.value == 0) {
            document.getElementById("diferencia2").value = '';
        }*/
    }
    pago2b();
});

pago3.addEventListener('keyup', () => {
    function pago2c() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value);
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) - Number(converD);
        let calculoPago2 = calculoPago1 * Number(dolar.value);
        let Pago = document.getElementById("diferencia2").value = calculoPago2.toFixed(2);
        /*if (pago3.value == 0) {
            document.getElementById("diferencia2").value = '';
        }*/
    }
    pago2c();
});

pago4.addEventListener('keyup', () => {
    function pago2d() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value);
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) - Number(converD);
        let calculoPago2 = calculoPago1 * Number(dolar.value);
        let Pago = document.getElementById("diferencia2").value = calculoPago2.toFixed(2);
        /*if (pago4.value == 0) {
            document.getElementById("diferencia2").value = '';
        }*/
    }
    pago2d();
});

//Vuelto comercio


vueltoc1.addEventListener('keyup', () => {
    function vueltob() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value)+ Number(vueltoc2.value) + Number(vueltoc3.value) ;
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) + Number(converD) + Number(vueltoc1.value);
        let Pago = document.getElementById("diferencia1").value = calculoPago1.toFixed(2);
        /*if (pago1.value == 0) {
            document.getElementById("diferencia1").value = '';
        }*/
    }
    vueltob();
});
vueltoc2.addEventListener('keyup', () => {
    function vueltoBsb() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value) + Number(vueltoc2.value) + Number(vueltoc3.value) ;
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) + Number(converD) + Number(vueltoc1.value);
        let Pago = document.getElementById("diferencia1").value = calculoPago1.toFixed(2);
        /*if (pago1.value == 0) {
            document.getElementById("diferencia1").value = '';
        }*/
    }
    vueltoBsb();
});
vueltoc3.addEventListener('keyup', () => {
    function vueltoBsc() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value) + Number(vueltoc2.value) + Number(vueltoc3.value) ;
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) + Number(converD) + Number(vueltoc1.value);
        let Pago = document.getElementById("diferencia1").value = calculoPago1.toFixed(2);
       /* if (pago1.value == 0) {
            document.getElementById("diferencia1").value = '';
        }*/
    }
    vueltoBsc();
});


//vuelto comercio bs

vueltoc1.addEventListener('keyup', () => {
    function vueltoa() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value)+ Number(vueltoc2.value) + Number(vueltoc3.value) ;
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) + Number(converD) + Number(vueltoc1.value);
        let calculoPago2 = calculoPago1 * Number(dolar.value);
        let Pago = document.getElementById("diferencia2").value = calculoPago2.toFixed(2);
        /*if (pago1.value == 0) {
            document.getElementById("diferencia2").value = '';
        }*/
    }
    vueltoa();
});

vueltoc2.addEventListener('keyup', () => {
    function pago2b() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value)+ Number(vueltoc2.value) + Number(vueltoc3.value) ;
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) + Number(converD)+ Number(vueltoc1.value);
        let calculoPago2 = calculoPago1 * Number(dolar.value);
        let Pago = document.getElementById("diferencia2").value = calculoPago2.toFixed(2);
        /*if (pago2.value == 0) {
            document.getElementById("diferencia2").value = '';
        }*/
    }
    pago2b();
});

vueltoc3.addEventListener('keyup', () => {
    function pago2c() {
        let convr =  Number(pago2.value) + Number(pago3.value) + Number(pago4.value)+ Number(vueltoc2.value) + Number(vueltoc3.value) ;
        let converD = Number(convr) / Number(dolar.value);
        let calculoPago1 = Number(precio1.value) - Number(pago1.value) + Number(converD)+ Number(vueltoc1.value);
        let calculoPago2 = calculoPago1 * Number(dolar.value);
        let Pago = document.getElementById("diferencia2").value = calculoPago2.toFixed(2);
        /*if (pago3.value == 0) {
            document.getElementById("diferencia2").value = '';
        }*/
    }
    pago2c();
});

function cambiarTasa(){
    
    div = document.getElementById('ocultar');
    div.style.display = '';
    div = document.getElementById('flotante');
    div.style.display = 'none';
}



function vueltoBs() {
    
    div = document.getElementById('nuevo');
    if (div.style.display = 'none'){
        div.style.display = '';
    }else {
        div.style.display = '';
    }

}

function cerrar() {
    let val = document.getElementById('dolar');
    if(val.value == ''){
        function ModifyPlaceHolder () 
{
let input = document.getElementById("dolar");
input.placeholder = "Agrega el valor del Dolar";
};

document.addEventListener("DOMContentLoaded", ModifyPlaceHolder());
    }else{
    div = document.getElementById('flotante');
    div.style.display = '';
    div = document.getElementById('ocultar');
    div.style.display = 'none';
}
}

function limpiar(){
    div = document.getElementById('nuevo');
    div.style.display = 'none';
    document.getElementById("caja1").value = "";
    document.getElementById("caja3").value = "";
    document.getElementById('pago1').value = "";
    document.getElementById('pago2').value = "";
    document.getElementById('pago3').value = "";
    document.getElementById('pago4').value = "";
    document.getElementById('diferencia1').value = "";
    document.getElementById('diferencia2').value = "";
    document.getElementById('vueltoc1').value = "";
}


