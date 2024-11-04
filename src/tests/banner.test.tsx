import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '../components/Banner/index';

describe('Banner', () => {
  it('should render an image with right alt and src', () => {
    render(<Banner image="image-url.jpg" alt="banner image" />);
    const imgElement = screen.getByRole('img', { name: /banner image/i });
    expect(imgElement).toHaveAttribute('src', 'image-url.jpg');
    expect(imgElement).toHaveAttribute('alt', 'banner image');
  });
});