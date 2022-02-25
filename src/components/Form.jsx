import React, { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [checked, setChecked] = useState('');

    const currencies = ['USD', 'RUB', 'EUR'];

    const onSaveBtnClick = (evt) => {
        evt.preventDefault();
    
        if (inputValue !== '' && checked !== '') {
            localStorage.setItem('textValue', inputValue);
            localStorage.setItem('currencyValue', checked);
            setInputValue('');
            setChecked('');
            alert('Данные успешно сохранены!');
        } else {
            alert('Заполните все поля!');
        }
    };

    const onLoadBtnClick = (evt) => {
        evt.preventDefault();
    
        const textValue = localStorage.getItem('textValue');
        const currencyValue = localStorage.getItem('currencyValue');
    
        setInputValue(textValue);
        setChecked(currencyValue);
    };
    
    return (       
        <form>
            <fieldset>
                <label htmlFor="text-input">Введите текст:</label>
                <input type="text" name="text" id="text-input" placeholder="Текст" value={inputValue} onChange={(evt) => setInputValue(evt.target.value)}/>
            </fieldset>

            <fieldset className="radio-group">
                <legend>Выберите валюту</legend>

                {currencies.map((item) => (
                    <p key={item}>
                        <input type="radio" id={'currency-' + item.toLowerCase()} name="currency" value={item} checked={checked === item} onChange={() => setChecked(item)}/>
                        <label htmlFor={'currency-' + item.toLowerCase()}>{item}</label>
                    </p>
                ))}
        
            </fieldset>

            <button onClick={onSaveBtnClick} id="save-btn" type="button">Save</button>
            <button onClick={onLoadBtnClick} id="load-btn" type="button">Load</button>
        </form>
    );
};

export default Form;
