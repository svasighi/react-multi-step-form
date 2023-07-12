import WizardNav from './WizardNav'
import type { WizardStepsProps } from './@types';
import { useState } from 'react'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import "./style.css"

const Wizard = ({ steps, }: { steps: WizardStepsProps }): JSX.Element => {

  const [activeStep, setActiveStep] = useState(1);

  const handleStepChange = (index: number) => {
    activeStep != index ? setActiveStep(index) : void 0;
  }

  const dragHandler = (e: DraggableEvent, data: DraggableData): void => {

    data.node.style.rotate = `${360 + ((data.y < 0) ? (data.x / 50) : (-1 * data.x / 50))}deg`;

  }

  const stopHandler = (e: DraggableEvent, data: DraggableData): void => {

    if (data.node.offsetWidth + Math.abs(data.x) >= window.innerWidth) {
      if (data.x < 0) {
        activeStep > 1 && handleStepChange(activeStep - 1)
      } else {
        activeStep < steps.length && handleStepChange(activeStep + 1)
      }
      data.node.style.transform = 'translate(0px, 0px)';
    }
    data.node.style.rotate = `360deg`;

  }
  return (
    <div className="card">
      <div className="sidebar">
        <WizardNav {...{ steps, activeStep, handleStepChange }} />
      </div>
      <Draggable
        handle=".content"
        scale={1.6}
        position={{ x: 0, y: 0 }}
        onDrag={dragHandler}
        onStop={stopHandler}
      >

        <div className="content" >
          <h2 className="title">{steps[activeStep - 1].title}</h2>
          <p className="description">
            {steps[activeStep - 1].description}
          </p>
          <div className="content-main">
            {steps[activeStep - 1].page}
          </div>
        </div>
      </Draggable>
    </div >
  )
}
export default Wizard