import Swal from 'sweetalert2'

function Technique ({valeurTechnique, langueActive}){

    const rang = [1, 2, 3]
    const engrenage = '⚙'
    var formulation=[]
    if(langueActive==='Français'){
        formulation = ["peu", "modérément", "très"]
    } else{formulation=["only little", "a moderate amount of", "a lot of"]}
    

    return  langueActive==="Français"?
    
            (<div
                 onClick={()=>
                    Swal.fire({
                        icon: 'question',
                        title: "Vocabulaire technique",
                        text: `Ce Talk est ${formulation[valeurTechnique-1]} technique`,
                        showConfirmButton: false,
                        timer: 2500,
                        background: 'black',
                        backdrop: false,
                        width: '40rem',
                        iconColor: '#e23623'
                      })
                }
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
                    Swal.fire({
                        icon: 'question',
                        title: "Technical vocabulary",
                        text: `This Talk has ${formulation[valeurTechnique-1]} technical notions`,
                        showConfirmButton: false,
                        timer: 3000,
                        background: 'black',
                        backdrop: false,
                        width: '40rem',
                        iconColor: '#e23623'
                      })
                }
            >
                {rang.map((chiffre) =>
                valeurTechnique >= chiffre ? 
                (<span key={chiffre.toString()}>{engrenage}  </span>) : null
                )}
            </div>
           )
}

export default Technique