type ProjectType = {
  name: string;
  desc: string;
  link: string;
}

export const projectList: ProjectType[] = [
  {
    name: "Good Budget",
    link: "https://goodbudget-kappa.vercel.app/",
    desc: "GoodBudget is a full-stack web application designed to help users efficiently manage and analyze their daily financial transactions. The platform allows users to record income and expenses, categorize transactions, and gain insights into spending patterns through category-wise analysis."
  },
  {
    name: "YetToDo",
    link: "https://github.com/sejpalvatsal456/yet-to-do/",
    desc: "Yet to Do is a task management application designed to help individuals and teams streamline their workflows by categorizing, prioritizing, and tracking tasks in a dynamic, user-friendly interface. The app allows users to efficiently manage their to-do lists, set deadlines, assign priorities, and track their progress to ensure that tasks are completed on time."
  }
]