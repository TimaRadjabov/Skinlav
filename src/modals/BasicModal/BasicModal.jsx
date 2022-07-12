import { useEffect, useMemo } from "react";
import {createPortal} from 'react-dom';
import close from '../../uikit/static/Modal/close.svg';
import './BasicModal.css';


const modalRootElement = document.querySelector('#modal');
const BasicModal=({isOpen=false, onClose, title, text, file, foto, authorizaton})=>{
	const element = useMemo(()=>document.createElement('div'), []);

	useEffect(()=>{
		if(isOpen){
			modalRootElement?.appendChild(element);

			return ()=>{
				modalRootElement?.removeChild(element);
			};
		}
		});

		if(isOpen){
			return createPortal(
				<div className='modal__all' onClick={onClose}>
				  <div className='modal' onClick={e => e.stopPropagation()}>
					 <div className='modal__icon'>
						<img onClick={onClose} src={close} alt="close" />
					 </div>
					 <div className="modal__content">
					 <div className="modal__hypertext">
					 <div className="modal__title">{title}</div>
					 <div className="modal__text">{text}</div>
					 <>{file}</>
					 <>{foto}</>
					 </div>
					 <div className="modal__form">
						<div className="modal__all-autho"> {authorizaton} </div>
						<div className="modal__privacy"> <p className="modal__privacy-text">Я подтверждаю, что ознакомлен и даю согласие на обработку персональных данных на условиях и для целей, определяемых <a className="modal__privacy-link" href="/" > Политикой конфиденциальности	</a></p> </div>
					 </div>
					 </div>
				  </div>
				</div>,
				element,
			 );
		}
		return null;
}

export default BasicModal;