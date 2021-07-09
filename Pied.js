import {useState} from 'react'
import '../styles/Pied.css'

function Pied() {
	
	const [valeurEntree, modifierValeurEntree] = useState('')

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
					Pour être au courant des prochains Ted Talks ajoutés 📺
				</div>
				<div className='phrase-pied'>Laissez-nous votre mail :</div>
				<input
					className='entree-mail'
					placeholder='Entrez votre mail'
					onChange={gererEntree}
					value={valeurEntree}
					onBlur={verifierEntree}
				/>
			</footer>
	)
}

export default Pied