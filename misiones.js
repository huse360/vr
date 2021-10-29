AFRAME.registerComponent('misiones', {


    init: function () {

      let estado = 4;
      let Stat = 0;
      
        /*    VARIABLES QUE LLAMAN AL SONIDO */


      var bienvenida = document.getElementById('sound1');
      var introduccion = document.getElementById('sound2');
      var misionbanco = document.getElementById('sound3');
      var misioncumplidabanco = document.getElementById('sound4');
      var misioncumplidabanco2 = document.getElementById('sound5');
      var recordatorioBanco = document.getElementById('sound6');
      var impresoraActa = document.getElementById('sound7');
      var impresoraCompletado = document.getElementById('sound8');
      var impresoraNoMision = document.getElementById('sound9');
      var actaPosesion = document.getElementById('sound10');
      var actaRadicada = document.getElementById('sound11');
      var actaNoImpresa = document.getElementById('sound12-');
      var cComercioNoMision = document.getElementById('sound13');
      var entregaActa = document.getElementById('sound14');
      var recordatorioActa = document.getElementById('sound15');
      var bancariaPosesion = document.getElementById('sound16');
      var bancoNomision = document.getElementById('sound17');
      var misionDian = document.getElementById('sound18');
      var recordatorioDian = document.getElementById('sound19');
      var facturaPos = document.getElementById('sound20');
      var dianNoMision = document.getElementById('sound21');
      var misionComercio = document.getElementById('sound22');
      var dianPosec = document.getElementById('sound23');
     
      
      var iniciar = document.getElementById('iniciar');  

        /* FUNCIONES DE SONIDO */

        function playsonidobienvenida() {
          bienvenida.components.sound.playSound();
          
        }

        function playsonidointroduccion() {
          introduccion.components.sound.playSound();
          
        }
  

        function playsonidomisionbanco() {
          misionbanco.components.sound.playSound();
          
        }

        function playMisionDian() {
          misionDian.components.sound.playSound();
          
        }

        function playMisionComercio() {
          misionComercio.components.sound.playSound();
          
        }
        


        /* FUNCIONES DE CAMBIO DE ESTADO */

        function mision5() {
          estado=5
          
        }

        function mision6() {
          estado=6
          
        }

        function mision7() {
          estado=7
          
        }


        /* FUNCIONES DE HABLA ACTIVA */

        function hablar() {

          Stat=0
          
        }
        /* FUNCION DESVANECIDO DEL BOTON */
        
        function botondesvanecido() {

          iniciar.setAttribute('visible',false)
          
        }
      
        iniciar.addEventListener('click', function() {
 
          if (Stat==0) {
            Stat=1
            setTimeout(hablar,'20000')
            setTimeout(botondesvanecido,'1400')
      
            setTimeout(playsonidobienvenida,'3500')

            setTimeout(playsonidointroduccion,'7500')

            setTimeout(playMisionComercio,'13000')
          
            setTimeout( mision5,'18000')
            setTimeout(console.log('pasas a la mision 5'),'18000')
          
          }

        }); 

      /*  ITERACCION IMPRESORA */

      var impresora = document.getElementById('impresora');
      var ccomercio = document.getElementById('ccomercio');

      impresora.addEventListener('click', function() {

        console.log('Usaste la impresora');
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'5000')
          if (estado==5) {

            if (ccomercio.getAttribute('visible')==true) {
              console.log('ya imprimiste el certificado de la camara de comercio');
              impresoraCompletado.components.sound.playSound();
            }

           else {
              ccomercio.setAttribute('visible',true);
              impresoraActa.components.sound.playSound();
              console.log('Acabas de imprimir el certificado de la camara de comercio, ve a radicarlo');

            } 
          
          }
          
          else {
            console.log('Te quedas pensando que imprimir pero no se te ocurre nada de momento')
            impresoraNoMision.components.sound.playSound();
          }
        } 
      })



      /*  ITERACCION FUNCIONARIO */

      var funcionario = document.getElementById('funcionario');
      var radicado = document.getElementById('radicado');

      funcionario.addEventListener('click', function() {
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'5000')
          console.log('hablaste con el funcionario');
        
          if (estado==5) {

            if (ccomercio.getAttribute('visible')==true) {
            
              if (radicado.getAttribute('visible')==true) {
                console.log('Ya te han radicado el certificado, llevaselo a tu jefe');
                actaPosesion.components.sound.playSound();
              }

              else {
                radicado.setAttribute('visible',true);
                actaRadicada.components.sound.playSound();
                console.log('Acabas de radicar el certificado en la camara de comercio, entregaselo a tu jefe');
              }

            }
            else { 
              console.log('Debes imprimir primero el certificado para venir a radicarlo');
              actaNoImpresa.components.sound.playSound();
            }
          
          }
          
          else {
            console.log('el funcionario te queda mirando y el silencio incomodo se apodera de la oficina, talvez ya has termido lo que tenias que hacer aca')
            cComercioNoMision.components.sound.playSound();
          }
        } 

      })








        

      /*    INTERACCION BANQUERO */

      var banquero = document.getElementById('banquero');
      var cbancario = document.getElementById('certificado-banco');
      
      
        
        

      banquero.addEventListener('click', function() {
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'5000')
          console.log('hablaste con el funcionario del banco');
        
          console.log(cbancario.getAttribute('visible'));


          if (estado===6) {

            if (cbancario.getAttribute('visible')==true) {
              console.log('ya tienes en tu poder el certificado, no tienes que haces nada mas aca, largo');
              bancariaPosesion.components.sound.playSound();
            }

            else {
              cbancario.setAttribute('visible',true);
              misioncumplidabanco.components.sound.playSound();
              console.log(misioncumplidabanco);

            }
          
          }
          
          else {
            console.log('te queda mirando pero no le dices nada, el silencio incomodo dice que no tienes que hacer nada por aca')
            bancoNomision.components.sound.playSound();
          }

        }  

      })

       /*    INTERACCION ASESOR */

       var asesor = document.getElementById('asesor');
       var factura = document.getElementById('factura-dian');
       
       
         
         
 
       asesor.addEventListener('click', function() {
         if (Stat==0) {
           Stat=1
           setTimeout(hablar,'5000')
           console.log('hablaste con el asesor de la  Dian');
         
           console.log(factura.getAttribute('visible'));
 
 
           if (estado===7) {
 
             if (factura.getAttribute('visible')==true) {
               console.log('ya tienes en tu poder la factura de la Dian, no tienes que haces nada mas aca');
               dianNoMision.components.sound.playSound();
             }
 
             else {
               factura.setAttribute('visible',true);
               facturaPos.components.sound.playSound();
                
             }
           
           }
           
           else {
             console.log('te queda mirando pero no le dices nada, el silencio incomodo dice que no tienes que hacer nada por aca')
             dianPosec .components.sound.playSound();
           }
 
         }  
 
       })

      /* INTERACCION JEFE */

      var jefe = document.getElementById('jefe');
      

      jefe.addEventListener('click', function() {
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'5000')
          console.log('hablas con el jefe');
          
          /* MISION 5 */

          if (estado===5) {

            /* se cumple y pasa a a la siguiente mision */

            if (radicado.getAttribute('visible')==true) {
              console.log('le dices al jefe que hiciste la mision CAMARA-COMERCIO');
            
              entregaActa.components.sound.playSound();
              setTimeout( mision6,'3500',console.log('pasas a la mision 6'))
            
              setTimeout(playsonidomisionbanco,'5500')
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              recordatorioActa.components.sound.playSound();
            }
          }




           /* MISION 6 */

          if (estado===6) {

            /* se cumple y pasa a a la siguiente mision */

            if (cbancario.getAttribute('visible')==true) {
              console.log('le entregas el Certificado Bancario al jefe');
              misioncumplidabanco2.components.sound.playSound();
              setTimeout( mision7,'3500',console.log('pasas a la mision 7'))

              setTimeout(playMisionDian,'5500')
            }

            /* no se cumple y sigue en la mision actual */

            else {
              console.log('no has entregado nada, te faltan tareas para completar la mision');
            
              recordatorioBanco.components.sound.playSound();
            }
          }


          /* MISION 7 */

          if (estado===7) {

            /* se cumple y finaliza simulacion */

            if (factura.getAttribute('visible')==true) {
              console.log('le entregas el Certificado Bancario al jefe');
              misioncumplidabanco2.components.sound.playSound();
              /* setTimeout( mision7,'3500', */console.log('pasas a la mision 7')

              /*  setTimeout(,'5500') */
            }

            /* no se cumple y sigue en la mision actual */

            else {
              console.log('no has entregado nada, te faltan tareas para completar la mision');
            
              recordatorioDian.components.sound.playSound();
            }
          }
        }  
      })


         


          

    },

    }
);
