import React, {Component, FormEventHandler} from "react";
import {Asset, Holder} from "../../../types";
import {Button, Form, Icon} from "semantic-ui-react";
import {onChangeFormFieldHandler, toOptions} from "../../../utils";
import {TransferPayload} from "../../../store";
import {FormButton} from "../../atoms/FormButton";
import {Modal} from "../../atoms/Modal";

export interface AssetFormProps {
  asset?: Asset,
  holders: Record<string, Holder>,
  onSubmit: (x: Asset | TransferPayload) => void
}

const initialState = {
  name: '',
  notes: '',
  blocked: false,
  serial: '',
  assignedTo: false,
  observations: ''
};

export interface AssetFormState extends Asset {
  observations: string
}

export class AssetForm extends Component<AssetFormProps, AssetFormState> {
  editMode = this.props.asset !== undefined;
  state = this.editMode
    ? {...this.props.asset, observations: ''} as AssetFormState
    : initialState as AssetFormState;


  options = toOptions(this.props.holders);

  onChangeHandler = onChangeFormFieldHandler(
    this.state,
    (x: Holder) => {
      this.setState(x)
    }
  );

  onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const from = this.editMode
      ? this.props.asset!.assignedTo
      : null;

    if (from === this.state.assignedTo) {
      this.props.onSubmit(this.state);
    } else {
      this.props.onSubmit({
          ...this.state,
          from,
          to: this.state.assignedTo
        } as TransferPayload
      );
    }

    if (!this.editMode) {
      this.setState(initialState)
    }
  };

  render() {

    return (
      <Modal
        title={`${this.editMode ? 'Edit' : 'Add'} Asset`}
        cta={
          <Button data-testid="open-asset-form-button" color={this.editMode ? undefined : 'green'}>
            <Icon name={this.editMode ? 'edit' : 'plus'}/>
            {`${this.editMode ? 'Edit' : 'Add'} Asset`}
          </Button>
        }
      >
        <Form data-testid="asset-form" onSubmit={this.onSubmit}>
          <Form.Input
            name="name"
            data-testid="name"
            value={this.state.name}
            required
            pattern="[A-z0-9]"
            onChange={this.onChangeHandler}
            placeholder='Full Name'
            label='Full Name'
          />
          <Form.TextArea
            name="notes"
            data-testid="notes"
            value={this.state.notes}
            onChange={this.onChangeHandler}
            placeholder='Observations'
            label='Notes'
          />
          <Form.Checkbox
            name="blocked"
            data-testid="blocked"
            checked={this.state.blocked}
            onChange={this.onChangeHandler}
            label='Blocked'
          />
          <Form.Input
            name="serial"
            data-testid="serial"
            required
            pattern="[A-z0-9]"
            value={this.state.serial}
            onChange={this.onChangeHandler}
            placeholder='LHG1L451G6L1GL41'
            label='Serial Number'
          />
          <Form.Select
            fluid
            name="assignedTo"
            data-testid="assignedTo"
            label='Holder'
            options={this.options}
            placeholder='Holder'
            search
            onChange={this.onChangeHandler}
            value={this.state.assignedTo}
          />
          { this.props.asset &&
            this.props.asset.assignedTo !== this.state.assignedTo &&
            <Form.TextArea
              name="observations"
              data-testid="observations"
              value={this.state.observations}
              onChange={this.onChangeHandler}
              placeholder='Transfer observations'
              label='Transfer observations'
            />
          }
          <FormButton data-testid="assets-form-submit" editMode={this.editMode} onClick={this.onSubmit}/>
        </Form>
      </Modal>
    )
  }
}
