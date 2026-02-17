/**
 * Example Test: Testing Utility Functions
 */

import { describe, it, expect } from 'vitest';
import { PHOTO_SIZE_OPTIONS } from '@/utils/layoutConfig';

describe('layoutConfig utility', () => {
  it('should have defined photo size options', () => {
    expect(PHOTO_SIZE_OPTIONS).toBeDefined();
    expect(Array.isArray(PHOTO_SIZE_OPTIONS)).toBe(true);
    expect(PHOTO_SIZE_OPTIONS.length).toBeGreaterThan(0);
  });

  it('should include US passport size (2x2)', () => {
    const usSize = PHOTO_SIZE_OPTIONS.find((size) => size.value === '2x2');
    expect(usSize).toBeDefined();
    expect(usSize?.width).toBe(2);
    expect(usSize?.height).toBe(2);
    expect(usSize?.label).toContain('US');
  });

  it('should include India passport size', () => {
    const indiaSize = PHOTO_SIZE_OPTIONS.find((size) => size.value.includes('india'));
    expect(indiaSize).toBeDefined();
    expect(indiaSize?.label).toContain('India');
  });

  it('all photo sizes should have required properties', () => {
    PHOTO_SIZE_OPTIONS.forEach((size) => {
      expect(size).toHaveProperty('value');
      expect(size).toHaveProperty('label');
      expect(size).toHaveProperty('width');
      expect(size).toHaveProperty('height');
      expect(size).toHaveProperty('description');
      expect(size).toHaveProperty('pixelsAt300DPI');
      expect(size.width).toBeGreaterThan(0);
      expect(size.height).toBeGreaterThan(0);
    });
  });
});
