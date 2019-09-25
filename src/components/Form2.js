import React from 'react';
import Constants from '../Constants';
import { useLocalStorage } from '../utils/LocalStorage';
import { createBudget, suggestCategory } from '../utils/BudgetAPI';
import NextBackButtons from './NextBackButtons';

const Form2 = props => {
    const {setError, setStep, title, description, email, telephone, address, setId, setEmail, setTelephone, setAddress, setCategory} = props;
    const [suggesting, setSuggesting] = useLocalStorage('selected', null);
    const [selected, setSelected] = useLocalStorage('selected', null);

    function validate() {
        return email && telephone && address;
    }

    function validateEmail() {
        if (isHotmail(email)) {
            alert('hotmail no está permitido. Lo sentimos');

            return false;
        }

        return true;
    }

    function getBudget() {
        return {
            title,
            description,
            email,
            telephone,
            address,
        };
    }

    function isHotmail(email) {
        return email.indexOf('@hotmail') !== -1;
    }

    function send() {
        createBudget(getBudget(), (error, response, body) => {
            if (response && response.statusCode < 300) {
                setId(body);
                setSuggesting(true);
                suggest(body);
            } else {
                console.log('error: ' + error);
                setError(error.error);
            }
        });
    }

    function suggest(id) {
        const categories = Constants.categories;
        suggestCategory(id, (err, response, text) => {
            const suggested = Object.keys(categories).find(key => categories[key] === text);
            setSelected(suggested);
            setCategory(text);
            setStep(3);
            setSuggesting(false);
        });
    }

    return (

        <div className="steps row" id="steps">
            <div className="progress-container ">
                <div className="col-lg-12 col-md-12">
                    <div className="clearfix">
                        <div className="progress hab-progress-bar unique quotation-progress low">
                            <div className="progress-bar" role="progressbar" style={{'width': '50%'}}>
                                <span className="sr-only">50%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step col-xs-12">
                <div className="fields">
                    <label className="title-label">Indica tu email</label>
                    <div className="form-field form-group p_email">
                        <label id="email-label">email</label>
                        <div className="row">
                            <div className="email col-sm-6 col-xs-12 one-line-height">
                                <input type="email" id="email" name="email" size="6" className="form-control" autoComplete="nope"
                                       value={email}
                                       onChange={event => setEmail(event.target.value)}
                                />&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step col-xs-12">
                <div className="fields">
                    <label className="title-label">Indica un teléfono de contacto</label>
                    <div className="form-field form-group p_telephone">
                        <label id="telephone-label">Teléfono</label>
                        <div className="row">
                            <div className="telephone col-sm-6 col-xs-12 one-line-height">
                                <input type="text" id="telephone" name="telephone" size="6" className="form-control" autoComplete="nope"
                                       value={telephone}
                                       onChange={event => setTelephone(event.target.value)}
                                />&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="step col-xs-12">
                <div className="fields">
                    <label className="title-label">Indica tu dirección</label>
                    <div className="form-field form-group address">
                        <label id="address-label">Dirección</label>
                        <div className="row">
                            <div className="address col-sm-6 col-xs-12 one-line-height">
                                <input id="address" type="text" name="address" size="6" className="form-control" autoComplete="nope"
                                       value={address}
                                       onChange={event => setAddress(event.target.value)}
                                />&nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {suggesting && !selected ? 'Loading...' : <NextBackButtons step={2} setStep={setStep} send={send} validate={() => { return validateEmail() && validate() }} />}

        </div>
    );
};

export default Form2;