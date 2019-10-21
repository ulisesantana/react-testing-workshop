import React, {FC, FormEventHandler} from "react";
import {Button} from "semantic-ui-react";

export interface FormButton {
  editMode?: boolean
  onClick: FormEventHandler
}

export const FormButton: FC<FormButton> = ({editMode, ...props}) =>
  <Button
    color={editMode ? "blue" :"green"}
    type='submit'
    {...props}>
    {editMode ? 'Save' : 'Create'}
  </Button>;
