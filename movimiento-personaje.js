AFRAME.registerComponent('cursor-listener', {
  init: function () {
    function objectToPos(posObject) {
   
      return (posObject.x) + " " + ('0.4') + " "  + (posObject.z)
      
    }

    var teleport = objectToPos(this.el.getAttribute('position'));


    
  
    this.el.addEventListener('click', function () {
      var elem = document.getElementById('cameraRig');
      var elempos = objectToPos(elem.getAttribute('position'))
      
  
      function movimientofinal() {
        console.log('Te has movido a',elem.getAttribute('position'));
      
      }
      
      console.log( 'inicias',elempos)
      console.log( 'finalizas',teleport)

      elem.setAttribute('animation', `property:position;to: ${teleport}; dur: 1500`)
      
     

      setTimeout(movimientofinal,'1500')
      
        
      
        
    });

    

  }
})

