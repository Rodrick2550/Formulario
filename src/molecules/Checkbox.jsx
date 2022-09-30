import Input_checkbox from "../atoms/Input-checkbox";
import Label from "../atoms/Label";
function Checkbox() {
    return ( <div className="container">
       <label htmlFor="checkbox">Estoy de acuerdo con la politica de privacidad</label>
       <Input_checkbox></Input_checkbox>
      

       
    </div> );
}

export default Checkbox;