// Clear localStorage to reset data (use with caution)
localStorage.clear();

const employees = [
  {
    id: 1,
    email: "nishikant@16.com",
    password: "123",
    firstName: "Nishikant V Kshirsagar",
    tasks: [
      {
        taskTitle: "Monthly Report",
        taskDescription: "Prepare monthly report",
        taskDate: "2024-12-22",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Metting ",
        taskDescription: "Attend team meeting",
        taskDate: "2024-12-23",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "DEV Project",
        taskDescription: "Submit project proposal",
        taskDate: "2024-12-24",
        category: "Projects",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Anjali",
    tasks: [
      {
        taskTitle: "Call to Client",
        taskDescription: "Client follow-up call",
        taskDate: "2024-12-22",
        category: "Client Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "About Records",
        taskDescription: "Update inventory records",
        taskDate: "2024-12-23",
        category: "Operations",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 6,
      failed: 0,
    },
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Sneha",
    tasks: [
      {
        taskTitle: "Task 1",
        taskDescription: "Organize team lunch",
        taskDate: "2024-12-22",
        category: "Events",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Prepare presentation slides",
        taskDate: "2024-12-23",
        category: "Presentations",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Task 3",
        taskDescription: "Research competitors",
        taskDate: "2024-12-24",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 4",
        taskDescription: "Update internal documentation",
        taskDate: "2024-12-25",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@nishikant.com",
    password: "123",
  },
];

// Function to set localStorage data
export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

// Function to get localStorage data
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};
