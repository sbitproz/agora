import Launches from '../index';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { launchesMocks } from '../../../mocks/launches.mocks';
import { renderWithProviders } from 'testHelpers/withProviders';
import userEvent from '@testing-library/user-event';
jest.mock('store/hooks');

describe('Launches', () => {
  const dispatch = jest.fn();
  const missionName = /FalconSat/;

  beforeEach(() => {
    (useAppDispatch as jest.Mock<any>).mockImplementation(() => dispatch);
    (useAppSelector as jest.Mock<any>).mockImplementation(() => launchesMocks);
  });

  it('should render Launches', () => {
    renderWithProviders(<Launches />);
  });

  it('should show data in table', () => {
    const { getByText } = renderWithProviders(<Launches />);
    expect(getByText(missionName)).toBeInTheDocument();
  });

  it('should open modal when row is clicked', async () => {
    const { getByText, findByLabelText } = renderWithProviders(<Launches />);
    userEvent.click(getByText(missionName));
    const label = await findByLabelText(missionName);
    expect(label).toBeInTheDocument();
  });

  it('should close modal when close button is clicked', async () => {
    const { getByText, findByRole, findByLabelText } = renderWithProviders(<Launches />);
    userEvent.click(getByText(missionName));
    const label = await findByLabelText(missionName);
    const button = await findByRole('button', { name: 'Close' });
    userEvent.click(button);
    await new Promise((r) => setTimeout(r, 3000));
    expect(label).not.toBeInTheDocument();
  });
});
