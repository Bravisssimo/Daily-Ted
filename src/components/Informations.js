import '../styles/Informations.css'
import Technique from'./Technique'

function Informations ({couverture, auteur, temps, technique, correspondance, titre, lien, secondes, liste, modifierListe, langueActive}){

    var termes=[]
    if(langueActive==='Français'){
        termes=["Ce Ted talk est déjà dans votre liste !", "plus ce pourcentage est haut, plus ce talk est recommandé pour votre profil", "le temps de la vidéo", "le niveau technique de ce talk, de 1 à 3", "+ ma liste"]
    } else {termes=["This talk is already in your list !", "the more the pourcentage, the more we recommend this talk for your profile", "The time of the video", "the technical level of this talk, from 1 to 3", "+ my list"]}

    function ajouterListe(titre, temps, secondes, lien){
        const dejaListe=liste.find((ted)=>ted.titre === titre)
        if (dejaListe){
            alert(termes[0])
        } else {
            modifierListe([...liste,{titre, temps, secondes, lien, amount: 1}])
        }
    }

    return (    
            <div className='conteneur'>
                <li className='disposition-ted' >
                    <span className='recommandation' title={termes[1]}>{correspondance}</span>
                    <span className='temps' title={termes[2]}>{temps}</span>
                    <a href={lien} target='_blank' rel='noreferrer'>
                        <img className='image' src={couverture} alt='vignette du ted talk'/>
                    </a>
                    <div className='titre-ted'>
                        {titre}
                    </div>
                    <div className='auteur'>
                       - {auteur}
                    </div>
                    <div className='engrenages' title={termes[3]}>
                        <Technique valeurTechnique={technique} langueActive={langueActive}/>
                    </div>
                    <button className='bouton-liste' onClick={()=>ajouterListe(titre, temps, secondes, lien)}>{termes[4]}</button>
                </li>
            </div>
            )
}

export default Informations