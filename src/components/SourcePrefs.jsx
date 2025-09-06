import { useState } from 'react';
import Button from './Button';
import CheckBox from './CheckBox';

export default function SourcePrefs({ sourceName, onClick = () => {}, className = '' }) {
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(prev => !prev);
        onClick();
    }

    return (
        <div className={`w-fit flex flex-row justify-end items-start`}>
            <div
                className={`absolute w-fit z-1 translate-y-[-5px] translate-x-[5px]`}>
                <CheckBox 
                checked={checked ? 'on' : 'off'} 
                onClick={handleClick} />
            </div>
            <div className='relative w-fit'>
                <Button 
                variant='sources'
                checked={checked ? 'on' : 'off'}
                onClick={handleClick}
                >{sourceName}</Button>
            </div>
        </div>
    );
};
