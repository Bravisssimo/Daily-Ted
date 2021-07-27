import '../styles/Informations.css'
import Technique from'./Technique'
import {useState, useEffect} from 'react'
import Swal from 'sweetalert2'

function Informations ({couverture, auteur, temps, technique, correspondance, titre, lien, secondes, liste, modifierListe, langueActive}){
    
    var termes=[]
    if(langueActive==='Français'){
        termes=["Cliquez pour plus d'informations", "+ ma liste", "Déjà fait !", "Ce talk est déjà dans votre liste", ""]
    } else {termes=["Clic for more information", "+ my list", "Already done !", "This talk is already in your list"]  
    }
    const[expressionActuelle, modifierExpression] = useState(termes[1])
    // eslint-disable-next-line
    useEffect(changerLangue,[langueActive])
    
    function changerLangue(){   
        
        if(langueActive==='Français' && expressionActuelle==="+ my list"){
            modifierExpression("+ ma liste")
        } else if(langueActive==='Français' && expressionActuelle==="In my list !"){
            modifierExpression("Dans ma liste !")
        } else if(langueActive==='English' && expressionActuelle==="+ ma liste"){
            modifierExpression("+ my list")
        } else if(langueActive==='English' && expressionActuelle==="Dans ma liste !"){
            modifierExpression("In my list !")
        }
    }

    const dejaPresent=liste.find((ted)=>ted.titre===titre)

        if(dejaPresent && (expressionActuelle==="+ ma liste" || expressionActuelle==="+ my list")){
            if(langueActive==='Français'){
                modifierExpression("Dans ma liste !")
            } else {
                modifierExpression("In my list !")
            }
        }
        if(!dejaPresent && (expressionActuelle==="Dans ma liste !" || expressionActuelle==="In my list !")){
            if(langueActive==='Français'){
                modifierExpression("+ ma liste")
            } else {
                modifierExpression("+ my list")
            }
        }

    function ajouterListe(titre, temps, secondes, lien){
        const dejaListe=liste.find((ted)=>ted.titre===titre)
        if (dejaListe){
            Swal.fire({
                icon: 'success',
                title: termes[2],
                text: termes[3],
                showConfirmButton: false,
                timer: 2200,
                background: 'black',
                backdrop: false,
                width: '40rem',
                iconColor: '#e23623'
              })
        } else {
            modifierListe([...liste,{titre, temps, secondes, lien, amount: 1}])
        }
    }

    function affichageCorrespondance(){
        if(langueActive==='Français'){
            Swal.fire({
                icon: 'info',
                title: `Recommandé à ${correspondance}`,
                text: 'En fonction de votre profil et des talks déjà visionnés',
                showConfirmButton: false,
                timer: 2500,
                background: 'black',
                backdrop: false,
                width: '40rem',
                iconColor: '#e23623'
            })
        }else{
            Swal.fire({
                icon: 'info',
                title: `${correspondance} recommended`,
                text: 'According to your profile and talks already watched',
                showConfirmButton: false,
                timer: 3000,
                background: 'black',
                backdrop: false,
                width: '40rem',
                iconColor: '#e23623'
              })
        }
    }

    function affichageTemps(){
        if(langueActive==='Français'){
            Swal.fire({
                icon: 'info',
                title: `${temps}`,
                text: "Le temps de visionnage de ce talk en min : sec",
                showConfirmButton: false,
                timer: 2500,
                background: 'black',
                backdrop: false,
                width: '40rem',
                iconColor: '#e23623'
            })
        }else{
            Swal.fire({
                icon: 'info',
                title: `${temps}`,
                text: "The time you need to see this talk, in min : sec",
                showConfirmButton: false,
                timer: 2800,
                background: 'black',
                backdrop: false,
                width: '40rem',
                iconColor: '#e23623'
              })
        }
    }

    return (    
            <div className='conteneur'>
                <li className='disposition-ted' >
                    <span className='recommandation' title={termes[0]} onClick={affichageCorrespondance}>{correspondance}</span>
                    <span className='temps' title={termes[0]} onClick={affichageTemps}>{temps}</span>
                    <a href={lien} target='_blank' rel='noreferrer'>
                        <img className='image' src={couverture} alt='vignette du ted talk'/>
                    </a>
                    <div className='titre-ted'>
                        {titre}
                    </div>
                    <div className='auteur'>
                       - {auteur}
                    </div>
                    <div className='engrenages' title={termes[0]}>
                        <Technique valeurTechnique={technique} langueActive={langueActive}/>
                    </div>
                    <button id="boutonListe" className='bouton-liste' onClick={()=>ajouterListe(titre, temps, secondes, lien)}>{expressionActuelle}</button>
                </li>
            </div>
            )
}

export default Informations