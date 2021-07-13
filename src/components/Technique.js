
function Technique ({valeurTechnique}){

    const rang = [1, 2, 3]
    const engrenage = '⚙'
    const formulation = ["peu", "modérément", "très"]

    return  (
             <div
                 onClick={()=>
                 alert(`Ce Ted Talk est ${formulation[valeurTechnique-1]} technique`)}
             >
                 {rang.map((chiffre) =>
                 valeurTechnique >= chiffre ? 
                 (<span key={chiffre.toString()}>{engrenage}  </span>) : null
                 )}
             </div>
            )
}

export default Technique