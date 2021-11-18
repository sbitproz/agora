// A nice to have mock table for testing - which went unused in the end

import React from 'react';
import { TableProps } from '..';

const Table: React.FC<TableProps> = ({ columns, rows, rowId }) => {
  return (
    <div>
      {rowId}
      <table>
        <thead>
          <tr>
            {columns?.map((item, index) => {
              const testId = `headers-${item.field}-${index}`;
              return <th data-testid={testId} key={testId}></th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((dataItem: any, dataIndex) => (
            <tr data-testid="table-row" key={`${dataItem.id}-${dataIndex}`}>
              {columns.map((item, index) => {
                const testId = `table-cell-${item.field}`;
                return (
                  <td data-testid={testId} key={`${item.field}-${dataIndex}-${index}`}>
                    <>{JSON.stringify(dataItem[item.field])}</>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
