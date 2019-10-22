import React, {FC} from 'react';
import {Button} from "../../types";
import {Icon} from "semantic-ui-react";

export interface BackButtonProps extends Button {}

export const BackButton: FC<BackButtonProps> = ({onClick}) =>
  <Icon data-testid="back-button" name={'chevron left'} onClick={onClick}/>;
