import type { WizardStepsProps } from './@types';

import style from "./style.module.css"

export default function WizardNav({ steps, activeStep, handleStepChange }
  : { steps: WizardStepsProps, activeStep: number, handleStepChange: (arg0: number) => any }) {
  return (
    <div className={style.sidebar}>
      <div className={style.steps}>
        {steps.map((step) => (
          <WizardNavItem key={step.id} step={{ id: step.id, name: step.name }} handleStepChange={handleStepChange} active={step.id == activeStep} />
        ))}
      </div>
    </div>)

}

export function WizardNavItem({ step, active = false, handleStepChange }
  : { step: { id: number, name: string }, active?: boolean, handleStepChange: (arg0: number) => any }) {
  return (
    <div onClick={() => handleStepChange(step.id)} className={`${style['step-item']} ${active ? style['active'] : ''}`} >
      <span className={style["step-item-number"]}>{step.id}</span>
      <div className={style["step-item-details"]} >
        <span> STEP {step.id}</span>
        <p>{step.name}</p>
      </div >
    </div >)
}
