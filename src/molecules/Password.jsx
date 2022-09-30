import Input_password from '../atoms/Input_password'
import Label from '../atoms/Label';
function Password() {
    return ( 
        <div className="container">
            <label htmlFor="passsword">Ingresa tu contrasena: </label>
            <Input_password></Input_password>            
        </div>
     );
}

export default Password;