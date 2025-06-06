import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { 
    type: String, 
    unique: true, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  resetToken: { type: String },
  resetTokenExpiry: { type: Date }
});

export default mongoose.model('User', UserSchema);
