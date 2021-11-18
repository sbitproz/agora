type ValueFormatterType = (params: any) => string;

export interface Column {
  field: string;
  headerName: string;
  width?: number;
  valueFormatter?: ValueFormatterType;
}

export interface FilterItem {
  columnField: string;
  operatorValue: string;
  value: string;
}

export interface FilterModel {
  items: FilterItem[];
}
