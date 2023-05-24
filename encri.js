function encriptar() {
    let text = document.getElementById("texto").value; 
    
    document.getElementById("textoEnc").innerHTML =
    
    text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    const msj = document.getElementById("imga"); 
    let bt3 = document.getElementById("bt3");
    if (textoEnc.length === 0) {
        msj.style.display = 'block';
        bt3.style.display ="none"
    } else {
        msj.style.display = 'none';
    
    
    }
    console.log(textoEnc)
 
  }