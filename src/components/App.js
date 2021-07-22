import Bandeau from './Bandeau'
import Liste from './Liste'
import Disposition from './Disposition'
import Pied from './Pied'
import '../styles/App.css'
import {useState, useEffect} from 'react'

function App() {

    const ListeSauvegardee = localStorage.getItem("liste")
    const[categorieActive, modifierCategorie] = useState("")
    const[langueActive, modifierLangue] = useState("Français")
    const [liste, modifierListe] = useState(ListeSauvegardee ? JSON.parse(ListeSauvegardee) : [])
    useEffect(()=>{localStorage.setItem("liste", JSON.stringify(liste))}, [liste])

    return (
      <div>
          <Bandeau categorieActive={categorieActive} modifierCategorie={modifierCategorie} langueActive={langueActive} modifierLangue={modifierLangue}/>
          <div className='disposition'>
              <Liste liste={liste} modifierListe={modifierListe} langueActive={langueActive}/>
              <Disposition liste={liste} modifierListe={modifierListe} categorieActive={categorieActive} langueActive={langueActive}/>
          </div>
          <Pied langueActive={langueActive}/>
      </div>
      )
}

export default App;