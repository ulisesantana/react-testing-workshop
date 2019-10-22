import React, {FC} from "react";
import {Table} from "semantic-ui-react";
import {Asset, Holder, TransferRecord} from "../../../types";

export interface TransferRecordTableProps {
  assets: Record<string, Asset>
  holders: Record<string, Holder>
  records: TransferRecord[]
}

interface TableRecord {
  id: string
  date: string
  assetName: string
  assetSerial: string
  from: string
  to: string
  observations: string
}

function generateRecordParser(assets: Record<string, Asset>, holders: Record<string, Holder>){
  return ({id, asset, date, from, to, observations}: TransferRecord): TableRecord => ({
    id,
    date,
    assetName: assets[asset].name,
    assetSerial: assets[asset].serial,
    from: holders[from as string] && holders[from as string].name,
    to: holders[to as string] && holders[to as string].name,
    observations
  });
}

export const TransferRecordTable: FC<TransferRecordTableProps> = ({holders, assets, records}) => {
  const tableRecords = records.map(generateRecordParser(assets, holders));

  return (
    <section>
      <Table celled selectable data-testid="records-table">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell data-testid="date">Date</Table.HeaderCell>
          <Table.HeaderCell data-testid="name">Asset</Table.HeaderCell>
          <Table.HeaderCell data-testid="serial">Asset Serial</Table.HeaderCell>
          <Table.HeaderCell data-testid="from">From</Table.HeaderCell>
          <Table.HeaderCell data-testid="to">To</Table.HeaderCell>
          <Table.HeaderCell data-testid="observations">Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        { tableRecords.map(({id, assetName, assetSerial, date, from, to, observations}) =>
          <Table.Row key={id} data-id={id} data-testid={id}>
            <Table.Cell data-testid="date">{date}</Table.Cell>
            <Table.Cell data-testid="name">{assetName}</Table.Cell>
            <Table.Cell data-testid="serial">{assetSerial}</Table.Cell>
            <Table.Cell data-testid="from">{from}</Table.Cell>
            <Table.Cell data-testid="to">{to}</Table.Cell>
            <Table.Cell data-testid="observations">{observations}</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    </section>
  );
}

export default TransferRecordTable;
