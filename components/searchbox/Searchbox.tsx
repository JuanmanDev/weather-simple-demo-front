import React, { FunctionComponent, KeyboardEventHandler, useState } from 'react';

// import styles from '../styles/Home.module.css';

type SearchboxProps = {
  onEnter(string): void;
  placeHolder?: string;
};

const searchBox: FunctionComponent<SearchboxProps> = ({ onEnter, placeHolder }: SearchboxProps) => {
  const [ value, setValue ] = useState('');

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onEnter(value);
    }

    return true;
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <input type="text"
        id="fname"
        name="searchbox"
        placeholder={ placeHolder }
        value={ value }
        onChange={ handleChange }
        onKeyDown={ handleKeyDown } />
  );
};

export default searchBox;
