import Data from '../molecules/Text'
import Checkbox from '../molecules/Checkbox';
import Date from '../molecules/Date'
import Email from '../molecules/Email'
import Password from '../molecules/Password'
import Submit from '../molecules/Submit'
import Tel from '../molecules/Tel'
import Url from '../molecules/Url'
import Apellido from '../molecules/Text'
function Form() {
    return ( 
        <div  className='template'>
            <Data></Data>
            <Apellido></Apellido>
            <Email></Email>
            <Password></Password>
            <Tel></Tel>
            <Date></Date>
            <Url></Url>
            <Checkbox></Checkbox>
            <Submit></Submit>


        </div>
        
        
     );
}

export default Form;