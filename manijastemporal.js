AFRAME.registerComponent('manija1', {
    init: function () {
        
          this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
           
            console.log(elem.getAttribute('rotation'))
            
            
            function cambio() {
              elem.object3D.rotation.set(
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(180),
                THREE.Math.degToRad(0) 
              );
            
            elem.setAttribute('position',{x: 57.604, y: 0.400, z: 11.1})
            
            

        }

        
        setTimeout(cambio,'1400')
          })
        

        
    }
  })

AFRAME.registerComponent('manija2', {
    init: function () {
        
          this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
           
            console.log(elem.getAttribute('rotation'))
           
            
            function cambio() {
              elem.object3D.rotation.set(
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(0),
                THREE.Math.degToRad(0) 
              );     
            
            
            elem.setAttribute('position',{x: 53.409, y: 0.400, z: 12.340})
            
            
           
        }

        
        setTimeout(cambio,'1400')
          })
        

        
    }
  })



AFRAME.registerComponent('manija3', {
    init: function () {
        
          this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
           

            function cambio() {
                
            

            elem.setAttribute('position',{x: 58.736, y: 0.400, z: -2})

           
        }

        
        setTimeout(cambio,'1400')
          })
        
        
    }
  })
  
  

  AFRAME.registerComponent('manija5', {
    init: function () {
        
          this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
           

            function cambio() {
                
            

            elem.setAttribute('position',{x: 61, y: 0.400, z: -29})
            
           
        }

        
        setTimeout(cambio,'1400')
          })
        

        
    }
  })


  AFRAME.registerComponent('manija6', {
    init: function () {
        
        
        this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
           

            function cambio() {
                
            

            elem.setAttribute('position',{x: 60.009, y: 0.400, z: -19})

           
            }

        
            setTimeout(cambio,'1400')
        })
                
        
    }
  })



  AFRAME.registerComponent('manija8', {
    init: function () {
        
        
        this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
           

            function cambio() {
                
            

            elem.setAttribute('position',{x: 111.177, y: 0.400, z: 10.753})

           
            }

        
            setTimeout(cambio,'1400')
        })
        

           
        
    }
  })


  AFRAME.registerComponent('manija7', {
    init: function () {
        
        
        this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
           

            function cambio() {
                
            

            elem.setAttribute('position',{x: 113.987, y: 0.400, z: -2})

           
            }
            
        
            setTimeout(cambio,'1400')
        })
        
       
    }
  })


  AFRAME.registerComponent('manija9', {
    init: function () {
        
        
        this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
           

            function cambio() {
                
            

            elem.setAttribute('position',{x: 35.670, y: 0.400, z: -18.144})

           
            }
            
        
            setTimeout(cambio,'1400')
        })
        
       
    }
  })


  AFRAME.registerComponent('manija10', {
    init: function () {
        
        
        this.el.addEventListener('click', function () {

            var elem = document.getElementById('cameraRig');
           

            function cambio() {
                
            

            elem.setAttribute('position',{x: 35.670, y: 0.400, z: -26.754})

           
            }
            
        
            setTimeout(cambio,'1400')
        })
        
       
    }
  })




  AFRAME.registerComponent('cursor-lis1', {
    init: function () { 

        function objectToPos2(posObject) {
   
            return ('58.736') + " " + ('0.4') + " "  + (posObject.z)
                
            }
    
      this.el.addEventListener('click', function () {
        var elem = document.getElementById('cameraRig');
        var elempos = objectToPos2(elem.getAttribute('position'))
        var pos2 = document.getElementById('teleport0')
        var pos2des = objectToPos2(pos2.getAttribute('position'))
    
        function movimientofinal() {

          console.log( 'inicias',elempos)  
          console.log('Te has movido a',elem.getAttribute('position'));
        
        }
        
        
        
  
        elem.setAttribute('animation', `property:position;to: ${pos2des}; dur: 4500`)
        
       
  
        setTimeout(movimientofinal,'1500')
        
          
        
          
      });
  
      
  
    }
  })

  AFRAME.registerComponent('cursor-lis2', {
    init: function () { 

        function objectToPos1(posObject) {
   
            return ('113.987') + " " + ('0.4') + " "  + (posObject.z)
                
            }
    
      this.el.addEventListener('click', function () {
        var elem = document.getElementById('cameraRig');
        var elempos = objectToPos1(elem.getAttribute('position'))
        
        var pos1 = document.getElementById('teleport1')
        var pos1des = objectToPos1(pos1.getAttribute('position'))
    
        function movimientofinal2() {

          console.log( 'inicias',elempos)  
          console.log('Te has movido a',elem.getAttribute('position'));
        
        }
        
        
        
  
        elem.setAttribute('animation', `property:position;to: ${pos1des}; dur: 4500`)
        
       
  
        setTimeout(movimientofinal2,'1500')
        
         1.697 
        
          
      });
  
      
  
    }
  })
  
  