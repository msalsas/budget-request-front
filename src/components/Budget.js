import React, { useState } from 'react';
import { useLocalStorage } from '../utils/LocalStorage';
import Form1 from '../components/Form1';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';
import Success from '../components/Success';

const Budget = () => {
    const [id, setId] = useLocalStorage('id', null);
    const [title, setTitle] = useLocalStorage('title', '');
    const [description, setDescription] = useLocalStorage('description', '');
    const [category, setCategory] = useLocalStorage('category', '');
    const [email, setEmail] = useLocalStorage('email', '');
    const [telephone, setTelephone] = useLocalStorage('telephone', '');
    const [address, setAddress] = useLocalStorage('address', '');
    const [step, setStep] = useLocalStorage('step', 1);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    function renderForm() {
        const props = {
            id,
            title,
            description,
            category,
            email,
            telephone,
            address,
            step,
            success,
            error,
            setId,
            setTitle,
            setDescription,
            setCategory,
            setEmail,
            setTelephone,
            setAddress,
            setStep,
            setSuccess,
            setError,
        };

        switch (step) {
            case 1:
                return <Form1 {...props} />;
            case 2:
                return <Form2 {...props} />;
            case 3:
                return <Form3 {...props} />;
            default:
                return <Form1 {...props} />;
        }
    }

    return (
        <form action="#" method="post" id="ql-form" className="budget step-1 max-1 lang-es" autoComplete="off">
            <i className="icon icon-spinner-o icon-spin hidden"/>

            <header className="quotation-form-header clearfix">
                <h2 className="t-m text-semibold">
                    Solicita presupuestos
                    <small>¡Es gratis!</small>
                </h2>
                {error ? <h2 style={{color: '#FF3344'}}>{error}</h2> : null}
                {success ? <Success setStep={setStep} setTitle={setTitle} setDescription={setDescription} setCategory={setCategory}/>
                    : renderForm()}
            </header>

        </form>
    );
};

export default Budget;