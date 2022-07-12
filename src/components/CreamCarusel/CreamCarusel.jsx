import Carusel from '../Carusel/Carusel';
import FirstCard from '../SixthSectionCard/FirstCard/FirstCard';
import SecondCard from '../SixthSectionCard/SecondCard/SecondCard';
import ThirdCard from '../SixthSectionCard/ThirdCard/ThirdCard';
import FourthCard from '../SixthSectionCard/FourthCard/FourthCard';
import './CreamCarusel.css';

const CreamCarusel=()=>{ 
	return (
		<Carusel containerStyle={"cream__container"} windowStyle={'cream__window'} btnStyle={'cream__btn'} ITEM_WIDTH={1056}>
			<div className='first__card cream__card'> <FirstCard/> <SecondCard/></div>
			<div className="second__card cream__card"> <ThirdCard/> <FourthCard/></div>
		</Carusel>
	)
}

export default CreamCarusel;