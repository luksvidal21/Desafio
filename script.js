




let calcular=document.getElementById('calcular')
calcular.addEventListener('click',calculaSomatoria)
function calculaSomatoria(){
    let valor=document.getElementById('valor').value
    let resultado=document.getElementById('resultado').value    
    console.log(valor)
    n=valor
    soma=0
    for(i=1;i<n;i++){
        if(i%3==0 | i%5==0){        
            soma+=i
        }
    }
    console.log(soma)
    resultado.textContent=soma  
    
}

resultado.textContent=soma  
