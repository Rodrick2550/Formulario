import Input_text from '../atoms/Input-text'

function Data() {
    return ( <div className="container">
        <label>Ingresa tu nombre: </label>
        <Input_text></Input_text>

    </div> );
}
export function apellido() {
    return ( 
        <div className="container">
            <label>Ingresa tu apellido: </label>
        <Input_text></Input_text>
        </div>
     );
}




export default Data;