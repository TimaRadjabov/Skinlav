import calendar from "../../uikit/static/AppreciationPage/calendar.svg";
import watch from "../../uikit/static/AppreciationPage/watch.svg";
import instagram from "../../uikit/static/AppreciationPage/instagram.svg";
import vk from "../../uikit/static/AppreciationPage/vk.svg";
import logo from "../../uikit/static/AppreciationPage/logo.svg";
import foto from "../../uikit/static/AppreciationPage/foto.svg";
import Header from "../header";
import "./AppreciationPageUniversal.css";


const AppreciationPageUniversal = ({styleProp, text})=>{

	const handleSubmit =()=>{
		// back
	}
	return (
		<div className="wrapper">
		<Header className='appreciationPage__header'/>
		<div classname='text-container'>
		<div className="appreciationPage__body">
				<div className={styleProp}> <h1>{text}</h1></div>
				<h4>Для обсуждения сотрудничества мы свяжемся с Вами в ближайшее время.</h4>
				<div className="appreciationPage__schedule">
				<div className="apprecitionPage__time work__schedule"><img src={calendar} alt="calendar" /><div className='appreciationPage__time'><p>График работы компании:</p><p><span>с Пн по Пт</span></p></div></div>
				<div className="appreciationPage__timeMCK work__schedule"><img src={watch} alt="watch" /><div className='appreciationPage__time'><p>По нашему местному и московскому времени в г.Йошкар-Ола: </p><p><span>с 09:00 до 18:00</span></p></div></div></div>
				<div className="appreciationPage__body-descrip"> <p>Если Вы оставили заявку в нерабочее время или в выходной/праздничный день — мы перезвоним Вам в ближайший рабочий день.</p></div>
				<h3>А пока ближе познакомьтесь с командой</h3>
				<div className='appreciationPage__social-network'>
					<div className="appreciationPage__network all-social-style"><p>О жизни проекта в соц.сетях:</p> <div className="social__icons"> <a href="/"> <img src={instagram} alt="instagram" /></a> <a href="/"> <img src={vk} alt="vk" /></a></div></div>
					<div className="appreciationPage__icon all-social-style"><p>Главный сайт бренда:</p><div className="social__icons"><img className="icon" src={logo} alt="logo" /></div></div>
				</div>
				<h2>Skinlav — это настоящее проявление любви и заботы о коже.</h2>
					 <button className="appreciationPage__btn" onClick={handleSubmit}>Вернуться на основную страницу</button>
				<div className="appreciationPage__img"><div className="appreciationPage__name"><p>Олег Коноплев</p> <span> Директор по развитию Skinlav в СНГ</span></div> <img src={foto} alt="foto" /></div>
				
			</div>
		</div>
		</div>
	)
}

export default AppreciationPageUniversal;