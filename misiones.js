AFRAME.registerComponent('misiones', {


    init: function () {

      let estado = 5;
      
      
     
     

      function objectToPos(posObject) {
   
        return (posObject.x) + " " + (posObject.y) + " "  + (posObject.z)
        
      }

      /* variables de posicion actualmente sin uso, mirar para interacciones nuevas en misiones */
      var teleport0 = document.getElementById('teleport0')
      var teleport1 = document.getElementById('teleport1')
      var teleport2 = document.getElementById('teleport2')
      var teleport3 = document.getElementById('teleport3')
      var teleport4 = document.getElementById('teleport4')
      var teleport5 = document.getElementById('teleport5')
      var teleport6 = document.getElementById('teleport6')
      var teleport7 = document.getElementById('teleport7')
      var teleport8 = document.getElementById('teleport8')
      var teleport9 = document.getElementById('teleport9')
      var cam = document.getElementById('cameraRig')

      var Posteleport0 = objectToPos(teleport0.getAttribute('position'));
      var Posteleport1 = objectToPos(teleport1.getAttribute('position'));
      var Posteleport2 = objectToPos(teleport2.getAttribute('position'));
      var Posteleport3 = objectToPos(teleport3.getAttribute('position'));
      var Posteleport4 = objectToPos(teleport4.getAttribute('position'));
      var Posteleport5 = objectToPos(teleport5.getAttribute('position'));
      var Posteleport6 = objectToPos(teleport6.getAttribute('position'));
      var Posteleport7 = objectToPos(teleport7.getAttribute('position'));
      var Posteleport8 = objectToPos(teleport8.getAttribute('position'));
      var Posteleport9 = objectToPos(teleport9.getAttribute('position'));
      var Poscam = objectToPos(cam.getAttribute('position'));



      
          /*    VARIABLES QUE LLAMAN AL SONIDO */


      var mySound1 = document.getElementById('sound1');
      var mySound2 = document.getElementById('sound2');
      var mySound3 = document.getElementById('sound3');
      var misioncumplidabanco = document.getElementById('sound4');
      var misioncumplidabanco2 = document.getElementById('sound5');
      var scene = document.querySelector('a-scene');  

        /* FUNCIONES DE SONIDO */

        function playsonidobienvenida() {
          mySound1.components.sound.playSound();
          
        }
        function stopsonidobienvenida() {
  
          mySound1.components.sound.stopSound();
          
        }
        function playsonidointroduccion() {
          mySound2.components.sound.playSound();
          
        }
  
        function stopsonidobintroduccion() {
          mySound2.components.sound.stopSound();
          
        }

        function playsonidomisionbanco() {
          mySound3.components.sound.playSound();
          
        }
        function stopsonidomisionbanco() {
  
          mySound3.components.sound.stopSound();
          
        }


        /* FUNCIONES DE CAMBIO DE ESTADO */
        
        function mision6() {
          estado=6
          
        }
        function mision7() {
          estado=7
          
        }


      
        scene.addEventListener('loaded', function () {
 
      
          setTimeout(playsonidobienvenida,'2500', console.log('me reproduje 1'))


      
          setTimeout(stopsonidobienvenida,'0',console.log('pare 1'))


     
          setTimeout(playsonidointroduccion,'8500',console.log('me reproduje'))


      
          setTimeout(stopsonidobintroduccion,'0',console.log('pare'))
      
      

          /*setTimeout(playsonidomisionbanco,'15500',console.log('me reproduje'))*/


      
          /* setTimeout(stopsonidomisionbanco,'0',console.log('pare')) */
 

        }); 
      /*  ITERACCION IMPRESORA */

      var impresora = document.getElementById('impresora');
      var ccomercio = document.getElementById('ccomercio');

      impresora.addEventListener('click', function() {

        console.log('Usaste la impresora');
        
        if (estado==5) {

          if (ccomercio.getAttribute('visible')==true) {
            console.log('ya imprimiste el certificado de la camara de comercio');
            /* OJO agregar sonido de que ya tienes el certificado camara de comercio */

          }

          else {
            ccomercio.setAttribute('visible',true);
            /* OJO AGREGAR SONIDO DE IMPRESION DEL CERTIFICADO DE CAMARA DE COMERCIO */
            console.log('Acabas de imprimir el certificado de la camara de comercio, ve a radicarlo');

          }
          
        }
          
        else {
          console.log('Te quedas pensando que imprimir pero no se te ocurre nada de momento')

        }
          
      })








        

      /*    INTERACCION BANQUERO */

      var banquero = document.getElementById('banquero');
      var cbancario = document.getElementById('certificado-banco');
      
      
        
        

      banquero.addEventListener('click', function() {

        console.log('hablaste con el funcionario del banco');
        
        console.log(cbancario.getAttribute('visible'));


        if (estado===6) {

          if (cbancario.getAttribute('visible')==true) {
            console.log('ya tienes en tu poder el certificado, no tienes que haces nada mas aca, largo');
            /* OJO agregar sonido de que ya tienes el certificado bancario */

          }

          else {
            cbancario.setAttribute('visible',true);
            misioncumplidabanco.components.sound.playSound();
            console.log(misioncumplidabanco);

          }
          
        }
          
        else {
          console.log('te queda mirando pero no le dices nada, el silencio incomodo dice que no tienes que hacer nada por aca')

        }
          
      })

      /* INTERACCION JEFE */

      var jefe = document.getElementById('jefe');
      

      jefe.addEventListener('click', function() {

        console.log('hablas con el jefe');
          
          /* MISION 5 */

        if (estado===5) {

          /* se cumple y pasa a a la siguiente mision */

          if (ccomercio.getAttribute('visible')==true) {
            console.log('le dices al jefe que hiciste la mision CAMARA-COMERCIO');
            /* OJO se inserta el sonido de exito en mision 5 */
            setTimeout( mision6,'3500',console.log('pasas a la mision 6'))
            /* OJO Se inserta la informacion de la mision 6 y sus requerimientos */

          }

            /* no se cumple y sigue en la mision actual */
            
          else {
            console.log('no has entregado nada, te faltan tareas para completar la mision');
            /* OJO aca se inserta el sonido de recordatorio del requerimiento para la mision 5 */

          }
        }




           /* MISION 6 */

        if (estado===6) {

            /* se cumple y pasa a a la siguiente mision */

          if (cbancario.getAttribute('visible')==true) {
            console.log('le entregas el BANCARIO al jefe');
            misioncumplidabanco2.components.sound.playSound();
            setTimeout( mision7,'3500',console.log('pasas a la mision 7'))
            /* OJO Se inserta la informacion de la mision 7 y sus requerimientos */

          }

            /* no se cumple y sigue en la mision actual */

          else {
            console.log('no has entregado nada, te faltan tareas para completar la mision');
            /* OJO aca se inserta el sonido de recordatorio del requerimiento para la mision 6 */
          }
        }
  
      })


         


          

    },

    }
);
