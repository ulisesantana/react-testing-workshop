import React, {FC, MouseEventHandler} from "react";
import {Table} from "semantic-ui-react";
import {Asset, Holder} from "../../../types";

export interface AssetTableProps {
  holders: Record<string, Holder>,
  assets: Record<string, Asset>,
  onClick: MouseEventHandler
}

export const AssetTable: FC<AssetTableProps> = ({holders, assets, onClick}) => (
  <Table celled selectable data-testid="assets-table">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell data-testid="assets-name">Name</Table.HeaderCell>
        <Table.HeaderCell data-testid="assets-blocked">Status</Table.HeaderCell>
        <Table.HeaderCell data-testid="assets-serial">Serial</Table.HeaderCell>
        <Table.HeaderCell data-testid="assets-assignedTo">Assigned to</Table.HeaderCell>
        <Table.HeaderCell data-testid="assets-notes">Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      { Object.values(assets).map(({name, notes, serial, assignedTo, blocked, id}) =>
        <Table.Row key={id} data-id={id} data-testid={"asset-" + id} onClick={onClick}>
          <Table.Cell data-testid="asset-name">{name}</Table.Cell>
          <Table.Cell data-testid="asset-blocked">{blocked ? 'Blocked' : 'Active'}</Table.Cell>
          <Table.Cell data-testid="asset-serial">{serial}</Table.Cell>
          <Table.Cell data-testid="asset-assignedTo">{assignedTo && holders[assignedTo as string].name}</Table.Cell>
          <Table.Cell data-testid="asset-notes">{notes}</Table.Cell>
        </Table.Row>
      )}
    </Table.Body>
  </Table>
);


