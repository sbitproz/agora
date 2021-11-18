import React, { useState } from 'react';
// @ts-expect-error x-data-grid with no types definition
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Column, FilterModel } from './table.interface';

interface Row {
  [id: string]: string;
}

export interface TableProps {
  columns: Column[];
  rows: unknown[];
  rowId: string;
  filterModel?: FilterModel;
  onRowClick: (row: any) => void;
}

const Table: React.FC<TableProps> = ({ rowId, columns, rows, filterModel, onRowClick }) => {
  const [page, setPage] = useState(0);

  return (
    <DataGrid
      getRowId={(row: Row) => row[rowId]}
      rows={rows}
      components={{
        Toolbar: GridToolbar,
      }}
      initialState={{
        filter: { filterModel },
      }}
      onRowClick={onRowClick}
      columns={columns}
      pageSize={15}
      rowsPerPageOptions={[15]}
      page={page}
      onPageChange={(page: number) => setPage(page)}
      autoHeight
    />
  );
};

export default Table;
