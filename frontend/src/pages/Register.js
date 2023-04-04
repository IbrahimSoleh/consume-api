import { useState } from "react";
import { registerUser } from "../fetch/fetch";
import { useNavigate } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
      await registerUser(e.target.name.value, e.target.email.value, password);
      navigate("/");
  };

  return (
   <div className="flex justify-center items-center text-center">
     <Card color='transparent' shadow={false}>
      <Typography variant='h4' color='blue-gray'>
        register
      </Typography>
      <Typography color='gray' className='mt-1 font-normal'>
        Enter your details to register.
      </Typography>
      <form
        className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
        onSubmit={handleSubmit}
      >
        <div className='mb-4 flex flex-col gap-6'>
          <Input size='lg' label='Name' type='name' name='name' />
          <Input size='lg' label='Email' type='email' name='email' />
          <Input
            type='password'
            name='password'
            size='lg'
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type='password'
            name='password'
            size='lg'
            label='confirm pass'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button className='mt-6' fullWidth type='submit'>
          Register
        </Button>
      </form>
    </Card>
   </div>
  );
};

export default Register;
