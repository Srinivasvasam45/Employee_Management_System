
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "j@e.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create a responsive login page using React.",
        taskDate: "2026-06-29",
        category: "Development"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Dashboard UI",
        taskDescription: "Improve dashboard layout and responsiveness.",
        taskDate: "2026-06-30",
        category: "UI/UX"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolved navbar alignment issues.",
        taskDate: "2026-06-25",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "jane.smith@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Employee Form",
        taskDescription: "Develop employee registration form.",
        taskDate: "2026-06-29",
        category: "Development"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Design Profile Card",
        taskDescription: "Completed employee profile card design.",
        taskDate: "2026-06-23",
        category: "UI/UX"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Failed due to backend endpoint changes.",
        taskDate: "2026-06-20",
        category: "Backend"
      }
    ]
  },

  {
    id: 3,
    firstName: "Arjun",
    email: "michael.brown@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add employee search functionality.",
        taskDate: "2026-06-29",
        category: "Feature"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports",
        taskDescription: "Generate monthly employee reports.",
        taskDate: "2026-07-01",
        category: "Analytics"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Queries",
        taskDescription: "Database optimization exceeded timeout.",
        taskDate: "2026-06-18",
        category: "Database"
      }
    ]
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "emily.johnson@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Authentication",
        taskDescription: "Perform authentication testing.",
        taskDate: "2026-06-29",
        category: "Testing"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepared project documentation.",
        taskDate: "2026-06-22",
        category: "Documentation"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Footer",
        taskDescription: "Corrected footer responsiveness.",
        taskDate: "2026-06-21",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "david.wilson@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Deploy Project",
        taskDescription: "Deploy React application to production.",
        taskDate: "2026-06-30",
        category: "Deployment"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Notifications",
        taskDescription: "Implement notification system.",
        taskDate: "2026-07-02",
        category: "Feature"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Code",
        taskDescription: "Completed peer code review.",
        taskDate: "2026-06-24",
        category: "Code Review"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
  }
];

export  const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
 
export  const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees' ))
     const admin = JSON.parse(localStorage.getItem('admin'))

     return {employees,admin}
}

 