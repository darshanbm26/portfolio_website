// Centralize all your links and content here.
// HOW TO USE:
// - Resume PDF: place your file at public/resume.pdf (or any path) and update siteConfig.resume.url
// - Socials: add/edit items in siteConfig.socials array (label + url)
// - Projects: add/edit items in siteConfig.projects array with title, description, tech, liveUrl, repoUrl, and optional image (put images under /public/images)

export type Project = {
  title: string
  description?: string
  tech?: string[]
  liveUrl?: string
  repoUrl?: string
  image?: string // e.g. "/images/project-1.png"
}

export type Social = {
  label: "GitHub" | "LinkedIn" | "Twitter" | "X" | "Email" | "Website" | string
  url: string
}

export const siteConfig = {
  resume: {
    label: "Download Resume",
    url: "/Darshan_CV_DataAnalyst-1.pdf", // Files under /public are served from the site root
    fileName: "Darshan_BM_Resume.pdf", // Used for the download attribute
  },

  socials: [
    { label: "GitHub", url: "https://github.com/darshanbm26" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/darshan-b-m-b6b969299/" },
    { label: "Gmail", url: "mailto:darshanbmamcec@gmail.com" },
    { label: "Kaggle", url: "https://www.kaggle.com/darshanbm1" },
    { label: "LeetCode", url: "https://leetcode.com/u/darshanbmamcec/" },
    { label: "Twitter", url: "https://x.com/darrshanbm" }
  ] as Social[],

  projects: [
   {
    title: "Exploratory Data Analysis on Diwali Sales Data using Python",
    description:
      "Performed data preprocessing, manipulation, and visualization of Diwali sales data to identify potential customers and optimize inventory planning.",
    tech: ["Python", "Jupyter", "Pandas", "Matplotlib", "Seaborn"],
    liveUrl: "", // No live URL for this, optional
    repoUrl: "https://github.com/darshanbm26/Diwali_Sales_Analysis",
    image: "/images/project-diwali-sales.png",
   },
   {
    title: "HR Analytics Dashboard",
    description:
      "Designed an interactive HR dashboard in Power BI to monitor workforce trends, reduce employee attrition, and improve recruitment strategies.",
    tech: ["Power BI"],
    liveUrl: "", // No live URL for this
    repoUrl: "https://github.com/darshanbm26/HR_Analytics_Dashboard",
    image: "/images/project-hr-dashboard.png",
   },
   {
    title: "Store Analysis Dashboard",
    description:
      "Built an interactive Excel dashboard to analyze store performance, customer behavior, top-performing states, and sales channels.",
    tech: ["Excel"],
    liveUrl: "", // Optional
    repoUrl: "https://github.com/darshanbm26/Store_Data_Analysis",
    image: "/images/project-store-dashboard.png",
   },
   {
    title: "Customer Complaint Analysis",
    description:
      "Developed a Tableau dashboard to monitor customer complaints across banking services, visualize yearly patterns, and reduce complaint volumes.",
    tech: ["Tableau"],
    liveUrl: "", // Optional
    repoUrl: "https://github.com/darshanbm26/Customer_Complaints",
    image: "/images/project-customer-complaints.png",
   },
  ] as Project[],

}
