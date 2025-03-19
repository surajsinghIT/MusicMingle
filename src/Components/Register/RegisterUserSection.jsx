import { Form, Input, Select, Button } from "antd";
import './RegisterUserSection.css'
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../Redux/RegisterUser/actions";

const RegisterUserSection = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Registration Data:", values);
    const email = values.email
    const password = values.password
    const role = values.role
    const username = values.username
    RegisterUserApi(email,password,role,username);
  };

  const RegisterUserApi = (email,pass,role,username) => {
    dispatch(RegisterUser({
      URL: 'https://api.freeapi.app/api/v1/users/register',
      method: "post",      
      isJSON: true,
      payload:{
        email: email,
        password: pass,
        role: role,
        username: username,
      },             
    }))
  }

// const options = {
//   method: 'POST',
//   url: 'https://api.freeapi.app/api/v1/users/register',
//   headers: {accept: 'application/json', 'content-type': 'application/json'},
//   data: {
//     email: 'user1.email@domain.com',
//     password: 'test@123',
//     role: 'USER',
//     username: 'ssuraj2'
//   }
// };

// try {
//   const { data } = await axios.request(options);
//   console.log(data);
// } catch (error) {
//   console.error(error);
// }

  return (
    <div className="d-flex justify-content-center justify-items-center p-2">
      <div className="max-w-lg w-full p-2 bg-white shadow-lg rounded-lg customcss">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Role is required" }]}
          >
            <Select placeholder="Select a role" allowClear>        
        <Select.Option value="USER">USER</Select.Option>
        <Select.Option value="ADMIN">ADMIN</Select.Option>
          </Select>
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Username is required" }]}
            autoComplete="off"
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterUserSection;
