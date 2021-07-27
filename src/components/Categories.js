import '../styles/Categories.css'

function Categories({modifierCategorie, categories, categorieActive, langueActive}){

    var termes = []
    if(langueActive==="Français"){
        termes=["Choix du thème", "réinitialiser"]
    } else{termes=["Choose your theme", "reset themes"]}

    return (
            <div>
                <select 
                    value={categorieActive}
                    onChange={(e)=>modifierCategorie(e.target.value)}
                    className='selecteur-categorie'
                >
                    <option value=''>{termes[0]}</option>
                    {categories.map((categorie)=>(
                        <option key={categorie} value={categorie}>
                            {categorie}
                        </option>
                    ))}
                </select>
                <button className='reinitialisation' onClick={()=>modifierCategorie('')} >{termes[1]}</button>
            </div>
           )
}

export default Categories