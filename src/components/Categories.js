import '../styles/Categories.css'

function Categories({modifierCategorie, categories, categorieActive}){

    return (
            <div>
                <select 
                    value={categorieActive}
                    onChange={(e)=>modifierCategorie(e.target.value)}
                    className='selecteur-categorie'
                >
                    <option value=''>Choix du thème</option>
                    {categories.map((categorie)=>(
                        <option key={categorie} value={categorie}>
                            {categorie}
                        </option>
                    ))}
                </select>
                <button className='reinitialisation' onClick={()=>modifierCategorie('')} >Réinitialiser</button>
            </div>
           )
}

export default Categories