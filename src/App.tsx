import React, { useState } from 'react'
import './App.css';
import Wizard from './Components/wizard/Index'

const WizardSteps = [
  { id: 1, description: "Step 1", title: 'string', name: "Your info", page: <></> },
  { id: 2, description: "Step 2", title: 'string', name: "Select plan", page: <></> },
  { id: 3, description: "Step 3", title: 'string', name: "Add-ons", page: <></> },
  { id: 4, description: "Step 4", title: 'string', name: "Summary", page: <></> },
]


function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="App">
      <Wizard steps={WizardSteps} activeStep={activeStep} />
    </div>
  );
}

export default App;
