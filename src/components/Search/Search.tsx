import { ChangeEvent } from 'react';

interface SearchProps {
  value: string;
  onChange: (text: string) => void;
}

const Search = ({ value, onChange }: SearchProps) => {

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => onChange(e.target.value);

  return (
    <input
      type="text"
      value={value}
      onChange={changeHandler}/>
  );

};

export default Search;
