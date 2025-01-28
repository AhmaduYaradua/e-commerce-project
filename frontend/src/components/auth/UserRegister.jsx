import { Input, Button } from "antd";
import Password from "antd/es/input/Password";
import axios from "axios";
import { useState } from "react";
import validator from "validator";
import { BACKEND_BASE_URL } from "../../utils/helper";
import { useNavigate, Link } from "react-router";

function UserRegister() {
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function handleUserRegister() {
    if (
      validator.isEmpty(userFormData.name, { ignore_whitespace: true }) === true
    ) {
      return alert("Please provide a name");
    }
    if (validator.isEmail(userFormData.email) === false) {
      return alert("Please provide a valid email addres");
    }
    if (
      validator.isStrongPassword(userFormData.password, {
        minLength: 6,
        minLowercase: 1,
        minSymbols: 1,
        minUppercase: 1,
      }) === false
    ) {
      return alert(
        "Password must be contain minimum 6 characters, UPPERCASE and a symbol"
      );
    }
    setLoading(true);
    // send user details to server
    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/auth/register`,
        userFormData
      );
      if (response.data.status === "success") {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="grid p-4 place-items-center h-[80vh] max-w-[500px] mx-auto">
      <form className="flex flex-col gap-4 w-full border p-4 rounded-md border-green-800">
        <h1 className="text-2xl text-green-800 text-center">Join Koatz</h1>
        <p className="text-gray-500 font-light text-center">
          Enjoy exciting deals when you register
        </p>
        <Input
          onChange={(e) =>
            setUserFormData({ ...userFormData, name: e.target.value })
          }
          placeholder="Enter your name"
          size="large"
        />
        <Input
          onChange={(e) =>
            setUserFormData({ ...userFormData, email: e.target.value })
          }
          placeholder="Enter your email"
          size="large"
        />
        <Input.Password
          onChange={(e) =>
            setUserFormData({ ...userFormData, password: e.target.value })
          }
          placeholder="Enter password"
          size="large"
        />
        <Button
          loading={loading}
          disabled={loading}
          onClick={handleUserRegister}
          block
          type="primary"
          size="large"
        >
          Register
        </Button>
        <p className="text-center text-gray-500 font-light">
          Already have an account?
          <Link
            className="font-medium hover:underline text-black"
            to={"/login"}
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default UserRegister;
