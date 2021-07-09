import '../styles/Informations.css'
import Technique from'./Technique'

function Informations ({couverture, auteur, temps, technique, correspondance, titre, lien, secondes, liste, modifierListe}){

    function ajouterListe(titre, temps, secondes, lien){
        const dejaListe=liste.find((ted)=>ted.titre === titre)
        if (dejaListe){
            alert(`Ce Ted Talk est déjà dans votre liste !`)
        } else {
            modifierListe([...liste,{titre, temps, secondes, lien, amount: 1}])
        }
    }

    return (    
            <div className='conteneur'>
                <li className='disposition-ted' >
                    <span className='recommandation' title='plus ce pourcentage est haut, plus ce Ted est recommandé pour votre profil'>{correspondance}</span>
                    <span className='temps' title='le temps de la vidéo'>{temps}</span>
                    <a href={lien} target='_blank'>
                        <img className='image' src={couverture} />
                    </a>
                    <div className='titre-ted'>
                        {titre}
                    </div>
                    <div className='auteur'>
                       - {auteur}
                    </div>
                    <div className='engrenages' title='le niveau technique de ce Ted, de 1 à 3'>
                        <Technique valeurTechnique={technique}/>
                    </div>
                    <button className='bouton-liste' onClick={()=>ajouterListe(titre, temps, secondes, lien)}>+ ma liste</button>
                </li>
            </div>
            )
}

export default Informations