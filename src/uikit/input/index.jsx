import "./Input.css";
import { useField } from "formik";

const Input = ({ type, placeholder, icon, maxLength, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className={meta.error&& meta.touched ? "input__error" : "input"}>
      <img src={icon} alt="icon" className="form__icon"/>
      <input
        type={type}
        placeholder={placeholder}
        className={"input-field"}
        autoComplete="off"
        maxLength={maxLength}
        {...field}
        {...props}
      />
    </div>
  );
};

export default Input;
