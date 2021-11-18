import Table from '../index';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { launchesColumnsMocks, launchesMocks60 } from 'mocks/launches.mocks';

describe('Table', () => {
  const onRowClick = jest.fn();
  const row = launchesMocks60[0];
  const nextAria = 'Go to next page';
  const prevAria = 'Go to previous page';

  const tableProps = {
    columns: launchesColumnsMocks,
    rows: launchesMocks60,
    rowId: 'flight_number',
    onRowClick,
  };

  it('should render Table', () => {
    render(<Table {...tableProps} />);
  });

  it('should show data in table', () => {
    const { getAllByRole } = render(<Table {...tableProps} />);
    const cell = getAllByRole('cell', { name: row.mission_name })[0];
    expect(cell).toBeInTheDocument();
  });

  it('should show calculated data in table', () => {
    const { getAllByRole } = render(<Table {...tableProps} />);
    const cell = getAllByRole('cell', { name: `AA ${row.launch_date_unix}` })[0];
    expect(cell).toBeInTheDocument();
  });

  it('should not see first element when click next page', () => {
    const { getByRole, queryByRole } = render(<Table {...tableProps} />);
    const nextPage = getByRole('button', { name: nextAria });
    userEvent.click(nextPage);
    expect(queryByRole('cell', { name: `AA ${row.mission_name}` })).toBeNull();
  });

  it('should see first element when click next page and previous page', () => {
    const { getByRole, getAllByRole } = render(<Table {...tableProps} />);
    const nextPage = getByRole('button', { name: nextAria });
    userEvent.click(nextPage);
    const prevPage = getByRole('button', { name: prevAria });
    userEvent.click(prevPage);
    const cell = getAllByRole('cell', { name: `AA ${row.launch_date_unix}` })[0];
    expect(cell).toBeInTheDocument();
  });
});
