import Input_url from '../atoms/Input-url'
import Label from '../atoms/Label';

function URL() {
    return ( <div className="container">
         <label htmlFor="url">Ingresa la URL que se te fue proporcionada: </label>
         <Input_url></Input_url>



    </div> );
}


export default URL;