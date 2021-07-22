
function Technique ({valeurTechnique, langueActive}){

    const rang = [1, 2, 3]
    const engrenage = '⚙'
    var formulation=[]
    if(langueActive==='Français'){
        formulation = ["peu", "modérément", "très"]
    } else{formulation=["only little", "a moderate", "a very"]}
    

    return  langueActive==="Français"?
    
            (<div
                 onClick={()=>
                 alert(`Ce Ted talk est ${formulation[valeurTechnique-1]} technique`)}
             >
                 {rang.map((chiffre) =>
                 valeurTechnique >= chiffre ? 
                 (<span key={chiffre.toString()}>{engrenage}  </span>) : null
                 )}
             </div>
            )
            :
            (<div
                onClick={()=>
                alert(`This Ted talk has ${formulation[valeurTechnique-1]} technical vocabulary`)}
            >
                {rang.map((chiffre) =>
                valeurTechnique >= chiffre ? 
                (<span key={chiffre.toString()}>{engrenage}  </span>) : null
                )}
            </div>
           )
}

export default Technique