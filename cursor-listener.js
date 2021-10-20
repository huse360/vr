AFRAME.registerComponent('cursor-listener', {
  init: function () {
    function objectToPos(posObject) {
   
      return (posObject.x) + " " + (posObject.y) + " "  + (posObject.z)
      
    }

    
    var teleport = objectToPos(this.el.getAttribute('position'));
    var manijapasillo4 = document.getElementById('manija4')
    var manijapasillo3 = document.getElementById('manija3')
  
    this.el.addEventListener('click', function () {
      var elem = document.getElementById('cameraRig');
      var elempos = objectToPos(elem.getAttribute('position'))
      
      console.log( 'inicias',elempos)
      console.log( 'finalizas',teleport)

      elem.setAttribute('animation', `property:position;to: ${teleport}; dur: 1500`)
      
     
  /*     if(elempos=='52.5 0.4 -21')
      manijapasillo3.classList.add('clickable')
      if(elempos=='52.5 0.25 -19.6')
      manijapasillo4.classList.add('clickable') */
        
        console.log('Te has movido a',elempos)
        console.log('Te has movido a',elem.getAttribute('position'));
      
        
    });

    

  }
})

