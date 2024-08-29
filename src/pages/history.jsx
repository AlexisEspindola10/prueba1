import React from 'react'
import './history.css'

    export function History(){

        return (
          

<div className="container">
    <h1>HISTORIA</h1>
    
    <div className="row">
        <div className="column">
            <p>El Consejo Juvenil por la Madre Tierra (CJMT-T) fue creado el 24 de enero de 2019, como resultado de la Cumbre Nacional Jóvenes, Agua y Cambio Climático realizada en la ciudad de La Paz. En este evento, se reunieron líderes juveniles en representación de los nueve departamentos del país, con el objetivo de trazar y alcanzar metas en pro del medio ambiente y la lucha contra el cambio climático.</p>
            <p>La Delegación de Tarija destacó durante ese año, participando en diversas actividades, especialmente a partir de finales de septiembre, con la bienvenida de la primera generación de miembros y la planificación de su proyecto "Recumaderante" en su primera versión.</p>
        </div>
        <div className="column">
            <div  style={{backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center'}}>
                <img style={{height:'400px'}} src={`https://i.pinimg.com/736x/3f/cd/17/3fcd1785622d5eea86a236d9ad795fba.jpg`} alt="" />
            </div>
        </div>
    </div>
    
    <div className="row">
        <div className="column">
            <div style={{ backgroundColor: 'lightgray',height: '150px',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                FOTOS
            </div>
        </div>
        <div className="column">
            <div style={{backgroundColor: 'lightgray',height: '150px', display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                FOTOS
            </div>
        </div>
    </div>

    <div className="row">
        <div className="column">
            <h2>Características</h2>
            <p>El CJMT-T es una organización juvenil sin fines de lucro que ha trabajado en favor de los derechos del medio ambiente. Su enfoque está en la ejecución de proyectos relacionados con la gestión de residuos (reducir, reutilizar, reciclar), la educación ambiental, cuidados y gastronomía sostenibles, y campañas de concientización para contribuir a la comunidad. Su meta principal es promover el Desarrollo Sostenible y la defensa de los derechos de la Madre Tierra, niños, niñas y adolescentes.</p>
        </div>
        <div className="column">
            <h2>Composición</h2>
            <p>La organización está compuesta por jóvenes de entre 16 y 28 años, y tiene presencia nacional con 10 delegaciones distribuidas en diferentes departamentos del país.</p>
        </div>
    </div>
    
    <div className="column">
        <h2>Actividades que Desarrolla</h2>
        <p>Entre las actividades desarrolladas por el CJMT-T Delegación Tarija se encuentran proyectos sociambientales como "Recumaderante" (2 versiones), "Superhéroes Ambientales" (2 versiones), "Jornadas en Acción: Movimiento Libre de Plásticos", "Ojo con el Medio Ambiente", "Bosque Consciente". Además, participan anualmente en el Programa "Tambor de Ciudadanos organizado por "Thaki Millenials Movement", colaboran con el proyecto "Señorita y Señor" Tarija, y también, participaron en el programa Tarija Joven Tarija con el proyecto "Más consciencia, menos plástico".</p>
    </div>
    
    <div className="row full-width">
        <div className="carrousel">
            CARRUSEL DE IMÁGENES
        </div>
    </div>
</div>


        )
    }