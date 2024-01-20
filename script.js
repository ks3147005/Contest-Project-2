let employees = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
        const developers = employees.filter(employee => employee.profession === "developer");
        console.log("Developers:", developers); 
  }
  
  function addData() {
      const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
      employees.push(newEmployee);
      console.log("Employee added:", newEmployee);
  }
  
  function removeAdmin() {
    const filteredEmployees = employees.filter(employee => employee.profession !== "admin");
  console.log("Employees without admin:", filteredEmployees);
  }
  
  function concatenateArray() {
      const addingNewEmployees = [
        { id: 5, name: "karan", age: "21", profession: "Software developer" },
        { id: 6, name: "sharma", age: "25", profession: "Intern" }
      ];
      const updatedEmployees = employees.concat(addingNewEmployees);
      console.log("Updated Employees:", updatedEmployees);
    
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }