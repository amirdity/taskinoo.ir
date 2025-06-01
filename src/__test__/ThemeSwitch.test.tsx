// import { render, screen, fireEvent } from "@testing-library/react";
// import ThemeSwitch from "./ThemeSwitch";
// import { beforeEach, describe, expect, it, vi } from "vitest";
// import nextThemes from "next-themes";

// describe("ThemeSwitch", () => {
//   beforeEach(() => {
//     vi.spyOn(nextThemes, "useTheme").mockReturnValue({
//       resolvedTheme: "dark",
//       setTheme: vi.fn(),
//     } as never);
//   });

//   it("renders sun icon when theme is dark", () => {
//     render(<ThemeSwitch />);
//     const sunIcon = screen.getByRole("img", { hidden: true }); // react-icons use SVGs that are treated as img
//     expect(sunIcon).toBeInTheDocument();
//   });

//   it("calls setTheme with 'light' when sun icon is clicked", () => {
//     const setThemeMock = vi.fn();
//     vi.spyOn(nextThemes, "useTheme").mockReturnValue({
//       resolvedTheme: "dark",
//       setTheme: setThemeMock,
//     } as never);

//     render(<ThemeSwitch />);
//     const sunIcon = screen.getByRole("img", { hidden: true });
//     fireEvent.click(sunIcon);
//     expect(setThemeMock).toHaveBeenCalledWith("light");
//   });
// });
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ThemeSwitch from "@/components/ThemeSwitch";
// import Page from "../app/page";

test("Page", () => {
  render(<ThemeSwitch />);
  expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
});
