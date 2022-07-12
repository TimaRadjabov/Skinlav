import { Children, cloneElement, useEffect, useState } from 'react';
import BtnCarusel from '../../uikit/BtnCarusel/BtnCarusel';
import './Carusel.css';



const Carusel=({children, maskStyle, windowStyle, containerStyle, btnStyle, ITEM_WIDTH})=>{
	const [items, setItems]=useState([]);
	const [offset, setOffset]=useState(0);
	const [disabled, setDisabled] = useState(false);
	


	useEffect(()=>{
		setItems(
			Children.map(children, (item)=>{
				return cloneElement(item, {
					style: {
						height: '100%',
						minWidth: `${ITEM_WIDTH}px`,
						maxWidth: `${ITEM_WIDTH}px`,
					},
				})
			})
		)
	}, []);

const isDisabled = () =>{
	if(offset <= -500 ){
		setDisabled(() => {
			return true;
		});
	}else{
		setDisabled(false)
	}
	
}
	const handleNextArrow=()=>{
		setOffset((currentOffset)=>{
			const newOffset = currentOffset - ITEM_WIDTH

			const maxOffset=-(ITEM_WIDTH*(items.length-1))

			return Math.max(newOffset, maxOffset)
		})
		isDisabled();

	}

	const handleLeftArrow=()=>{
		setOffset((currentOffset)=>{
			const newOffset = currentOffset + ITEM_WIDTH

			return Math.min(newOffset, 0)
		})
		isDisabled();
	}

	return(
		<div className={containerStyle}>
		<BtnCarusel btnStyle={btnStyle} disabled={disabled} handleNextArrow={handleNextArrow} handleLeftArrow={handleLeftArrow} />
			<div className={windowStyle}>
			<div className={maskStyle}></div>
			<div className="all__items-container"
			style={{
				transform: `translateX(${offset}px)`,
			}}
			>{items}
			</div>
			</div>
		</div>
	)
}

export default Carusel;