import { ChangeEvent, KeyboardEvent, useState } from 'react';
import ResultBox from './features/ResultBox/ResultBox';
import SearchBar from './features/SearchBar/SearchBar';
const { REACT_APP_API_BASE_URL } = process.env;

const App = () => {

  // textarea state
  const [ text, setText ] = useState<string>('');

  // loading state
  const [ loading, setLoading ] = useState<boolean>(false);

  // api result state
  const [ result, setResult ] = useState<any>(undefined);

  // searchbar value change handler
  const textChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => setText(e.target.value);

  // searchbar keypress handler
  const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      retrieveData();
    }
  };

  // search submit handler
  const retrieveData = async (): Promise<void> => {
    let result: any = undefined;
    setResult(result);
    setLoading(true);
    const response: Response = await fetch(`${ REACT_APP_API_BASE_URL }/pokemon/${ text }`);
    if (response && response.status === 200) {
      const data: any = await response.json();
      result = data?.sprites?.other?.dream_world?.front_default ?? null;
    } else {
      result = null;
    }
    setResult(result);
    setLoading(false);
  };

  return (
    <div id="app">
      <div className="top-bar">
        <h1>PokéSearch</h1>
        <SearchBar
          value={text}
          onChange={textChangeHandler}
          onKeyPress={keyPressHandler}/>
      </div>
      { loading && (<span>Recupero dati in corso...</span>) }
      <ResultBox
        result={result}/>
    </div>
  );

};

export default App;
