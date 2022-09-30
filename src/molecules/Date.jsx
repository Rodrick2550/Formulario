import Input_date from '../atoms/Input-date'
import Label from '../atoms/Label'
function Date() {
    return ( 
       <div className="container">
             <label htmlFor="">Ingresa la fecha de registro: </label>
             <Input_date></Input_date>
            
       </div>
     );
}

export default Date;