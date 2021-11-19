import React, { useState } from 'react';
import TextInput from './components/TextInput';
function App() {
  const [inputSuggestions] = useState(['chakra', 'css', 'js', 'react', 'RN']);
  const [inputText, setinputText] = useState('');
  const [selectedSuggestion, setselectedSuggestion] = useState([]);

  function onSuggestionSelect(e) {
    if (inputSuggestions.includes(e.target.innerText)) {
      setselectedSuggestion(prevState => [...prevState, e.target.innerText]);
    }
  }
  function onSuggestionRemove(e) {
    setselectedSuggestion(selectedSuggestion.filter(item => item !== e));
  }
  function filterSuggestion(inputSuggestions, searchWord) {
    if (inputSuggestions) {
      searchWord = searchWord.toUpperCase();
      return searchWord
        ? inputSuggestions.filter(suggestion =>
            suggestion
              .trim()
              .toUpperCase()
              .includes(searchWord.trim())
          )
        : inputSuggestions;
    }
  }
  return (
    <div className='App'>
      <TextInput
        suggestions={filterSuggestion(inputSuggestions, inputText)}
        inputValue={inputText}
        onTextChange={e => {
          setinputText(e.target.value);
        }}
        selectedSuggestion={selectedSuggestion}
        onSuggestionSelect={onSuggestionSelect}
        onSuggestionRemove={onSuggestionRemove}
      />
    </div>
  );
}

export default App;
