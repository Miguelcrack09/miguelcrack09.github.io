function suma(){
var a;
var b;
var suma;

a = parseInt(prompt("Por favor ingresar el primer valor"));
b = parseInt(prompt("Por favor ingresar el segundo valor"));

suma = a+b;

alert("El resultado es: " + suma);
}

function opBasicas(){
    var A;
    var B;
    var Suma;
    var Resta;
    var Mult;
    var Div;

    A = parseInt(prompt("Por favor ingresar el primer valor"));
    B = parseInt(prompt("Por favor ingresar el segundo valor"));

    Suma = A+B;
    Resta = A-B;
    Mult = A*B;
    Div = A/B;
    alert("El resultado de la suma es: " + Suma+" La resta es: "+Resta+" La multiplicacion es: "+Mult+" La division es: "+Div);
}

function nMayor(){
    var a;
    var b;        
    a = parseFloat(prompt("Por favor ingresar el primer valor"));
    b = parseFloat(prompt("Por favor ingresar el segundo valor"));

    if(a==b){
        alert("Los valores ingresados son iguales");
    }else if(a>b){
        alert("El numero mayor es: "+a);
    }else{
        alert("El numero mayor es: "+b);
    }

}

function nMenor(){
    var a;
    var b;  
    var c;      
    a = parseFloat(prompt("Por favor ingresar el primer valor"));
    b = parseFloat(prompt("Por favor ingresar el segundo valor"));
    c = parseFloat(prompt("Por favor ingresar el tercer valor"));
    if(a==b & a==c){
        alert("Los valores ingresados son iguales");
    }else if(a<b & a<c){
        alert("El numero mayor es: "+a);
    }else if(b<a & b<c){
        alert("El numero mayor es: "+b);
    }else if(c<a & c<b){
        alert("El numero mayor es: "+c);
    }  
    else{
        alert("Los valores ingresados no se han podido validar");
    }
}

function nPar(){
    var a;      
    a = parseFloat(prompt("Por favor ingresar el primer valor"));
    if(a%2==0){
        alert("El  numero es par");
    }else{
        alert("El numero es impar");
    }
}

function nCuadrado(){
    var a;      
    a = parseFloat(prompt("Por favor ingrese un valor"));
    alert("El cuadrado de "+a+" es: " +a*a);
}

function aTriangulo(){
    var a;
    var b;  
    var c;      
    a = parseFloat(prompt("Por favor ingresar la base del triangulo"));
    b = parseFloat(prompt("Por favor ingresar la altura del triangulo"));
    c = (a*b)/2;
    alert("El Area del triangulo es: "+c);

}

function mConversion(){
    var a;
    var b;        
    a = parseFloat(prompt("Por favor ingresar el valor en metros"));
    
    b=a*100;

    alert("El valor de "+a+" en centimetros es "+b);
    
}

function aNacimiento(){
    var edad;
    var resultado;
    edad = parseInt(prompt("Por favor ingrese su edad"));
    resultado = 2022-edad;
    alert("Su año de nacimiento es: "+resultado);
}

function iBanco(){
    var n;
    var c;
    var p;
    var p_a;
    var suma;

    c = parseFloat(prompt("Por favor ingrese su capital"));
    n = parseFloat(prompt("Por favor ingrese cuantos años desea contar"));
    p = ((c*2)/100)*(12*n);
    p_a = p/n;
    suma = c+p;
    alert("Su capital ingresado fue: "+c+" Su ganancia sera: "+p+" Para un total de: "+suma);
}

function cPromedio(){
    var a;
    var b;
    var c;
    var d;
    var e;
    var promedio; 
    a = parseFloat(prompt("Por favor ingrese la primera nota"));
    b = parseFloat(prompt("Por favor ingrese la segunda nota"));
    c = parseFloat(prompt("Por favor ingrese la tercera nota"));
    d = parseFloat(prompt("Por favor ingrese la cuarta nota"));
    e = parseFloat(prompt("Por favor ingrese la quinta nota"));

    if(a<=5 & b<=5 & c<=5 & d<=5 & e<=5 & a>=1 & b>=1 & c>=1 & d>=1 & e>=1){
        promedio=parseFloat((a+b+c+d+e)/5);
        if(promedio<=2.9){
            alert("El estudiante reprobo con: "+promedio);
        }else{
        alert("El Estudiante aprobo con: "+promedio);
        }
    }else{
        alert("Uno de los valores ingresados no esta dentro de los parametros de 1 a 5 ");
    }
}

function fDescuentos(){
    var a=4500;
    var d;
    var valor;
    var valor_descuento;
    var p;
    p = parseFloat(prompt("Por favor ingrese cuanto peso su compra"));
    if(p>0 & p<=2){
        valor = a*p;
        alert("Por el momento no tiene ningun descuento, por favor sigue comprando");
        alert("su valor a pagar es: "+valor);
    }else if(p>=3 & p<=5){
        valor = a*p;
        d = valor*0.1;   
        valor_descuento = valor-d;     
        alert("El total a pagar es de: "+valor+" Su descuento es de: "+d+" Para un total de: "+valor_descuento);
    }else if(p>=6 & p<=10){
        valor = a*p;
        d = valor*0.15;   
        valor_descuento = valor-d;     
        alert("El total a pagar es de: "+valor+" Su descuento es de: "+d+" Para un total de: "+valor_descuento);
    }else if(p>10){
        valor = a*p;
        d = valor*0.2;   
        valor_descuento = valor-d;     
        alert("El total a pagar es de: "+valor+" Su descuento es de: "+d+" Para un total de: "+valor_descuento);
    }  
    else{
        alert("El valor ingresado no es valido");
    }
}