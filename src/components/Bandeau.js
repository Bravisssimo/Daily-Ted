import '../styles/Bandeau.css'
import logo from '../assets/logo.png'
import {Talks} from '../datas/Talks'
import Categories from './Categories'

function Bandeau ({categorieActive, modifierCategorie, langueActive, modifierLangue}){

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
                        {langueActive==='Français' ?
                        <h3 className='sous-titre'>La crème des Ted talks en un clic</h3>
                        :
                        <h3 className='sous-titre'>The greatest Ted talks in a few clics</h3>}
                    </div>
                    <div className='selecteur-theme'>
                        <Categories
                            categories={categories}
                            categorieActive={categorieActive}
                            modifierCategorie={modifierCategorie}
                            langueActive={langueActive}
                        />
                    </div>
                    <div className='selecteur-langue'>
                        <h4 className='choix-langue' onClick={()=>modifierLangue('Français')}>Français</h4>
                        <h4 className='separateur'>|</h4>
                        <h4 className='choix-langue' onClick={()=>modifierLangue('English')}>English</h4>
                    </div>
                </div>
            </div>
            )
}

export default Bandeau