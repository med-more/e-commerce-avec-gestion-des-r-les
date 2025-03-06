import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function validateForm() {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }
  
    try {
      await axios.post("http://localhost:5000/api/users/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
      });
  
      toast.success("Registration successful! 🎉");
      setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!");
    }
  }
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 p-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-md bg-white/5 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-white/20">
        <h2 className="text-center text-2xl font-bold text-white drop-shadow-lg">Create an Account 🖋️</h2>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <InputField name="firstName" placeholder="First Name" value={formData.firstName} error={errors.firstName} onChange={setFormData} formData={formData} />
            <InputField name="lastName" placeholder="Last Name" value={formData.lastName} error={errors.lastName} onChange={setFormData} formData={formData} />
          </div>
          <InputField name="phone" placeholder="Phone Number" value={formData.phone} error={errors.phone} onChange={setFormData} formData={formData} />
          <InputField name="email" placeholder="Email" value={formData.email} error={errors.email} onChange={setFormData} formData={formData} />
          <PasswordField name="password" placeholder="Password" value={formData.password} error={errors.password} onChange={setFormData} formData={formData} show={showPassword} toggle={() => setShowPassword(!showPassword)} />
          <PasswordField name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} error={errors.confirmPassword} onChange={setFormData} formData={formData} />

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/50">
            Register
          </button>

          <p className="text-center text-gray-300">
            Already have an account? <Link to="/login" className="underline text-blue-400 hover:text-blue-500 transition duration-300">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

const InputField = ({ name, placeholder, value, error, onChange, formData }) => (
  <div>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-700 bg-black text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      value={value}
      onChange={(e) => onChange({ ...formData, [name]: e.target.value })}
    />
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);

const PasswordField = ({ name, placeholder, value, error, onChange, formData, show, toggle }) => (
  <div className="relative">
    <input
      type={show ? "text" : "password"}
      name={name}
      placeholder={placeholder}
      className="w-full p-3 border border-gray-700 bg-black text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      value={value}
      onChange={(e) => onChange({ ...formData, [name]: e.target.value })}
    />
    <button type="button" className="absolute right-3 top-3 text-gray-400 hover:text-blue-400 transition duration-300" onClick={toggle}>
      {show ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
    {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
  </div>
);
