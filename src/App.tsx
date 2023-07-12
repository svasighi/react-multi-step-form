import './App.css';
import Wizard from './Components/wizard/Index'
import Addons from './Pages/Addons';
import Info from './Pages/Info';
import Plan from './Pages/Plan';
import Summary from './Pages/Summary';

const WizardSteps = [
  { id: 1, description: "Step 1", title: 'Info', name: "Your info", page: <Info /> },
  { id: 2, description: "Step 2", title: 'Plan', name: "Select plan", page: <Plan /> },
  { id: 3, description: "Step 3", title: 'Add-ons', name: "Add-ons", page: <Addons /> },
  { id: 4, description: "Step 4", title: 'Summary', name: "Summary", page: <Summary /> },
]


function App() {

  return (
    <div className="App">
      <Wizard steps={WizardSteps} />
    </div>
  );
}

export default App;
