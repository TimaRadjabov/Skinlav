
import moleculs from "../../uikit/static/sixth-section/moleculs.svg";
import "./sixthSection.css";
import CreamCarusel from "../../components/CreamCarusel/CreamCarusel";

const SixthSection = () =>{

   return (
      <section className="sixth__section">
      <div className="wrapper">
        <div className="sixth__section-body">
          <div className="text-container">
            <CreamCarusel />
            <img src={moleculs} alt="moleculs" className="background__photo" />
          </div>
          
        </div>
      </div>
    </section>
   )
}

export default SixthSection;