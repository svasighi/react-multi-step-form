export type WizardStepsProps = {
  steps: {
    id: number,
    title: string,
    description: string,
    page: JSX.Element,
    name: string,

  }[];
  activeStep: number;
};
