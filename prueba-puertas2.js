function objectToPos(posObject) {
   
    return (posObject.x) + " " + (posObject.y) + " "  + (posObject.z)
    
  }
  function objectToPoseEntrada(posObject) {
    
    return (posObject.x) + " " + (posObject.y-1.28055) + " "  + (posObject.z+2)
    
  }
  function objectToPosSalida(posObject) {
    
    return (posObject.x) + " " + (posObject.y-1.28055) + " "  + (posObject.z-2)
    
  }
  
  function clickHandler(target) {
    let camera = document.getElementById('cameraRig')
  
    let targetPosIn = objectToPoseEntrada(target.getAttribute('position'))
    let targetPosOut = objectToPosSalida(target.getAttribute('position'))
    let camPos = objectToPos(camera.getAttribute('position'))
    

    if (camPos==targetPosOut) { camera.setAttribute('animation', `property:position; from: ${camPos}; to: ${targetPosIn}; dur: 300`)  
    console.log(camPos)
    console.log(targetPosIn)
        
    } else { camera.setAttribute('animation', `property:position; from: ${camPos}; to: ${targetPosOut}; dur: 300`)  
    console.log(camPos)
    console.log(targetPosOut)
        
    }
    
    
  } 
  
  function registerHandlersForClick(target) {
  
  target.addEventListener('click', function() { 
    clickHandler(target)
    console.log('3')
    
  })  
  
  }
  
  function setupHandlers (){
    let targetlist = document.querySelectorAll('.moveTarget2')
    let index = 0 
    while( index < targetlist.length) {
      registerHandlersForClick(targetlist[ index ])
      index = index + 1
  
    }
    console.log('4')
    console.log(targetlist)
  }
  window.onload = setupHandlers