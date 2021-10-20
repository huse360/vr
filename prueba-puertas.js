  function objectToPos(posObject) {
   
    return (posObject.x) + " " + (posObject.y) + " "  + (posObject.z)
    
  }
  function objectToPosEntradax(posObject) {
    
    return (posObject.x+2) + " " + (posObject.y-1.28055) + " "  + (posObject.z)
    
  }
  function objectToPosSalidax(posObject) {
    
    return (posObject.x-2) + " " + (posObject.y-1.28055) + " "  + (posObject.z)
    
  }
  
  function clickHandlerx(target) {
    let camerax = document.getElementById('cameraRig')
    
    let targetPosInx = objectToPosEntradax(target.getAttribute('position'))
    let targetPosOutx = objectToPosSalidax(target.getAttribute('position'))
    let camPosx = objectToPos(camerax.getAttribute('position'))
    

    if (camPosx==targetPosOutx) { camerax.setAttribute('animation', `property:position; from: ${camPosx}; to: ${targetPosInx}; dur: 300`)  
    console.log(camPosx)
    console.log(targetPosInx)
        
    } else { camerax.setAttribute('animation', `property:position; from: ${camPosx}; to: ${targetPosOutx}; dur: 300`)  
    console.log(camPosx)
    console.log(targetPosOutx)
        
    }
    
    
  } 
  
  function registerHandlersForClickx(target) {
  
  target.addEventListener('click', function() { 
    clickHandlerx(target)
    console.log('3')
    
  })  
  
  }
  
  


    function objectToPosEntrada(posObject) {
    
    return (posObject.x) + " " + (posObject.y-1.28055) + " "  + (posObject.z+2)
    
  }
  function objectToPosSalida(posObject) {
    
    return (posObject.x) + " " + (posObject.y-1.28055) + " "  + (posObject.z-2)
    
  }
  
  function clickHandler(target) {
    let camera = document.getElementById('cameraRig')
  
    let targetPosIn = objectToPosEntrada(target.getAttribute('position'))
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
  
  function setupHandlers(){
   
      let targetlistx = document.querySelectorAll('.moveTarget')
      let indexx = 0 
      while( indexx < targetlistx.length) {
        registerHandlersForClickx(targetlistx[ indexx ])
        indexx = indexx + 1
    
      }
      console.log('3')
      console.log(targetlistx)
    

    
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