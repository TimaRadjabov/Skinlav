import "./Circle.css";

const Circle = ({ title, subtitle, className, bolt, subtitleStyle}) => {
  return (
    <div className={className}>
      <h2 className={`circle__title`}>{title}</h2>
      <h4 className={`circle__subtitle ${subtitleStyle}`}>{subtitle}</h4>
      <p className="circle__text">{bolt}</p>
    </div>
  );
};

export default Circle;