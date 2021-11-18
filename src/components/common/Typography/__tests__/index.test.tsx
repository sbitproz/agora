import { render } from '@testing-library/react';
import { Paragraph, Subtitle } from '..';

describe('Typography: Subtitle', () => {
  it('should render Subtitle with content', () => {
    const title = 'Title';
    const { getByText } = render(<Subtitle>{title}</Subtitle>);
    expect(getByText(title)).toBeInTheDocument();
  });
});

describe('Typography: Paragraph', () => {
  it('should render Paragraph with content', () => {
    const paragraph = 'paragraph';
    const { getByText } = render(<Paragraph>{paragraph}</Paragraph>);
    expect(getByText(paragraph)).toBeInTheDocument();
  });
});
