import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../uikit/input";
import Button from "../../uikit/Button";
import phoneIcon from "../../uikit/static/first-section/phone-icon.svg";
import emailIcon from "../../uikit/static/first-section/email-icon.svg";
import nameIcon from "../../uikit/static/first-section/name-icon.svg";
import arrowIcon from "../../uikit/static/first-section/arrow-icon.svg";
import "./Authorization.css";


const Authorizaton = ({ className, children }) => {
  const validationSchema = Yup.object({
    phone: Yup.string().min(18).required("required"),
    email: Yup.string().email("Invalid email").required("required"),
    name: Yup.string().required("required"),
  });


  const getNumberValue = (input) => {
    return input.value.replace(/\D/g, "");
  };
  const onPhoneInput = (e) => {
    let input = e.target;
    let inputValue = getNumberValue(input);
    let formatedInputValue = "";
    let selectionStart = input.selectionStart;

    if (!inputValue) {
      return (input.value = "");
    }
    if (input.value.length !== selectionStart) {
      if (e.nativeEvent.data && /\D/g.test(e.data)) {
        input.value = inputValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputValue[0] > -1)) {
      if (inputValue === "9") {
        inputValue = "7" + inputValue;
      }
      let firstSymbol = inputValue[0] == "8" ? "8" : "+7";
      formatedInputValue = firstSymbol + " ";
      if (inputValue.length > 1) {
        formatedInputValue += "(" + inputValue.substring(1, 4);
      }
      if (inputValue.length >= 5) {
        formatedInputValue += ") " + inputValue.substring(4, 7);
      }
      if (inputValue.length >= 8) {
        formatedInputValue += "-" + inputValue.substring(7, 9);
      }
      if (inputValue.length >= 10) {
        formatedInputValue += "-" + inputValue.substring(9, 11);
      }
    } else {
      formatedInputValue = "+" + inputValue.substring(0, 16);
    }
    input.value = formatedInputValue;
  };
  const onPhoneKeyDown = (e) => {
    let input = e.target;
    if (e.keyCode === 8 && getNumberValue(input).length === 1) {
      input.value = "";
    }
  };
  return (
    <div className="first-section__form">
      <Formik
        initialValues={{
          phone: "",
          email: "",
          name: "",
        }}
        validateOnBlur
        onSubmit={(value, { setSubmitting, resetForm }) => {
          console.log(value);
          resetForm();
          setSubmitting(false);
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleBlur, isValid, handleSubmit }) => {
          return (
            <Form className={className}>
              <Input
                type="tel"
                placeholder="+7 (___) ___ ____"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                icon={phoneIcon}
                onInput={onPhoneInput}
                onKeyDown={onPhoneKeyDown}
                maxLength="18"
              />
              <Input
                type="email"
                placeholder="bestpartner@skinlav.ru"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                icon={emailIcon}
              />
              <Input
                type="text"
                placeholder="Олег Коноплёв"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                icon={nameIcon}
              />
              <Button
                disabled={!isValid}
                onClick={handleSubmit}
                type="submit"
                children={children}
                icon={arrowIcon}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Authorizaton;
