import { useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import type { WizardStepsProps, ContentProps } from './@types';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import WizardNav from './WizardNav'

import style from "./style.module.css"

const Wizard = ({ steps, }: { steps: WizardStepsProps }): JSX.Element => {


  const draggableRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

  const handleStepChange = (index: number) => {
    activeStep != index && setActiveStep(index);
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
    <div className={style.card}>
      <WizardNav {...{ steps, activeStep, handleStepChange }} />
      {!isDesktop ?
        <Draggable
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
    <div {...rest}
      ref={draggableRef}
      className={style.content}
    >
      <h2>{steps[activeStep - 1].title}</h2>
      <p>
        {steps[activeStep - 1].description}
      </p>
      <div className={style.contentMain}>
        {steps[activeStep - 1].page}
      </div>
    </div>
  );
}


export default Wizard
