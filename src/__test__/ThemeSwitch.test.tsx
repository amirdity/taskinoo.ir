/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitch from "@/components/ThemeSwitch";
import { vi, describe, expect, beforeEach, test } from "vitest";

// گام اول: کل ماژول رو mock کن
vi.mock("next-themes", () => ({
  useTheme: vi.fn(),
}));

// گام دوم: حالا مستقیم useTheme رو ایمپورت کن
import { useTheme } from "next-themes";

describe("ThemeSwitch", () => {
  const setThemeMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should show sun icon when theme is dark and call setTheme('light') on click (hello world)", () => {
    (useTheme as any).mockReturnValue({
      resolvedTheme: "dark",
      setTheme: setThemeMock,
    });

    render(<ThemeSwitch />);
    const sunIcon = screen.getByTestId("theme-icon");
    expect(sunIcon).toBeDefined();

    fireEvent.click(sunIcon);
    expect(setThemeMock).toHaveBeenCalledWith("light");
  });

  test("should show moon icon when theme is light and call setTheme('dark') on click", () => {
    (useTheme as any).mockReturnValue({
      resolvedTheme: "light",
      setTheme: setThemeMock,
    });

    render(<ThemeSwitch />);
    const moonIcon = screen.getByTestId("theme-icon");
    expect(moonIcon).toBeDefined();

    fireEvent.click(moonIcon);
    expect(setThemeMock).toHaveBeenCalledWith("dark");
  });
});
