import React from 'react';
import Typography from '@mui/material/Typography';

interface SubtitleProps {
  children: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => (
  <Typography variant="subtitle1">{children}</Typography>
);

interface ParagraphProps {
  children?: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => <Typography gutterBottom>{children}</Typography>;
