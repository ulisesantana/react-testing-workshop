import React, {ButtonHTMLAttributes, ChangeEventHandler, MouseEventHandler, useState} from "react";

export const NewMessageForm: React.FC = () => {
  const [ text, setText ] = useState('');
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
      setText(value);
    };
  const onSendHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
      e.preventDefault();
      setText('');
    };
  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={onChangeHandler}
        data-testid="messageText"
      />
      <button
        onClick={onSendHandler}
        type="submit"
        data-testid="sendButton">
        Send
      </button>
    </form>
  )
}
