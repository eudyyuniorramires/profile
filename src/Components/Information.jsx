import React from 'react';

const Information = () => {
    return (
        <div>
            

            
            <div className='Container-Infomacion-personal'>
                
                
              <span className='linea'></span>

               <div className='Introduction-Personal-Information'>
                <p style={{color:'yellow',fontSize:'20px'}}>Hola, mi nombre es:</p>
                <h1 style={{color:'#6495ed'}}>Eudy Lorenzo</h1>
                <h1 style={{color:'#6495ed'}}>Programador Junior en Backend/Frontend</h1>
                <p className='mt-5' style={{fontSize:'18px'}}>Estudiante apasionado por la tecnología y el desarrollo de software.
                Me especializo en programación orientada a objetos,<br></br> diseño de interfaces
                gráficas en Java y desarrollo web con tecnologías modernas. Busco constantemente 
                aprender y aplicar <br></br>nuevos conocimientos en proyectos reales, combinando creatividad, 
                lógica y compromiso en cada reto que enfrento.</p>


                <div className='boton-apartado'>
                     <button className='btn btn-primary'>Terminar de conocer</button>
                </div>

               </div>

   

              
                
            </div>

            
    
        </div>
    );
};

export default Information;