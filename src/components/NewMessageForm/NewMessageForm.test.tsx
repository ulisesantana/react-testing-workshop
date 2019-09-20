import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import {NewMessageForm} from './';

describe('<NewMessageForm />', () => {
  let getByTestId: any;

  afterEach(cleanup);

  describe('clicking the send button', () => {
    beforeEach(() => {
      ({ getByTestId } = render(<NewMessageForm />));

      fireEvent.change(
        getByTestId('messageText'),
        {
          target: {
            value: 'New message',
          },
        },
      );

      fireEvent.click(getByTestId('sendButton'));
    });

    it('clears the text field', () => {
      expect(getByTestId('messageText').value).toEqual('');
    });
  });
});
