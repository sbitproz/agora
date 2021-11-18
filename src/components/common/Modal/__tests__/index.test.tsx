import Modal from '../index';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

describe('Modal', () => {
  const onClose = jest.fn();

  const modalProps = {
    isOpen: false,
    content: () => <>Content test</>,
    title: 'Title test',
    ariaName: 'mymodal',
    onClose,
  };

  it('should not render modal when isOpen is false', async () => {
    const { queryByText } = render(<Modal {...modalProps} />);
    const title = queryByText(modalProps.title);
    expect(title).toBeNull();
  });

  it('should render modal title when isOpen is true', async () => {
    const { getByText } = render(<Modal {...modalProps} isOpen />);
    const title = getByText(modalProps.title);
    expect(title).toBeInTheDocument();
  });

  it('should call onClose when modal close button is clicked', async () => {
    const { getByRole } = render(<Modal {...modalProps} isOpen />);
    const button = getByRole('button', { name: 'Close' });
    userEvent.click(button);
    expect(onClose).toHaveBeenCalled();
  });
});
