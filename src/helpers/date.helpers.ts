import { format } from 'date-fns';

export const formatDate = (dateUnixValue: number) => format(new Date(dateUnixValue * 1000), 'MM/dd/yyyy');
