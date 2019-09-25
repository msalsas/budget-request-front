import React from 'react';
import Constants from '../Constants';
import { useLocalStorage } from '../utils/LocalStorage';
import { updateBudget } from '../utils/BudgetAPI';
import NextBackButtons from './NextBackButtons';

const Form3 = props => {
    const [selected, setSelected] = useLocalStorage('selected', null);
    const {setSuccess, setError, setStep, id, title, description, category, email, telephone, address, setCategory} = props;

    function validate() {
        return category;
    }

    function send() {
        updateBudget(id, getBudget(), (error, response) => {
            if (response && response.statusCode < 300) {
                setSuccess(true);
            } else {
                console.log('error: ' + error);
                setError(error.error);
            }
        });
    }

    function getBudget() {
        return {
            title,
            description,
            category,
            email,
            telephone,
            address,
        };
    }

    function renderCategoryOptions() {
        const categories = Constants.categories;
        return Object.keys(categories).map((index) =>
            <option key={index} value={index}>{categories[index]}</option>
        )
    }

    function setSelectedOption(event) {
        const categories = Constants.categories;
        const index = event.target.value;
        setSelected(index);
        setCategory(categories[index]);
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
                    <label className="title-label">¿Qué categoría tiene el trabajo?</label>
                    <div className="form-field form-group category">
                        <label id="category-label">Categoría</label>
                        <div className="row">
                            <div className="category col-sm-6 col-xs-12 one-line-height">
                                <select defaultValue={selected} onChange={setSelectedOption}>
                                    {renderCategoryOptions()}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NextBackButtons step={3} setStep={setStep} validate={validate} send={send} />

        </div>
    );
};

export default Form3;