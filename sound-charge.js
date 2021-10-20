AFRAME.registerComponent('play', {
 
    init: function () {

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

    
    
    }

});















