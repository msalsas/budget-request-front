import React from 'react';

const NextBackButtons = props => {
    const {setStep, step, validate, send} = props;

    return (
        <div className="step col-xs-12">
            <div className="form-submit text-center" id="form-submit" >
                {step > 1 ?
                    <small className="form-step">
                        <a href="/" onClick={(e) => { e.preventDefault(); setStep(step - 1) } } id="previous-step" className="back btn-link">« Volver</a>
                    </small>
                    : null
                }
                <button className="btn btn-primary btn-lg next ql-submit" id="next-step"
                        onClick={(e) => { e.preventDefault(); validate() ? send ? send() : setStep(step + 1) : alert('Rellena todos los campos') }}
                >Continuar »</button>
            </div>
        </div>
    );
};

export default NextBackButtons;