
let texto1=document.querySelector('#texto1');
texto1.innerHTML="Calculadora"
let operacion=0;
let sumar=0;
let valorO=0;
let operacionActual='';

function valor(){
    let entrada=parseInt(document.querySelector('#entrada').value);
    
    return entrada;    
}



function suma(){
    operacion+=valor();
    console.log(operacion);  
    operacionActual='suma'; 
    limpiarCaja();


}


function resta(){ 
    resultado();  
    if(valor()!=null){
        limpiarCaja();
        let nuevoNumero=valor();
        operacionActual='resta';
    }else{
        operacion-= valor();
        console.log(operacion);
        operacionActual='resta';
        limpiarCaja();
    }
   
}
function multiplicar(){    
    operacion= operacion*valor();
    console.log(operacion);
    operacionActual='multiplicar';
    limpiarCaja();
}
function dividir(){
    
    operacion= operacion/valor();
    operacionActual='dividir';
    console.log(operacion);
    limpiarCaja();
}
function limpiarCaja(){
    document.querySelector('#entrada').value='';
}
function resultado(){
    console.log("resultado");
    let ultimoValor=valor();
    switch (operacionActual){
        case 'suma':
            operacion+=ultimoValor; 
            document.querySelector('#entrada').value='';           
            break;
        case 'resta':
            operacion-=ultimoValor;
            document.querySelector('#entrada').value='';
            
            break;
        case 'multiplicar':
            operacion=operacion*ultimoValor;
            console.log(operacion);
            break;
        case 'dividir':
            operacion=operacion/ultimoValor;
            console.log(operacion);
            break;
        default:
            operacion=ultimoValor;
    }    
    document.querySelector('#entrada').value=operacion;
           
    console.log(operacion)
}
/*function resultado(){
    console.log("resultado");
    let ultimoValor=valor();
    switch (operacionActual){
        case 'suma':
            operacion+=ultimoValor;            
            break;
        case 'resta':
            operacion-=ultimoValor;
            console.log(operacion);
            break;
        case 'multiplicar':
            operacion=operacion*ultimoValor;
            console.log(operacion);
            break;
        case 'dividir':
            operacion=operacion/ultimoValor;
            console.log(operacion);
            break;
        default:
            operacion=ultimoValor;
    }    
    // document.querySelector('#entrada').value=operacion;
    // operacion=0;
    console.log(operacion)
}*/