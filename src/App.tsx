import { useState } from 'react';
import Button from './components/Button/Button';
import ResultContainer from './components/ResultContainer/ResultContainer';
import Search from './components/Search/Search';

/**
 * - un search dove scrivi roba
 * - pulsante di submit
 * - container che visualizza il risultato
 */

const App = () => {

  // states layer
  const [ text, setText ] = useState<string>('');

  // handlers layer
  const searchHandler = (text: string): void => setText(text);

  const buttonHandler = (e: MouseEvent<HTMLButtonElement>) => {};

  return (
    <>
      <Search
        value={text}
        onChange={searchHandler}/>
      <Button
        text={'ciao'}
        onClick={() => null}/>
      <ResultContainer/>
    </>
  );

};

export default App;
