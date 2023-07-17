import type { WizardStepsProps } from './@types';

import style from "./style.module.css"
import classNames from 'classnames';


export default function WizardNav({ steps, activeStep, handleStepChange }
  : { steps: WizardStepsProps, activeStep: number, handleStepChange: (arg0: number) => any }) {
  return (
    <div className={style.sidebar}>
      <div className={style.items}>
        {steps.map((step) => (
          <WizardNavItem
            key={step.id}
            step={{ id: step.id, name: step.name }}
            handleStepChange={handleStepChange}
            active={step.id == activeStep} />
        ))}
      </div>
    </div>)

}

export function WizardNavItem({ step, active = false, handleStepChange }
  : { step: { id: number, name: string }, active?: boolean, handleStepChange: (arg0: number) => any }) {
  return (
    <div className={classNames(style.item, active ? style.active : '')}
      onClick={() => handleStepChange(step.id)}  >
      <span className={style.index}>{step.id}</span>
      <div className={style.desc}>
        <span> STEP {step.id}</span>
        <p>{step.name}</p>
      </div >
    </div >)
}
