import React, { useState } from "react";
import api from '../../api/api';
import './inputField.scss';

const InputField = () => {
    const initialValues = {
        url: '',
    };
    const [values, setValues] = useState(initialValues);

    const handleOnChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async () => {
        const aux = values.url.slice(0 , 33);
        /* if(aux !== 'https://www.youtube.com/watch?v=') {
            alert('teste');
        } */
        
        const res = await api.post('download', values);
    }

    return (<>
        <div className="content">
            <h2>Converter vídeo do Youtube</h2>

            <form onChange={handleOnChange}>
                <div className="content__input">
                    <input autoComplete="off" type="text" name="url" placeholder="Cole o link do vídeo aqui" />
                    <div onClick={handleSubmit} className="content__input--btn">Converter</div>
                </div>
            </form>
        </div>
    </>);
};

export default InputField;
