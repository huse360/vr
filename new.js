AFRAME.registerComponent('prueba', {


    init: function () {

        let estado=0;

        let boxGreen    = document.getElementById('box1');
        let boxYellow   = document.getElementById('box2');
        let boxRed      = document.getElementById('box3');
        let boxBlue     = document.getElementById('box4');

        let boxGreenColor   = boxGreen.getAttribute('material').color;
        let boxYellowColor  = boxYellow.getAttribute('material').color;
        let boxRedColor     = boxRed.getAttribute('material').color;
        let boxBlueColor    = boxBlue.getAttribute('material').color;
        

        console.log('Entidades');
        console.log('CAJA VERDE',boxGreen);
        console.log('CAJA AMARILLA',boxYellow);
        console.log('CAJA ROJA',boxRed);
        console.log('CAJA AZUL',boxBlue);

        console.log('Colores de Entidades');

        console.log(boxGreenColor);
        console.log(boxYellowColor);
        console.log(boxRedColor);
        console.log(boxBlueColor);

        console.log(typeof estado)

        function clickGreen(){


            boxGreen.setAttribute('Animation', `property: components.material.material.color; type: color;to:black; dur: 1400;`)
            
        };

        function clickYellow(){


            boxYellow.setAttribute('Animation', `property: components.material.material.color; type: color;to:black; dur: 1400;`)

        };

        function clickRed(){


            boxRed.setAttribute('Animation', `property: components.material.material.color; type: color;to:black; dur: 1400;`)

        };

        function clickBlue(){


            boxBlue.setAttribute('Animation', `property: components.material.material.color; type: color;to:black; dur: 1400;`)
            
        };

        console.log(estado)
        boxGreen.addEventListener('click', function () {
            
            console.log('Tu estado actual es la mision ',estado);
            if (estado===0) {
                
                setTimeout(clickGreen,'100',estado=1);
                console.log('Pasaste a la mision ',estado);
                console.log(' ');    
                
            }
            
        });

        boxYellow.addEventListener('click', function () {

            console.log('Tu estado actual es la mision ',estado);
            
            if (estado==1) {
                
                setTimeout(clickYellow,'100',estado=2);
                console.log('Pasaste a la mision ',estado);
                console.log(' ');
            }
            
        });


        boxRed.addEventListener('click', function () {

            console.log('Tu estado actual es la mision ',estado);

            if (estado===2) {
                
                setTimeout(clickRed,'100',estado=3);                
                console.log('Pasaste a la mision  ',estado);
console.log(' ');
            }
            
        });


        boxBlue.addEventListener('click', function () {

            console.log('Tu estado actual es la mision ',estado);

            if (estado===3) {
                
                setTimeout(clickBlue,'100',estado=4);
                console.log('Pasaste a la mision  ',estado);
console.log(' ');
                
            }
            
        });



        


    }





});
