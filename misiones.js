AFRAME.registerComponent('misiones', {


    init: function () {


      
      
     
     

      function objectToPos(posObject) {
   
        return (posObject.x) + " " + (posObject.y) + " "  + (posObject.z)
        
      }

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



      
          /*    SONIDOS DE CARGA AL PRINCIPIO */


        var mySound1 = document.getElementById('sound1');
        var mySound2 = document.getElementById('sound2');
        var mySound3 = document.getElementById('sound3');
        var scene = document.querySelector('a-scene');  



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

      scene.addEventListener('loaded', function () {
 
      
      setTimeout(playsonidobienvenida,'2500', console.log('me reproduje 1'))


      
      setTimeout(stopsonidobienvenida,'0',console.log('pare 1'))


     
      setTimeout(playsonidointroduccion,'7500',console.log('me reproduje'))


      
      setTimeout(stopsonidobintroduccion,'0',console.log('pare'))
      
      

      setTimeout(playsonidomisionbanco,'15500',console.log('me reproduje'))


      
      setTimeout(stopsonidomisionbanco,'0',console.log('pare'))






        }); 



        /*    INTERACCION BANQUERO */

        var banquero = document.getElementById('banquero');
        var cbancario = document.getElementById('certificado-banco');
        var misioncumplidabanco = document.getElementById('sound4');
        var misioncumplidabanco2 = document.getElementById('sound5');
        
        

        banquero.addEventListener('click', function() {

        console.log('hablaste con el funcionario del banco');
        
        console.log(cbancario.getAttribute('visible'));
        
        if (cbancario.getAttribute('visible')==true) {
            console.log('ya tienes en tu poder el certificado, no tienes que haces nada mas aca, largo');
            
        }
        
        else {cbancario.setAttribute('visible',true);
            misioncumplidabanco.components.sound.playSound();
            console.log(misioncumplidabanco);
        }


      })

        /* INTERACCION JEFE */

        var jefe = document.getElementById('jefe');

        jefe.addEventListener('click', function() {

        console.log('hablas con el jefe');
          
          

          
          if (cbancario.getAttribute('visible')==true) {
              console.log('le entregas el certificado al jefe');
              misioncumplidabanco2.components.sound.playSound();
          }
          
           else {
              console.log('no has entregado nada');
          }
  
  
          })


          /* ITERACIONES CALLE */


          

    },

    }
);
