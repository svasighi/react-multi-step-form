import WizardNav from './WizardNav'
import { useMediaQuery } from 'react-responsive'
import type { WizardStepsProps, ContentProps } from './@types';
import { useState, useRef } from 'react'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import "./style.css"

const Wizard = ({ steps, }: { steps: WizardStepsProps }): JSX.Element => {


  const draggableRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 910px)' })
  const handleStepChange = (index: number) => {
    activeStep != index ? setActiveStep(index) : void 0;
  }

  const dragHandler = (e: DraggableEvent, data: DraggableData): void => {
    data.node.style.rotate = `${((data.y < 0) ? (data.x / 50) : (-1 * data.x / 50))}deg`;
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
    data.node.style.rotate = `0deg`;
  }

  return (
    <div className="card">
      <div className="sidebar">
        <WizardNav {...{ steps, activeStep, handleStepChange }} />
      </div>
      {isTabletOrMobile ? <Draggable
        scale={1.6}
        position={{ x: 0, y: 0 }}
        onDrag={dragHandler}
        onStop={stopHandler}
        nodeRef={draggableRef}
      >
        <Content steps={steps} activeStep={activeStep} draggableRef={draggableRef} />
      </Draggable>
        : <Content steps={steps} activeStep={activeStep} draggableRef={draggableRef} />
      }

    </div >
  )
}

const Content = ({ steps, activeStep, draggableRef, ...rest }: ContentProps): JSX.Element => {
  return (
    <div {...rest} className="content" ref={draggableRef}>
      <h2 className="title">{steps[activeStep - 1].title}</h2>
      <p className="description">
        {steps[activeStep - 1].description}
      </p>
      <div className="content-main">
        {steps[activeStep - 1].page}
      </div>
    </div>
  );
}


export default Wizard
