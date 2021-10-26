AFRAME.registerComponent('manija1', {
    init: function () {

        

        

 /* funcion que devuelve en cordenadas x y z la posicion */
 
      function objectToPos(posObject) {
     
        return (posObject.x) + " " + ('0.4') + " "  + (posObject.z)
        
      }
/* eventos que registran despues del click */

      this.el.addEventListener('click', function () {


        
/* variables principales: camara en la escena, posicion x y z, y animacion negra al abrir la manija */

        var elem = document.getElementById('cameraRig');
        var campos = objectToPos(elem.getAttribute('position'))
        
       

/* varibles de interacion entre la primera manija y la segunda segun la posicion de los puntos de teletransporte PUERTA JEFE */

        var teleport2 = document.getElementById('teleport2')
        var teleportmanija1 = objectToPos(teleport2.getAttribute('position'));

        var teleport1 = document.getElementById('teleport1')
        var teleportmanija2 = objectToPos(teleport1.getAttribute('position'));

/* varibles de interacion entre la cuarta manija y la tercera segun la posicion de los puntos de teletransporte PUERTA OFICINA */  

        var teleport4 = document.getElementById('teleport4')
        var teleportmanija3 = objectToPos(teleport4.getAttribute('position'));

        var teleport3 = document.getElementById('teleport3')
        var teleportmanija4 = objectToPos(teleport3.getAttribute('position'));

 /* varibles de interacion entre la sexta manija y la quinta segun la posicion de los puntos de teletransporte PUERTA BANCO */         
        var teleport8 = document.getElementById('teleport8')
        var teleportmanija7 = objectToPos(teleport8.getAttribute('position'));

        var teleport7 = document.getElementById('teleport7')
        var teleportmanija8 = objectToPos(teleport7.getAttribute('position'));


        function cambiodesala() {
                
        
        
        
/* Se comprueba si el valor de la posicion de la camara es igual al te el punto de teletransporte, se mueve al punto 2 con animacion*/

        if (teleportmanija1==campos) {
            elem.setAttribute('position',teleportmanija2)
            
            

            console.log(teleportmanija2)
            console.log(objectToPos(elem.getAttribute('position')))    
            console.log('Te has movido a la oficina del jefe');
          
        }

/* Se comprueba si el valor de la posicion de la camara es igual al te el punto de teletransporte, se devuelve al punto 1 con animacion*/

        if (teleportmanija2==campos) {
        
            elem.setAttribute('position',teleportmanija1)
            
            
        
            console.log(teleportmanija1)
            console.log(objectToPos(elem.getAttribute('position')))
            console.log('Te has movido al pasillo');
            
        }

/* Se comprueba si el valor de la posicion de la camara es igual al te el punto de teletransporte, se mueve al punto 4 con animacion*/

        if (teleportmanija3==campos) {
            elem.setAttribute('position',teleportmanija4)
            
            

            console.log(teleportmanija4)
            console.log(objectToPos(elem.getAttribute('position')))    
            console.log('Te has movido a la puerta de la calle');
          
        }

/* Se comprueba si el valor de la posicion de la camara es igual al te el punto de teletransporte, se devuelve al punto 3 con animacion*/

        if (teleportmanija4==campos) {
            elem.setAttribute('position',teleportmanija3)
            
            

            console.log(teleportmanija3)
            console.log(objectToPos(elem.getAttribute('position')))    
            console.log('Te has movido a la calle');
          
        }
        
/* Se comprueba si el valor de la posicion de la camara es igual al te el punto de teletransporte, se mueve al punto 8 con animacion*/


        if (teleportmanija8==campos) {
                elem.setAttribute('position',teleportmanija7)
                
                
    
                console.log(teleportmanija8)
                console.log(objectToPos(elem.getAttribute('position')))    
                console.log('Te has movido a la calle');
              
        }

/* Se comprueba si el valor de la posicion de la camara es igual al te el punto de teletransporte, se mueve al punto 7 con animacion*/        

        if (teleportmanija7==campos) {
                elem.setAttribute('position',teleportmanija8)
                
                
    
                console.log(teleportmanija7)
                console.log(objectToPos(elem.getAttribute('position')))    
                console.log('Has entrado al Banco');
              
        }



        }               
    
       setTimeout(cambiodesala,'1400')
      });

     

            
        
    }
  })
  
  