export interface Company {
  name: string;
  role: string;
  years: string;
  description: string;
  video: string;
}

export const companies: Company[] = [
  {
    name: "XYZ App",
    role: "Senior Developer",
    years: "2020 - 2024",
    description:
      "Built scalable backend APIs, improved system performance by 60%, implemented CI/CD pipelines.",
    video: "demo.mp4",
  },
  {
    name: "Alpha Finance App",
    role: "Full Stack Developer",
    years: "2018 - 2020",
    description:
      "Developed a financial dashboard, integrated live market feeds, added advanced analytics.",
    video: "demo2.mp4",
  },
];
