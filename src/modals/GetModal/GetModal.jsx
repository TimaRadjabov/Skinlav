import BasicModal from "../BasicModal/BasicModal";
import getFoto from '../../uikit/static/Modal/getFoto.svg';
import Authorizaton from "../../components/Authorization";
import './GetModal.css';

const GetModal=({isOpen, onClose})=>{
	
	return(
		<>
			<BasicModal 
				isOpen={isOpen}
				onClose={onClose}
				title={'Получите'}
				text={'подробную презентазию о франшизе Skinlav'}
				foto={<div className="modal__foto"><img src={getFoto} alt="getFoto" /></div>}
				authorizaton={<Authorizaton className={"modal__autho"} children={'Получить ПРЕЗЕНТАЦИЮ'} />}
			/>
		</>
	)
}

export default GetModal;