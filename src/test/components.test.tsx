/**
 * Example Test: Testing React Components
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Helper function to render components with providers
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <LanguageProvider>{ui}</LanguageProvider>
    </ThemeProvider>
  );
};

// Simple component to test
const TestComponent = () => {
  return <div>Hello World</div>;
};

describe('Component Rendering', () => {
  it('should render a simple component', () => {
    render(<TestComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should render with providers', () => {
    renderWithProviders(<TestComponent />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});

// Export the helper for use in other tests
export { renderWithProviders };
