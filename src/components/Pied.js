import {useState} from 'react'
import '../styles/Pied.css'
import Swal from 'sweetalert2'

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
		if(langueActive==="Français"){
			if (!valeurEntree.includes('@')) {
				Swal.fire({
					icon: 'warning',
					title: "Adresse non valide",
					text: "Veuillez saisir une adresse contenant '@'",
					showConfirmButton: false,
					timer: 2500,
					background: 'black',
					backdrop: false,
					width: '40rem',
					iconColor: '#e23623'
				})
			}else{
				Swal.fire({
					icon: 'success',
					title: "Validé !",
					text: "Nous vous tiendrons au courant des dernières nouveautés",
					showConfirmButton: false,
					timer: 2500,
					background: 'black',
					backdrop: false,
					width: '40rem',
					iconColor: '#e23623'
				})
			}
		}else{
			if (!valeurEntree.includes('@')) {
				Swal.fire({
					icon: 'warning',
					title: "Invalid mail adress",
					text: "Please start over by tiping an adress with '@'",
					showConfirmButton: false,
					timer: 2500,
					background: 'black',
					backdrop: false,
					width: '40rem',
					iconColor: '#e23623'
				})
			}else{
				Swal.fire({
					icon: 'success',
					title: "Checked !",
					text: "We will keep you posted for any new talks",
					showConfirmButton: false,
					timer: 2500,
					background: 'black',
					backdrop: false,
					width: '40rem',
					iconColor: '#e23623'
				})
			}
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