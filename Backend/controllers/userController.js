import Employee from "../models/employeeModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

//get all employee

const getEmployees = asyncHandler(async(req, res) => {
    const employees = await Employee.find({});
    res.json(employees)
})

//create a new employee
const createEmployee = asyncHandler(async(req, res) => {
    const {name, phone , email, salary, uniqueId} = req.body;
    const employee = new Employee({
        name, phone , email, salary, uniqueId
    });

    const createEmployee = await employee.save();
    res.status(201).json(createEmployee)
});

//update employee 

const updateEmployee = asyncHandler(async (req, res) =>{
    const {name, phone , email, salary, uniqueId} = req.body;

    const employee = await Employee.findById(req.params.id);

    if (employee){
        employee.name = name;
        employee.phone = phone;
        employee.email = email;
        employee.salary = salary;

        const updateEmployee = await employee.save();
        res.json(updateEmployee);
    } else {
        res.status(404).json({ message: "Employee not found"});
    }
});

//delete employee

const deleteEmployee = asyncHandler(async(req, res) =>{
    const employee = await Employee.findById(req.params.id);

    if (employee){
        await employee.deleteOne();
        res.json({message: "Employee removed"})
    } else {
        res.status(404).json({message: "Employee not found"})
    }
})


const getEmployeesWithLowSalary = async (req, res) => {
    try {
      const employees = await Employee.find({ salary: { $lt: 10000 } });
      res.json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeesWithLowSalary
}