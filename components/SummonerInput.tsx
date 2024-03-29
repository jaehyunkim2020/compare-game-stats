import React from 'react';
import { isValidPlayerName } from '@/utils/validation/playerNameValidation';

type Props = {
    index: number;
    value: string;
    region: string;
    onChange: (value: string) => void;
    onRegionChange: (region: string) => void;
};

const SummonerInput: React.FC<Props> = ({ index, value, region, onChange, onRegionChange }) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    };
    
    return (
        <div className='flex items-center border rounded-md overflow-hidden shadow-md bg-white'>
            <select value={region} onChange={e => onRegionChange(e.target.value)} className='text-black text-center'>
                <option value="na1">NA</option>
                <option value="euw1">EU W</option>
                <option value="eun1">EU NE</option>
                <option value="kr">KR</option>
                {/*... other regions */}
            </select>
            <input
                placeholder="Enter summoner name..."
                value={value}
                onChange={handleInputChange}
                className='flex-grow px-4 py-2 bg-transparent appearance-none border-none focus:outline-none text-black'
            />
        </div>
    );
}

export default SummonerInput;
