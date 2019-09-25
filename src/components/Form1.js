import React from 'react';
import NextBackButtons from './NextBackButtons';

const Form1 = props => {
    const {setStep, title, description, setTitle, setDescription} = props;

    function validate() {
        return description;
    }

    return (

        <div className="steps row" id="steps">
            <div className="progress-container ">
                <div className="col-lg-12 col-md-12">
                    <div className="clearfix">
                        <div className="progress hab-progress-bar unique quotation-progress low">
                            <div className="progress-bar" role="progressbar" style={{'width': '25%'}}>
                                <span className="sr-only">25%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step col-xs-12">
                <div className="fields">
                    <label className="title-label">Título de la solicitud</label>
                    <div className="form-field form-group p_title">
                        <label id="title-label">Título</label>
                        <div className="row">
                            <div className="title col-sm-6 col-xs-12 one-line-height">
                                <input type="title" id="title" name="title" size="6" className="form-control" autoComplete="nope"
                                       value={title}
                                       onChange={event => setTitle(event.target.value)}
                                />&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step col-xs-12">
                <div className="fields">
                    <label className="title-label">¿Qué trabajo quieres solicitar?</label>
                    <div className="form-field form-group p_description">
                        <label id="description-label">Descripción</label>
                        <div className="row">
                            <div className="description col-sm-6 col-xs-12 one-line-height">
                                <textarea id="description" name="description" size="6" className="form-control" autoComplete="nope"
                                          value={description}
                                          onChange={event => setDescription(event.target.value)}
                                />&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NextBackButtons step={1} setStep={setStep} validate={validate} />
        </div>
    );
};

export default Form1;