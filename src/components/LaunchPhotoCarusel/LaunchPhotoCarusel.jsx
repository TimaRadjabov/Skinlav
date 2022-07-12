import Carusel from "../Carusel/Carusel";
import './LaunchPhotoCarusel.css';


const LaunchPhotoCarusel=()=>{
	return(
		<Carusel containerStyle={'launchPhoto-comtainer'} windowStyle={'launchPhoto__window'} btnStyle={'launchPhoto__btn'} ITEM_WIDTH={1140}>
			<div className='launchPhoto__img-first launchPhoto' ></div>
			<div className='launchPhoto__img-second launchPhoto'></div>
			<div className='launchPhoto__img-three launchPhoto'></div>
			<div className='launchPhoto__img-four launchPhoto' ></div>
			<div className='launchPhoto__img-five launchPhoto'></div>
			<div className='launchPhoto__img-six launchPhoto'></div>
		</Carusel>
	)
}

export default LaunchPhotoCarusel;