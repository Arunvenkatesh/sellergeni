import React from 'react';
import '../styles/textInput.css';
import { map } from 'lodash';
function TextInput({
  value,
  onTextChange,
  suggestions,
  onSuggestionSelect,
  selectedSuggestion,
  onSuggestionRemove
}) {
  return (
    <div className='container'>
      <div className='selected-suggestion-container'>
        {map([...new Set(selectedSuggestion)], selectedWord => {
          return (
            <div className='selected-suggestion'>
              <p className='selected-suggestion-word'>{selectedWord}</p>
              <p className='suggestion-close' onClick={() => onSuggestionRemove(selectedWord)}>
                X
              </p>
            </div>
          );
        })}
      </div>
      <input
        type='text'
        className='input-box'
        value={value}
        onChange={e => {
          onTextChange(e);
        }}
      />
      <div className='suggestion-container'>
        {map(suggestions, suggestion => {
          return (
            <p
              className='suggestion-word'
              onClick={e => {
                onSuggestionSelect(e);
              }}
            >
              {suggestion}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default TextInput;
