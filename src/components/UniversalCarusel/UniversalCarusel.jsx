import Carusel from "../Carusel/Carusel";
import './UniversalCarusel.css';


const UniversalCarusel=({img__first, img__second, img__three})=>{
 
	return(
		<Carusel containerStyle={'universal-container'} windowStyle={'universal__window'} btnStyle={'universal__btn'} ITEM_WIDTH={510}>
			<div className= {`${img__first} universal`}></div>
			<div className={`${img__second} universal`}></div>
			<div className={`${img__three} universal`}></div>
		</Carusel>
	)
}

export default UniversalCarusel;