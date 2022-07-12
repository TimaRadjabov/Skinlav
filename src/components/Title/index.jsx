import "./Title.css";

const Title = ({title, subtitle, className}) => {
  return (
    <>
      <h1 className={`first-section__title ${className}`}>
        {title}
      </h1>
      <h3 className={`first-section__subtitle ${className}`}>
        {subtitle}
      </h3>
    </>
  );
};

export default Title;