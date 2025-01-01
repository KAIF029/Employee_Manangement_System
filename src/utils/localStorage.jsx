
const employees = [
  {
      "id": 1,
      "email": "e@e.com",
      "password": "123",
      "firstname": "KAIF KHAN",
      "taskNumbers": {
          "active": 3,
          "newTask": 5,
          "completedTask": 4,
          "failedTask": 3
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completedTask": true,
              "failedTask": true,
              "taskTitle": "Develop Landing Page",
              "taskDescription": "Create the initial landing page for the website.",
              "taskDate": "2024-12-01",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completedTask": true,
              "failedTask": false,
              "taskTitle": "Unit Testing",
              "taskDescription": "Perform unit testing on newly developed features.",
              "taskDate": "2024-11-15",
              "category": "Testing"
          },
          {
              "active": false,
              "newTask": false,
              "completedTask": false,
              "failedTask": true,
              "taskTitle": "Design Logo",
              "taskDescription": "Design a logo for the new project.",
              "taskDate": "2024-11-20",
              "category": "Design"
          }
      ]
  },
  {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstname": "Hasir",
      "taskNumbers": {
          "active": 3,
          "newTask": 2,
          "completedTask": 4,
          "failedTask": 2
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completedTask": false,
              "failedTask": false,
              "taskTitle": "Set Up Database",
              "taskDescription": "Set up the initial database schema.",
              "taskDate": "2024-12-02",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completedTask": true,
              "failedTask": false,
              "taskTitle": "Integration Testing",
              "taskDescription": "Test the integration between different modules.",
              "taskDate": "2024-11-18",
              "category": "Testing"
          },
          {
              "active": false,
              "newTask": false,
              "completedTask": false,
              "failedTask": true,
              "taskTitle": "Create Wireframes",
              "taskDescription": "Create wireframes for the new application.",
              "taskDate": "2024-11-22",
              "category": "Design"
          }
      ]
  },
  {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstname": "Ali",
      "taskNumbers": {
          "active": 2,
          "newTask": 4,
          "completedTask": 3,
          "failedTask": 2
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completedTask": false,
              "failedTask": false,
              "taskTitle": "Develop API",
              "taskDescription": "Develop the backend API for the application.",
              "taskDate": "2024-12-03",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completedTask": true,
              "failedTask": false,
              "taskTitle": "End-to-End Testing",
              "taskDescription": "Perform end-to-end testing on the application.",
              "taskDate": "2024-11-19",
              "category": "Testing"
          },
          {
              "active": false,
              "newTask": false,
              "completedTask": false,
              "failedTask": true,
              "taskTitle": "Create UI Mockups",
              "taskDescription": "Design mockups for the user interface.",
              "taskDate": "2024-11-23",
              "category": "Design"
          }
      ]
  },
  {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstname": "Abdullah",
      "taskNumbers": {
          "active": 4,
          "newTask": 4,
          "completedTask": 4,
          "failedTask": 4
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completedTask": false,
              "failedTask": false,
              "taskTitle": "Optimize Performance",
              "taskDescription": "Optimize the application for better performance.",
              "taskDate": "2024-12-04",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completedTask": true,
              "failedTask": false,
              "taskTitle": "Regression Testing",
              "taskDescription": "Perform regression testing on the application.",
              "taskDate": "2024-11-20",
              "category": "Testing"
          },
          {
              "active": false,
              "newTask": false,
              "completedTask": false,
              "failedTask": true,
              "taskTitle": "Create Marketing Materials",
              "taskDescription": "Design marketing materials for the product launch.",
              "taskDate": "2024-11-24",
              "category": "Design"
          }
      ]
  },
  {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstname": "Ariz",
      "taskNumbers": {
          "active": 2,
          "newTask": 3,
          "completedTask": 4,
          "failedTask": 2
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completedTask": false,
              "failedTask": false,
              "taskTitle": "Implement Authentication",
              "taskDescription": "Implement authentication and authorization.",
              "taskDate": "2024-12-05",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completedTask": true,
              "failedTask": false,
              "taskTitle": "Security Testing",
              "taskDescription": "Conduct security testing on the application.",
              "taskDate": "2024-11-21",
              "category": "Testing"
          },
          {
              "active": false,
              "newTask": false,
              "completedTask": false,
              "failedTask": true,
              "taskTitle": "Design Brochure",
              "taskDescription": "Create a brochure for the new product.",
              "taskDate": "2024-11-25",
              "category": "Design"
          }
      ]
  }
];

const admin = [{
      "id": 1,
      "email": "admin@me.com",
      "password": "123",
}]

  export const setLocalStorage = ()=> {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
    
  }
  export const getLocalStorage = ()=> {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
   
    return {employees, admin}
  }