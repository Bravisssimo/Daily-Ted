import '../styles/Liste.css'
import {useState, useEffect} from 'react'
import logoTed from '../assets/logoTed.jpg'

function Liste({liste, modifierListe}) {

    const [listeOuverte, modifierOuverture] = useState(true)
    const total = liste.reduce((acc, plantType) => acc + plantType.amount * plantType.secondes, 0)
    useEffect(() => {
        document.title=`Daily Ted ( liste : ${formatMin(total)} )`
    },[total])

    function formatMin(secondes){
        const minutes = Math.trunc(secondes/60)
        const reste = secondes - (minutes*60)
        var retour='init'
        if(reste<10)
            retour = `${minutes} min 0${reste}`
        else
            retour = `${minutes} min ${reste}`
        return retour
    }

    return listeOuverte ? 
        (
        <div className='fixeur-liste'>
            <div className='liste'>
                <button 
                    className='bouton-fermeture-liste'
                    onClick={()=> modifierOuverture(false)}
                >✖
                </button>

                {liste.length > 0 ? 
                    (
                    <div>
                        <h2 className='titre-liste-actuelle'>Liste actuelle :</h2>
                        <ul className='element-liste'>
                            {liste.map(({titre, temps, lien})=>(
                            <li>
                                <a className='hyperliens' key={`${titre}`} href={lien} target='_blank'>
                                    {titre} ({temps})
                                </a>
                                <h6></h6>
                            </li>
                            ))} 
                        </ul>
                        <h3 className='affichage-total'>Total : {formatMin(total)} </h3>
                        <button className='reinitialisation-liste' onClick={()=> modifierListe([])}>
                            Réinitialiser
                        </button>
                    </div>
                    )
                :
                (
                <div className='liste-vide'>Votre liste est vide</div>)}
            </div>
        </div>
        )
        :
        (
        <div className='liste-fermee'>
            <button 
                className='bouton-ouverture-liste' 
                onClick={()=> modifierOuverture(true)}
                >Ouvrir la liste
            </button>
            <h3 className='texte-liste-fermee'>Daily Ted est un projet amateur et ne se substitue en aucun cas au site officiel.</h3>
            <h3 className='texte-liste-fermee'>Pour accéder à d'autres Ted Talks via le site officiel, cliquez sur le logo suivant :</h3>
            <a href='https://www.ted.com/' target='_blank'>
                <img src={logoTed} alt='logo Ted site officiel' className='logo-ted'></img>
            </a>
        </div>
        )
}    

export default Liste