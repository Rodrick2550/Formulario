import Input_email from "../atoms/Input-email";
import Label from "../atoms/Label";
function Email() {
    return (  
        <div className="container">
            <label htmlFor="email">Ingresa tu Email: </label>
            <Input_email></Input_email>
                
        </div>
    );
}

export default Email;
