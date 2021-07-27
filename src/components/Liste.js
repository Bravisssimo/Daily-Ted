import "../styles/Liste.css"
import {useState, useEffect} from "react"
import logoTed from "../assets/logoTed.jpg"

function Liste({liste, modifierListe, langueActive, modifierExpression}) {

    const [listeOuverte, modifierOuverture] = useState(false)
    const total = liste.reduce((acc, plantType) => acc + plantType.amount * plantType.secondes, 0)
    useEffect(() => {
        document.title=`Daily Ted ( ⌚ : ${formatMin(total)} )`
    },[total])

    if(langueActive==="Français"){
        var termes = ["Liste actuelle :", "reinitialiser", "votre liste est vide", "Ouvrir la liste","Daily Ted est un projet amateur et ne se substitue en aucun cas au site officiel.", "Pour accéder à d'autres Ted talks via le site officiel, cliquez sur le logo suivant :"]
    } else {termes = ["Current list :", "reset list", "your list is empty", "Open list", "Daily Ted is an amateur project and it isn't meant to replace the official website.", "To see other Ted talks on the official website, please click on the following logo :"]}
 

    function formatMin(secondes){
        const minutes = Math.trunc(secondes/60)
        const reste = secondes - (minutes*60)
        var retour="init"
        if(reste<10)
            retour = `${minutes} min 0${reste}`
        else
            retour = `${minutes} min ${reste}`
        return retour
    }

    return listeOuverte ? 
        (
        <div className="fixeur-liste">
            <div className="liste">
                <button 
                    className="bouton-fermeture-liste"
                    onClick={()=> modifierOuverture(false)}
                >✖
                </button>

                {liste.length > 0 ? 
                    (
                    <div>
                        <h2 className="titre-liste-actuelle">{termes[0]}</h2>
                        <ul className="element-liste">
                            {liste.map(({titre, temps, lien})=>(
                            <li>
                                <a className="hyperliens" key={`${titre}`} href={lien} target="_blank" rel="noreferrer">
                                    {titre} ({temps})
                                </a>
                                <div className="espace"></div>
                            </li>
                            ))} 
                        </ul>
                        <h3 className="affichage-total">Total : {formatMin(total)} </h3>
                        <button className="reinitialisation-liste" onClick={()=> modifierListe([])}>
                            {termes[1]}
                        </button>
                    </div>
                    )
                :
                (
                <div className="liste-vide">{termes[2]}</div>)}
            </div>
        </div>
        )
        :
        (
        <div className="liste-fermee">
            <button 
                className="bouton-ouverture-liste" 
                onClick={()=> modifierOuverture(true)}
                >{termes[3]}
            </button>
            <h3 className="texte-liste-fermee">{termes[4]}</h3>
            <h3 className="texte-liste-fermee">{termes[5]}</h3>
            <a href="https://www.ted.com/" target="_blank" rel="noreferrer">
                <img src={logoTed} alt="logo Ted site officiel" className="logo-ted"></img>
            </a>
        </div>
        )
}    

export default Liste