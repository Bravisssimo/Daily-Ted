import '../styles/Bandeau.css'
import logo from '../assets/logo.png'
import {Talks} from '../datas/Talks'
import Categories from './Categories'

function Bandeau ({categorieActive, modifierCategorie}){

    const categories = Talks.reduce(
        (acc, talk)=>
            acc.includes(talk.categorie) ? acc : acc.concat(talk.categorie),
            []
    )

    return (
            <div className='fixeur-bandeau'>
                <div className='disposition-bandeau'>
                    <div className='titre-logo'>
                        <img src={logo} alt='La maison jungle' className='logo-projet'/>
                        <h1 className='titre-projet'>Daily Ted</h1>
                        <h3 className='sous-titre'>A selection of the best Ted Talks for your schedule</h3>
                    </div>
                    <div className='selecteur'>
                        <Categories
                            categories={categories}
                            categorieActive={categorieActive}
                            modifierCategorie={modifierCategorie}
                        />
                    </div>
                </div>
            </div>
            )
}

export default Bandeau