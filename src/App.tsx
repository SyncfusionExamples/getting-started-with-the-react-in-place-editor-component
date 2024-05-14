import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import './App.css';

const textModel: object = { placeholder: 'Enter your name' };
const dateModel: object = { showTodayButton: true, placeholder: 'Select date of birth' };
const dateValue: Date = new Date('04/12/2018');
const genderData: string[] = ['Male', 'Female'];
const genderModel: object = {  dataSource: genderData, placeholder: 'Select gender' };
function App() {
  return (
    <div className="App">
      <h4> Modify the details </h4>
      <table>
      <tr>
          <td>Name</td>
          <td>
              <InPlaceEditorComponent type='Text' 
              model={textModel} value='Andrew'/>
          </td>
      </tr>
      <tr>
          <td>Date of Birth</td>
          <td ><InPlaceEditorComponent type="Date" 
           value={dateValue} model={dateModel}/></td>
      </tr>
      <tr>
          <td>Gender</td>
          <td><InPlaceEditorComponent  type="DropDownList" 
           value='Male' model={genderModel}
           mode='Inline' data-underline='false' 
           /></td>
      </tr>
      </table>
      
    </div>
  );
}

export default App;
