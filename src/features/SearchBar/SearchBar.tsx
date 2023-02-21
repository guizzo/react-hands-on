import { ChangeEvent, KeyboardEvent } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange, onKeyPress }: SearchBarProps) => {

  return (
    <div className="search-bar">
      <input
        name="search"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyPress} />
    </div>
  );

};

export default SearchBar;
