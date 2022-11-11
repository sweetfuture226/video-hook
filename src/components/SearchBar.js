import React, {useState} from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('Building');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    return (
        <div className='search-bar ui segment'>
            <form onSubmit={onFormSubmit} className='ui form'>
                <div className='field'>
                    <label>Video Search</label>
                    <input 
                        type='text' 
                        value={term}
                        onChange={onInputChange} ></input>
                </div>
            </form>  
        </div>
    );
}

export default SearchBar