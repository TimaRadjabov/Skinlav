import SecondSectionCard from '../SecondSectionCard';
import Carusel from "../Carusel/Carusel";
import './LabCarusel.css';




const LabCarusel=()=>{	


	const pages=[
		{
			
			title: 'LAB', 
			number: "01", 
			subtitle: "LAB — лаборатория", 
			firstParag: "Бизнес-модель включает в себя услуги по диагностике и изготовление косметических средств в соответствии с индивидуальными особенностями кожи клиента.",
			secondParag: "Лаборатория оборудована в формате open space, чтобы заказчик мог наблюдать над процессом создания уходового средства.", 
			propStyle: "lab__background"
		},
		{
			
			title: "LAB Care", 
			number: "02", 
			subtitle: "LAB Care — лаборатория с косметологическим салоном неинвазивных процедур", 
			firstParag: "Бизнес-модель предусматривает открытие специальных кабинетов для оказания услуг, разрешённых к проведению без получения лицензии:",
			secondParag: <><ul className='list'>
			<li>аппаратная диагностика кожи;</li>
			<li>термолифтинг Forma;</li>
			<li>безынъекционная биоревитализация;</li>
			<li>лечение кожи головы и восстановление волос.</li>
		</ul></>,
			propStyle: "lab__care__background"
		},
		{
			
			title: "LAB plus", 
			number: "03", 
			subtitle: "LAB plus	— лаборатория с косметологическим салоном инвазивных и неинвазивных процедур	", 
			firstParag: "Бизнес-модель включает в себя две предыдущие — изготовление косметики и проведение косметологиеских процедур двух типов. Для проведения инвазивных манипуляций необходимо получить лицензию.",
			propStyle: "lab__plus__background"
		},
	];

	const coruselItem= pages.map( ({title, number, subtitle, firstParag, secondParag, propStyle}) => (

		<SecondSectionCard
			title={title}
			number={number}
			subtitle={subtitle}
			firstParag={firstParag}
			secondParag={secondParag}
			propStyle={propStyle}
			key={title}
		/>
	))
	return(
		<Carusel containerStyle={"carusel__container"} windowStyle={'window'} maskStyle={'carusel__mask'} ITEM_WIDTH={500}>
			{coruselItem}
		</Carusel>
	)
}

export default LabCarusel;