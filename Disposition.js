import {Talks} from '../datas/Talks'
import '../styles/Disposition.css'
import Informations from './Informations'

function Disposition({liste, modifierListe, categorieActive}) {

    return (
            <div className='principal'>
                <div className='conteneur-affichage-principal'>
                    <div className='gradient'></div>
                    <ul className='liste-ted'>
                        {Talks.map(({id, couverture, auteur, temps, technique, correspondance, categorie, titre, lien, secondes})=>(
                        !categorieActive || categorie === categorieActive ?
                            (<div key={id}>
                            <Informations couverture={couverture} auteur={auteur} temps={temps} technique={technique} correspondance={correspondance} titre={titre} liste={liste} modifierListe={modifierListe} lien={lien} secondes={secondes} />
                            </div>)
                        :
                        null
                        ))}
                    </ul>
                </div>
            </div>)
}
export default Disposition