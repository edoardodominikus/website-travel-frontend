import React, {useState} from 'react'
import propTypes from 'prop-types'
export { default as Controller } from './Controller';
export { default as MainContent } from './MainContent';
export { default as Meta } from './Meta';
export { default as Numbering } from './Numbering';

export default function Stepper(props) {
    const {steps, initialStep} = props;
    const stepsKeys = Object.keys(steps);
    
    const [CurrentStep, setCurrentStep] = useState(
        stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
    );
    const totalStep = Object.keys(steps).length;
    const indexStep = stepsKeys.indexOf(CurrentStep);

    function prevStep(){
        if(+indexStep > 0) setCurrentStep(stepsKeys);
    }
    function nextStep(){
        if(+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep+1]);
    }
  return (
    <div>{props.children(prevStep,nextStep,CurrentStep,steps)}</div>
  )
}

Stepper.propTypes = {
    data: propTypes.object.isRequired,
    initialStep: propTypes.string.isRequired
}
