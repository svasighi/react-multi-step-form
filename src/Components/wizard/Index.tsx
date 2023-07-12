import WizardNav from './WizardNav'
import type { WizardStepsProps } from './@types';
import "./style.css"

const Wizard = (props: WizardStepsProps): JSX.Element => {
  return (
    <div className="card">
      <div className="sidebar">
        <WizardNav {...props} />
      </div>
      <div className="content">
        <h2 className="title">{props.steps[props.activeStep - 1].title}</h2>
        <p className="description">
          {props.steps[props.activeStep - 1].description}
        </p>
        <div className="content-main">
          {props.steps[props.activeStep].page}
        </div>
      </div>
    </div>
  )
}
export default Wizard