// Line chart data type
export interface Chart {
  month: string;
  desktop: number;
  mobile: number;
}

export const chartData: Chart[] = [
  { month: "January", desktop: 186, mobile: 80 ,},
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];



// Pie chart data type
export interface BrowserData {
  browser: string;
  visitors: number;
  fill: string;
}

export const pieChartData: BrowserData[] = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];
