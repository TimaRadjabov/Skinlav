import BasicModal from "../BasicModal/BasicModal";
import subscribe from "../../uikit/static/Modal/subscribe.svg";
import Authorizaton from "../../components/Authorization";
import './SubscribeModal.css';


const SubscribeModal =({isOpen=false, onClose})=>{
	return(
		<BasicModal
			isOpen={isOpen}
			onClose={onClose}
			title={'Запишитесь'}
			text={'на онлайн-консультацию, чтобы узнать подробнее о франшизе Skinlav'}
			foto={<div className="modal__foto-subscribe"><img src={subscribe} alt="subscribe" /></div>}
			authorizaton={<Authorizaton className={"modal__autho"} children={'Записаться'} />}
		/>
	)
}

export default SubscribeModal;