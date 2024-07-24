import express from 'express';
const router = express.Router();

import { getEmployees, createEmployee, deleteEmployee, updateEmployee, getEmployeesWithLowSalary } from '../controllers/userController.js'; // Ensure this path is correct

router.route('/employee').get(getEmployees).post(createEmployee);
router.route('/employee/:id').put(updateEmployee).delete(deleteEmployee);
router.get('/employee/low-salary', getEmployeesWithLowSalary);

export default router;
