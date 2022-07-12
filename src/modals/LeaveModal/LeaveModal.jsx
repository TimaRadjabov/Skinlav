import BasicModal from "../BasicModal/BasicModal";
import leave from "../../uikit/static/Modal/leave.svg";
import file from "../../uikit/static/Modal/file.svg";
import Authorizaton from "../../components/Authorization";
import './LeaveModal.css';


const LeaveModal =({isOpen=false, onClose})=>{
	return(
		<BasicModal
			isOpen={isOpen}
			onClose={onClose}
			title={'Уже уходите?'}
			text={'Не упускайте шанс присоединиться к первой франшизе изготовления индивидуальной косметики.'}
			file={<div className="modal__file"><img src={file} alt="file"/> <p className="modal__file-text">Получите бесплатную презентацию на почту</p> </div>}
			foto={<div className="modal__foto-leave"><img src={leave} alt="leave" /></div>}
			authorizaton={<Authorizaton className={"modal__autho"} children={'Записаться'} />}
		/>
	)
}

export default LeaveModal;