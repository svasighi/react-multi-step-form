import React from 'react'
import type { WizardStepsProps } from './@types';

export default function WizardNav({ steps, activeStep }: WizardStepsProps) {
  return (
    <div className="steps">
      {steps.map((step) => (
        <WizardNavItem key={step.id} step={{ id: step.id, name: step.name }} active={step.id == activeStep} />
      ))}
    </div>)

}

export function WizardNavItem({ step, active = false }: { step: { id: number, name: string }, active?: boolean }) {
  return (
    <div className={`step-item ${active && "active"}`} >
      <span className="step-item-number">{step.id}</span>
      <div className="step-item-details">
        <span>STEP {step.id}</span>
        <p>{step.name}</p>
      </div>
    </div >)
}
