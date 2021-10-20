function objectToPos(posObject) {
   
    return (posObject.x) + " " + (posObject.y) + " "  + (posObject.z)
    
  }


function activador() {
console.log('estoy funcionando')
    var elem = document.getElementById('cameraRig')
    var camPos = objectToPos(elem.getAttribute('position'))

    var manijapasillo4 = document.getElementById('manija4')
    var manijapasillo3 = document.getElementById('manija3')
    var teleport4 =document.getElementById('teleport4')
    var teleport3 =document.getElementById('teleport3')
    var teleport4Pos= objectToPos(teleport4.getAttribute('position'))
    var teleport3Pos= objectToPos(teleport3.getAttribute('position'))
   if (teleport3Pos==camPos) {

    manijapasillo3.setAttribute('class',`property:clickable; to:true`)
       
   }
   if (teleport4Pos==camPos) {

    manijapasillo4.setAttribute('class',`property:clickable; to:true`)
       
   }
    
}