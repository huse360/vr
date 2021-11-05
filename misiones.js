AFRAME.registerComponent('misiones', {


    init: function () {

      let estado = 0;
      let Stat = 0;
      
        /*    VARIABLES QUE LLAMAN AL SONIDO */


      var bienvenida = document.getElementById('sound1');
      var introduccion = document.getElementById('sound2');
      var misionbanco = document.getElementById('sound3');
      var misioncumplidabanco = document.getElementById('sound4');
      var misioncumplidabanco2 = document.getElementById('sound5');
      var recordatorioBanco = document.getElementById('sound6');
      var impresoraActa = document.getElementById('sound7');
      var impresoraCompletado = document.getElementById('sound8');
      var impresoraNoMision = document.getElementById('sound9');
      var actaPosesion = document.getElementById('sound10');
      var actaRadicada = document.getElementById('sound11');
      var actaNoImpresa = document.getElementById('sound12');
      var cComercioNoMision = document.getElementById('sound13');
      var entregaActa = document.getElementById('sound14');
      var recordatorioActa = document.getElementById('sound15');
      var bancariaPosesion = document.getElementById('sound16');
      var bancoNomision = document.getElementById('sound17');
      var misionDian = document.getElementById('sound18');
      var recordatorioDian = document.getElementById('sound19');
      var facturaPos = document.getElementById('sound20');
      var dianNoMision = document.getElementById('sound21');
      var misionComercio = document.getElementById('sound22');
      var dianPosec = document.getElementById('sound23');
     
      
      var iniciar = document.getElementById('iniciar');

      var factura = document.getElementById('factura-dian');
      var cbancario = document.getElementById('certificado-banco');
      var radicado = document.getElementById('radicado');
      var ccomercio = document.getElementById('ccomercio');
      var logoEmpresa = document.getElementById('logo');
      var logoEmpresaDigital = document.getElementById('logo-digital');
      var logoEmpresaImpreso = document.getElementById('logo-impreso');
      var nombreEmpresa = document.getElementById('nombre');
      var nombreEmpresaDigital = document.getElementById('nombre-digital');
      var nombreEmpresaImpreso = document.getElementById('nombre-impreso');
      var ActividadEconomica = document.getElementById('banner-1');
      var ActividadEconomica1 = document.getElementById('b-1');
      var ActividadEconomica2 = document.getElementById('b-2');
      var ActividadEconomica3 = document.getElementById('b-3');
      var reporteEconomica = document.getElementById('reporte-economica');
      var ClasificacionEmpresa = document.getElementById('banner-2');
      var ClasificacionEmpresa1 = document.getElementById('a-1');
      var ClasificacionEmpresa2 = document.getElementById('a-2');
      var ClasificacionEmpresa3 = document.getElementById('a-3');
      var reporteClasificacion = document.getElementById('reporte-clasificacion');

      var reporteEconomicaMesa =document.getElementById('reporte-economica-R');

      var nombreMesa = document.getElementById('nombre-R');
      var nombreImpresaMesa  = document.getElementById('nombre-impreso-R');

      var logoMesa  = document.getElementById('logo-R');
      var logoImpresaMesa  = document.getElementById('logo-impreso-R');

      var ClasificacionMesa  = document.getElementById('reporte-clasificacion-R');

      var ccomercioMesa  = document.getElementById('ccomercio-R');
      var radicadoMesa  = document.getElementById('radicado-R');

      var certificadoBancoMesa  = document.getElementById('certificado-banco-R');

      var facturaDianMesa  = document.getElementById('factura-dian-R');

      /* FUNCIONES DE LOS REPORTES EN LA MESA */
      
      function reporteActividadEconomicaMesa() {
      
        reporteEconomicaMesa.setAttribute('visible',true)
      }

      function reporteNombreMesa() {

        nombreMesa.setAttribute('visible',true)
        nombreImpresaMesa.setAttribute('visible',true)
      }

      function reporteLogo() {

        logoMesa.setAttribute('visible',true)
        logoImpresaMesa.setAttribute('visible',true)
      }

      function reporteClasificacionMesa() {

        ClasificacionMesa.setAttribute('visible',true)
      }

      function reporteComercioMesa() {
        
        ccomercioMesa.setAttribute('visible',true)
        radicadoMesa.setAttribute('visible',true)
      }

      function reporteBancoMesa() {

        certificadoBancoMesa.setAttribute('visible',true)
      }

      function reporteFacturaDianMesa() {

        facturaDianMesa.setAttribute('visible',true)
      }

      
        /* FUNCIONES DE SONIDO */

        function playsonidobienvenida() {
          bienvenida.components.sound.playSound();
          
        }

        function playsonidointroduccion() {
          introduccion.components.sound.playSound();
          
        }
  

        function playsonidomisionbanco() {
          misionbanco.components.sound.playSound();
          
        }

        function playMisionDian() {
          misionDian.components.sound.playSound();
          
        }

        function playMisionComercio() {
          misionComercio.components.sound.playSound();
          
        }
        /* FUNCION POSICION ALEATORIA */

        const lista =['-0.6','0','0.6']

        
       function tresAleatorios(lista) {

          return[...lista]
            .sort(()  => Math.random()>0.5?1:-1 )
            .slice(0,3)
          
        }
        var arraylista = tresAleatorios(lista)
        var random1= arraylista[0];
        var random2= arraylista[1];
        var random3= arraylista[2];

        function objectToPos1b() {
     
          return (random1) + " " + ('0') + " "  + ('0')

        }
        var posicionCartel1= objectToPos1b(ActividadEconomica1.getAttribute('position'))
        var posicionCartel1a= objectToPos1b(ClasificacionEmpresa1.getAttribute('position'))

        function objectToPos2b() {
     
          return (random2) + " " + ('0') + " "  + ('0')

        }
        var posicionCartel2= objectToPos2b(ActividadEconomica2.getAttribute('position'))
        var posicionCartel2a= objectToPos1b(ClasificacionEmpresa2.getAttribute('position'))
        function objectToPos3b() {
     
          return (random3) + " " + ('0') + " "  + ('0')

        }
        var posicionCartel3= objectToPos3b(ActividadEconomica3.getAttribute('position'))
        var posicionCartel3a= objectToPos1b(ClasificacionEmpresa3.getAttribute('position'))
        /* FUNCION APARECER BANNER1 ACTIVIDAD ECONOMICA  */

        function actividadEconomicaApear() {

          ActividadEconomica.setAttribute('visible',true)
          
        }

        /* FUNCION APARECER BANNER2 CLASIFICACION EMPRESA  */

        function clasificacionEmpresaApear() {

          ClasificacionEmpresa.setAttribute('visible',true)
          
        }

        /* FUNCIONES DE CAMBIO DE ESTADO */

        function mision1() {
          estado=1;
          ActividadEconomica.setAttribute('visible',true);
        }

        function mision2() {
          estado=2
          
        }

        function mision3() {
          estado=3
          
        }

        function mision4() {
          estado=4
          
        }
        function mision5() {
          estado=5
          
        }

        function mision6() {
          estado=6
          
        }

        function mision7() {
          estado=7
          
        }


        /* FUNCIONES DE HABLA ACTIVA */

        function hablar() {

          Stat=0
          
        }
        /* FUNCION DESVANECIDO DEL BOTON */
        
        function botondesvanecido() {

          iniciar.setAttribute('visible',false)
          iniciar.setAttribute('scale','0 0 0')
          
        }
      
        iniciar.addEventListener('click', function() {
 
          if (Stat==0) {
            Stat=1
            setTimeout(hablar,'10000')
            setTimeout(botondesvanecido,'1400')
      
            setTimeout(playsonidobienvenida,'3500')

            setTimeout(playsonidointroduccion,'7500')

           /* AGREGAR SONIDO REQUERIMIENTOS MISION 1 */
          
            setTimeout( mision1,'10000')
            setTimeout(console.log('pasas a la mision 1'),'10000')
            console.log(arraylista)
            console.log(random1)
            console.log(random2)
            console.log(random3)
            console.log(posicionCartel1) 
            console.log(posicionCartel2) 
            console.log(posicionCartel3) 
           ActividadEconomica1.setAttribute('position',objectToPos1b(posicionCartel1))
           ActividadEconomica2.setAttribute('position',objectToPos2b(posicionCartel2))
           ActividadEconomica3.setAttribute('position',objectToPos3b(posicionCartel3))
           setTimeout(actividadEconomicaApear,'10000')
          }

        }); 

      /*  ITERACCION BANNER-1 */

      
      ActividadEconomica1 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'3000')
          
          if (estado==1) {

            console.log('No es la respuesta correcta, la actividad economica de esta empresa no es de SERVICIOS')
            /* SONIDO INCORRECTO */
          }
        
        }

      })

      ActividadEconomica2 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'3000')
          
          if (estado==1) {

            console.log('No es la respuesta correcta, la actividad economica de esta empresa no es INDUSTRIAL')
            /* SONIDO INCORRECTO */
          }
        
        }

      })


      ActividadEconomica3 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'3000')
          
          if (estado==1) {

            console.log('Felicidades, encontraste la actividad economica de la empresa, efectivamente es de tipo COMERCIAL, enseñale tu reporte a tu jefe')
            /* SONIDO INCORRECTO */

            ActividadEconomica.setAttribute('scale','0 0 0')
            reporteEconomica.setAttribute('visible',true)

          }
        
        }

      })


      /*  ITERACCION BANNER-2 */

      
      ClasificacionEmpresa1 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'3000')
          
          if (estado==4) {

            console.log('No es la respuesta correcta, ESTA NO ES LA  CLASIFIFACION DE LA EMPRESA')
            /* SONIDO INCORRECTO */
          }
        
        }

      })

     ClasificacionEmpresa2 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'3000')
          
          if (estado==4) {

            console.log('No es la respuesta correcta, ESTA NO ES LA  CLASIFIFACION DE LA EMPRESA')
            /* SONIDO INCORRECTO */
          }
        
        }

      })


      ClasificacionEmpresa3 .addEventListener('click',function(){
        console.log(estado)
        console.log('Elegiste una opcion');
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'3000')
          
          if (estado==4) {

            console.log('Felicidades, encontraste la CLASIFIFACION DE LA EMPRESA, enseñale tu reporte a tu jefe')
            /* SONIDO INCORRECTO */

            ClasificacionEmpresa.setAttribute('scale','0 0 0')
            reporteClasificacion.setAttribute('visible',true)

          }
        
        }

      })







      /*  ITERACCION IMPRESORA */

      var impresora = document.getElementById('impresora');
     
      
      impresora.addEventListener('click', function() {
        console.log(estado)
        console.log('Usaste la impresora');
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'5000')
          
          if (estado==2) {

            if (nombreEmpresa.getAttribute('visible')==true) {

              if (nombreEmpresaImpreso.getAttribute('visible')==true) {
                
                console.log('ya imprimiste el nombre electo  para la empresa, llevaselo a tu jefe');
                /* impresoraCompletado.components.sound.playSound(); */
              }

              else {
                nombreEmpresaDigital.setAttribute('visible',false);
                nombreEmpresaImpreso.setAttribute('visible',true);
                console.log('Acabas de imprimir el nombre de la empresa, entregaselo a tu jefe');

              }
            }

           else {
              
              /* impresoraActa.components.sound.playSound(); */
              console.log('Debes crear el nombre en el computador para luego venir a imprimirlo y entregarlo a tu jefe');

            } 
          }

          if (estado==3) {

            if (logoEmpresa.getAttribute('visible')==true) {

              if (logoEmpresaImpreso.getAttribute('visible')==true) {
                
                console.log('ya imprimiste el logo que creaste para la empresa, llevaselo a tu jefe');
                /* impresoraCompletado.components.sound.playSound(); */
              }

              else {

                logoEmpresaDigital.setAttribute('visible',false);
                logoEmpresaImpreso.setAttribute('visible',true);
                console.log('Acabas de imprimir el logo de la empresa que diseñaste, entregaselo a tu jefe');

              }

              
            }

           else {
              
              /* impresoraActa.components.sound.playSound(); */
              console.log('Debes crear el logo en el computador para luego venir a imprimirlo y entregarlo a tu jefe');

            } 

          
          
          }

          if (estado==5) {

            if (ccomercio.getAttribute('visible')==true) {
              console.log('ya imprimiste el certificado de la camara de comercio');
              impresoraCompletado.components.sound.playSound();
            }

           else {
              ccomercio.setAttribute('visible',true);
              impresoraActa.components.sound.playSound();
              console.log('Acabas de imprimir el certificado de la camara de comercio, ve a radicarlo');

            } 
          
          }
          
          if (!(estado==2||estado==3||estado==5)) {
            console.log('Te quedas pensando que imprimir pero no se te ocurre nada de momento')
            impresoraNoMision.components.sound.playSound();
          }
        } 
      })



      /*  ITERACCION COMPUTADOR */

      var computador = document.getElementById('computador');
     
      computador.addEventListener('click', function() {

        console.log('Usaste el computador');
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'5000')
          

          if (estado==2) {

            if (nombreEmpresa.getAttribute('visible')==true) {

              if (nombreEmpresaDigital.getAttribute('visible')==true) {
                
                console.log('ya creaste el nombre de la empresa en formato digital, ve a imprimirlo y llevaselo a tu jefe impreso');
                /* impresoraCompletado.components.sound.playSound(); */
              }

              if (nombreEmpresaImpreso.getAttribute('visible')==true) {
                
                console.log('ya imprimiste el nombre de la empresa que creaste, llevaselo a tu jefe');
                /* impresoraCompletado.components.sound.playSound(); */
              }
            }

           else {
              nombreEmpresa.setAttribute('visible',true);
              nombreEmpresaDigital.setAttribute('visible',true);
              /* impresoraActa.components.sound.playSound(); */
              console.log('Acabas de crear el nombre de la empresa, ve a imprimirlo y muestraselo a tu jefe');

            } 

          
          
          }

          if (estado==3) {

            if (logoEmpresa.getAttribute('visible')==true) {

              if (logoEmpresaDigital.getAttribute('visible')==true) {
                
                console.log('ya diseñaste el logo de la empresa en formato digital, ve a imprimirlo y llevaselo a tu jefe impreso');
                /* impresoraCompletado.components.sound.playSound(); */
              }

              if (logoEmpresaImpreso.getAttribute('visible')==true) {
                
                console.log('ya imprimiste el logo de la empresa que diseñaste, llevaselo a tu jefe');
                /* impresoraCompletado.components.sound.playSound(); */
              }
            }

           else {
              logoEmpresa.setAttribute('visible',true);
              logoEmpresaDigital.setAttribute('visible',true);
              /* impresoraActa.components.sound.playSound(); */
              console.log('Acabas de diseñar el logo de la empresa en formato digital, ve a imprimirlo y muestraselo a tu jefe');

            } 

          }

          if (!(estado==2||estado==3)) {
            console.log('Te quedas pensando para que necesitas el computador pero no se te ocurre nada de momento')
            /* impresoraNoMision.components.sound.playSound(); */
          }
        } 
      })



      /*  ITERACCION FUNCIONARIO */

      var funcionario = document.getElementById('funcionario');
      

      funcionario.addEventListener('click', function() {
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'5000')
          console.log('hablaste con el funcionario');
        
          if (estado==5) {

            if (ccomercio.getAttribute('visible')==true) {
            
              if (radicado.getAttribute('visible')==true) {
                console.log('Ya te han radicado el certificado, llevaselo a tu jefe');
                actaPosesion.components.sound.playSound();
              }

              else {
                radicado.setAttribute('visible',true);
                actaRadicada.components.sound.playSound();
                console.log('Acabas de radicar el certificado en la camara de comercio, entregaselo a tu jefe');
              }

            }
            else { 
              console.log('Debes imprimir primero el certificado para venir a radicarlo');
              actaNoImpresa.components.sound.playSound();
            }
          
          }
          
          else {
            console.log('el funcionario te queda mirando y el silencio incomodo se apodera de la oficina, talvez ya has termido lo que tenias que hacer aca')
            cComercioNoMision.components.sound.playSound();
          }
        } 

      })








        

      /*    INTERACCION BANQUERO */

      var banquero = document.getElementById('banquero');
     
      
      
        
        

      banquero.addEventListener('click', function() {
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'5000')
          console.log('hablaste con el funcionario del banco');
        
          console.log(cbancario.getAttribute('visible'));


          if (estado===6) {

            if (cbancario.getAttribute('visible')==true) {
              console.log('ya tienes en tu poder el certificado, no tienes que haces nada mas aca, largo');
              bancariaPosesion.components.sound.playSound();
            }

            else {
              cbancario.setAttribute('visible',true);
              misioncumplidabanco.components.sound.playSound();
              console.log(misioncumplidabanco);

            }
          
          }
          
          else {
            console.log('te queda mirando pero no le dices nada, el silencio incomodo dice que no tienes que hacer nada por aca')
            bancoNomision.components.sound.playSound();
          }

        }  

      })

       /*    INTERACCION ASESOR */

       var asesor = document.getElementById('asesor');
       
       
       
         
         
 
       asesor.addEventListener('click', function() {
         if (Stat==0) {
           Stat=1
           setTimeout(hablar,'5000')
           console.log('hablaste con el asesor de la  Dian');
         
           console.log(factura.getAttribute('visible'));
 
 
           if (estado===7) {
 
             if (factura.getAttribute('visible')==true) {
               console.log('ya tienes en tu poder la factura de la Dian, no tienes que haces nada mas aca');
               dianNoMision.components.sound.playSound();
             }
 
             else {
               factura.setAttribute('visible',true);
               facturaPos.components.sound.playSound();
                
             }
           
           }
           
           else {
             console.log('te queda mirando pero no le dices nada, el silencio incomodo dice que no tienes que hacer nada por aca')
             dianPosec .components.sound.playSound();
           }
 
         }  
 
       })

      /* INTERACCION JEFE */

      var jefe = document.getElementById('jefe');
      

      jefe.addEventListener('click', function() {
        if (Stat==0) {
          Stat=1
          setTimeout(hablar,'5000')
          console.log('hablas con el jefe');

          
          /* MISION 1 */

          if (estado===1) {

            /* se cumple y pasa a a la siguiente mision */

            if (reporteEconomica.getAttribute('visible')==true) {
              console.log('le dices al jefe que hiciste la mision Actividad Economica de la empresa');
            
              /* entregaActa.components.sound.playSound(); */
              setTimeout(reporteActividadEconomicaMesa,'1000');
              setTimeout( mision2,'3500',console.log('pasas a la mision 2'));
            
              /* setTimeout(playsonidomisionbanco,'5500') */
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              /* recordatorioActa.components.sound.playSound(); */
            }
          }


          /* MISION 2 */

          if (estado===2) {

            /* se cumple y pasa a a la siguiente mision */

            if (nombreEmpresaImpreso.getAttribute('visible')==true) {
              console.log('le dices al jefe que hiciste la mision nombre de empresa');
            
              /* entregaActa.components.sound.playSound(); */
              setTimeout(reporteNombreMesa,'1000');
              setTimeout( mision3,'3500',console.log('pasas a la mision 3'));
            
              /* setTimeout(playsonidomisionbanco,'5500') */
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              /* recordatorioActa.components.sound.playSound(); */
            }
          }
          
          /* MISION 3 */

          if (estado===3) {

            /* se cumple y pasa a a la siguiente mision */

            if (logoEmpresaImpreso.getAttribute('visible')==true) {
              console.log('le dices al jefe que hiciste la mision logo de empresa');
            
              /* entregaActa.components.sound.playSound(); */
              setTimeout(reporteLogo,'1000');
              ClasificacionEmpresa1.setAttribute('position',objectToPos1b(posicionCartel1a))
              ClasificacionEmpresa2.setAttribute('position',objectToPos2b(posicionCartel2a))
              ClasificacionEmpresa3.setAttribute('position',objectToPos3b(posicionCartel3a))
              setTimeout(clasificacionEmpresaApear,'4000');
              setTimeout( mision4,'3500',console.log('pasas a la mision 4'));
           
            /*   setTimeout(playsonidomisionbanco,'5500') */
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              /* recordatorioActa.components.sound.playSound(); */
            }
          }

          /* MISION 4 */

          if (estado===4) {

            /* se cumple y pasa a a la siguiente mision */

            if (reporteClasificacion.getAttribute('visible')==true) {
              console.log('le dices al jefe que hiciste la mision CLASIFICACION de la empresa');
            
              /* entregaActa.components.sound.playSound(); */
              setTimeout(reporteClasificacionMesa,'1000');
              setTimeout( mision5,'3500',console.log('pasas a la mision 5'));
            
              setTimeout(playMisionComercio,'5500');
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              /* recordatorioActa.components.sound.playSound(); */
            }
          }

          /* MISION 5 */

          if (estado===5) {

            /* se cumple y pasa a a la siguiente mision */

            if (radicado.getAttribute('visible')==true) {
              console.log('le dices al jefe que hiciste la mision CAMARA-COMERCIO');
            
              entregaActa.components.sound.playSound();
              setTimeout(reporteComercioMesa,'1000');
              setTimeout( mision6,'3500',console.log('pasas a la mision 6'));
            
              setTimeout(playsonidomisionbanco,'5500');
            }

            /* no se cumple y sigue en la mision actual */
            
            else {
              console.log('no has entregado nada, te faltan tareas para completar la mision');
              recordatorioActa.components.sound.playSound();
            }
          }




           /* MISION 6 */

          if (estado===6) {

            /* se cumple y pasa a a la siguiente mision */

            if (cbancario.getAttribute('visible')==true) {
              console.log('le entregas el Certificado Bancario al jefe');
              misioncumplidabanco2.components.sound.playSound();
              setTimeout(reporteBancoMesa,'1000');
              setTimeout( mision7,'3500',console.log('pasas a la mision 7'));

              setTimeout(playMisionDian,'5500');
            }

            /* no se cumple y sigue en la mision actual */

            else {
              console.log('no has entregado nada, te faltan tareas para completar la mision');
            
              recordatorioBanco.components.sound.playSound();
            }
          }


          /* MISION 7 */

          if (estado===7) {

            /* se cumple y finaliza simulacion */

            if (factura.getAttribute('visible')==true) {
              console.log('le entregas el Certificado Bancario al jefe');
              misioncumplidabanco2.components.sound.playSound();
             setTimeout(reporteFacturaDianMesa,'1000');

             
            }

            /* no se cumple y sigue en la mision actual */

            else {
              console.log('no has entregado nada, te faltan tareas para completar la mision');
            
              recordatorioDian.components.sound.playSound();
            }
          }
        }  
      })


         


          

    },

    }
);
