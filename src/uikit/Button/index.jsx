
import "./Button.css";

const Button = ({children, icon, ...props}) => {

   return (
      <div className="button">
         <button className="btn" {...props}>
            {children}
            <img src={icon} alt="icon" className="arrow-icon"/>
         </button>
      </div>
   )
}

export default Button;