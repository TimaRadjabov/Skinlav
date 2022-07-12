import { useState } from 'react';
import check from '../../uikit/static/sixth-section/check.svg';
import vector from '../../uikit/static/sixth-section/vector.svg';
import './SixthSectionCard.css';


const SixthSectionCard=({list, shotList, title, backgroundImg, subtitle, imgStyle})=>{
const [active, setActive] = useState(false)

	const handleClick=()=>{
		setActive(!active)
	}

	const listItem=active ? list: shotList;

	const allList = listItem.map((item, i) => {
		return (
		<div className="item__list" key={i}>
			<img src={check} alt='check'/> 
			<p>{item}</p>
		</div>
		)
	})

	return(
		<div className={active? 'sixthSectionCard-container-avtive' : 'sixthSectionCard-container'}>
			<div className='sixthSectionCard__title'><h1>{title}</h1></div>
			<div className='sixthSectionCard__subtitle'>{subtitle}</div>
			<div className="sixthSectionCard__text">{allList}{active? null : <div className='effect'></div>}</div>
			<div className='sixthSectionCard__img'> <img className={`sixthSectionCard__img-img ${imgStyle}`} src={backgroundImg} alt='firstBottle'/> </div>
			<div className="sixthSectionCard__btn"> <button onClick={handleClick}>{active? "Cвернуть": 'Смотреть все' } <img className={active? 'sixthSectionCard__btn-img-active': 'sixthSectionCard__btn-img'} src={vector} alt="vector"/> </button> </div>
		</div>	
	)
}

export default SixthSectionCard;