import { format } from 'date-fns';
// @ts-expect-error x-data-grid with no types definition
import { GridValueFormatterParams } from '@mui/x-data-grid';

export const launchesColumnsConfig = [
  { field: 'mission_name', headerName: 'Name', width: 180 },
  {
    field: 'launch_date_unix',
    headerName: 'Date',
    width: 130,
    valueFormatter: (params: GridValueFormatterParams) => format(new Date(params.value * 1000), 'MM/dd/yyyy'),
  },
  { field: 'details', headerName: 'Details', minWidth: 500 },
];

const missionColumn = launchesColumnsConfig[0];

export const launchDateColumn = launchesColumnsConfig[1];

export const launchesFilterModel = {
  items: [{ columnField: missionColumn.field, operatorValue: 'contains', value: '' }],
};
