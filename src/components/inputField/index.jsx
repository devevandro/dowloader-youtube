import React, { useState } from "react";
import api from '../../api/api';
import './inputField.scss';

const InputField = () => {
    const initialValues = {
        url: '',
        format: ''
    };
    const [values, setValues] = useState(initialValues);

    const handleOnChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async () => {
        const res = await api.post('download', values);
        console.log('cacete: ', res);
    }

    return (<>
        <div className="content">
            <h2>Baixar vídeo do Youtube</h2>

            <form onChange={handleOnChange}>
                <div className="content__input">
                    <input autoComplete="off" type="text" name="url" placeholder="Cole o link do vídeo aqui" />
                    <div onClick={handleSubmit} className="content__input--btn">Converter</div>
                </div>

                <div className="content__choose">
                    <span>Escolha o formato: </span>
                    <input type="radio" name="format" value="mp3" className="content__choose--first-input" /><span className="content__choose--format-mp3">MP3</span>
                    <input type="radio" name="format" value="mp4" /><span className="content__choose--format">MP4</span>
                </div>
            </form>
        </div>
    </>);
};

export default InputField;
