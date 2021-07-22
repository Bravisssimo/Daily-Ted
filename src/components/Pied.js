import {useState} from 'react'
import '../styles/Pied.css'

function Pied({langueActive}) {
	
	const [valeurEntree, modifierValeurEntree] = useState('')
	var termes=[]
	if(langueActive==="Français"){
		termes=["Pour être au courant des prochains Ted talks ajoutés 📺", "Laissez-nous votre mail :", "Entrez votre mail"]
	} else{termes=["To stay in the loop for the latest Ted talks 📺", "Juste leave your email adress :", "enter your email"]}

	function gererEntree(e) {
		modifierValeurEntree(e.target.value)
	}

	function verifierEntree() {
		if (!valeurEntree.includes('@')) {
			alert("Attention, il n'y a pas d'@, adresse non valide")
		}
	}

	return (
			<footer className='pied'>
				<div className='phrase-pied'>
					{termes[0]}
				</div>
				<div className='phrase-pied'>{termes[1]}</div>
				<input
					className='entree-mail'
					placeholder={termes[2]}
					onChange={gererEntree}
					value={valeurEntree}
					onBlur={verifierEntree}
				/>
			</footer>
	)
}

export default Pied