import React from 'react';

const Success = props => {
    const {setStep, setTitle, setDescription, setCategory} = props;

    setStep(1);
    setTitle('');
    setDescription('');
    setCategory(null);

    return (

        <div className="success row" id="success">
            <div className="progress-container ">
                <div className="col-lg-12 col-md-12">
                    <div className="clearfix">
                        <div className="progress hab-progress-bar unique quotation-progress low">
                            <div className="progress-bar" role="progressbar" style={{'width': '100%'}}>
                                <span className="sr-only">100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="success col-xs-12">
                <div className="fields">
                    <h2>¡Solicitud recibida!</h2>
                    <h3 style={{padding: '30px', textAlign: 'center'}}>Gracias por confiar en nosotros. En breve nos pondremos en contacto contigo</h3>
                </div>
            </div>
        </div>
    );
};

export default Success;