export type WizardStepsProps = {
  id: number,
  name: string,
  title: string,
  description: string,
  page: JSX.Element,
}[];

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: WizardStepsProps;
  activeStep: number;
  draggableRef: React.RefObject<HTMLDivElement>;
}
