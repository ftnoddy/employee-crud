import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const employeeSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  salary: { type: Number, required: true },
  uniqueId: { type: String, default: uuidv4, unique: true },
});

const Employee = model('Employee', employeeSchema);

export default Employee;
