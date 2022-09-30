import Input_tel from '../atoms/Input-tel'
import Label from '../atoms/Label';
function Telephone() {
    return ( 
        <div className="container">
            <label htmlFor="telephone">Ingresa tu numero de telefono: </label>
            <Input_tel></Input_tel>
        </div>
     );
}

export default Telephone;