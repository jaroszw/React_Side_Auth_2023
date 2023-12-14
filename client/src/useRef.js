import { useRef } from 'react';

const TextInputWithFocusButton = () => {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` wskazuje na zamontowany element kontrolki formularza
    inputEl.current.focus();
  };
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>
        Ustaw skupienie na kontrolce formularza
      </button>
    </div>
  );
};

export default TextInputWithFocusButton;
