/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook, act } from '@testing-library/react';

import { useIsMobile } from './useIsMobile';

describe('useIsMobile', () => {
  let originalInnerWidth: number;

  beforeEach(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterEach(() => {
    // Restore the original window.innerWidth after each test
    Object.defineProperty(
      window, 'innerWidth',
      { writable: true,
        configurable: true,
        value: originalInnerWidth
      });
  });

  it('returns false when window width is greater than the mobile breakpoint', () => {
    Object.defineProperty(
      window, 'innerWidth',
      { writable: true,
        configurable: true,
        value: 500
      });

    let result: any;

    act(() => {
      result = renderHook(() => useIsMobile()).result;
    });

    expect(result.current).toBe(false);
  });

  it('returns true when window width is less than the mobile breakpoint', () => {
    Object.defineProperty(
      window, 'innerWidth',
      { writable: true,
        configurable: true,
        value: 400
      });

    let result: any;

    act(() => {
      result = renderHook(() => useIsMobile()).result;
    });

    expect(result.current).toBe(true);
  });

  it('updates the value when window is resized', () => {
    let result: any;

    act(() => {
      result = renderHook(() => useIsMobile()).result;
    });

    expect(result.current).toBe(false);

    Object.defineProperty(
      window, 'innerWidth',
      { writable: true,
        configurable: true,
        value: 300
      });

    act(() => {
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(true);
  });
});
