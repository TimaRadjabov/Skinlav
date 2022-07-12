import arrow from '../../uikit/static/Carusel/arrow.svg';
import leftArrow from "../../uikit//static/Carusel/lastArrow.svg";
import './BtnCarusel.css';

const BtnCarusel = ({disabled, handleNextArrow, handleLeftArrow, btnStyle})=>{
	return(
		<div className={`carusel__btns ${btnStyle}`}> 
                    <button className={disabled ? 'disabled': 'carusel__arrow'} onClick={handleNextArrow} ><img 
						  className='carusel__arrow-next'
                      src={disabled ? leftArrow : arrow} 
                      alt="arrow" 
                    /></button>  
                    <button className={!disabled ? 'disabled': 'carusel__arrow'} onClick={handleLeftArrow}><img
						    className='carusel__arrow-next last__arrow' 
                      src={!disabled ? leftArrow : arrow} 
                      alt="lastArrow" 
                    /></button> 
                  </div> 
	)
}

export default BtnCarusel;