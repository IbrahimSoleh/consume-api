/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../fetch/fetch";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

const Nav = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, [window.localStorage.getItem("token")]);

  return (
    <div className=''>
      <div>
        {isLogin && (
          <Link to='/newbook'>
            <Button variant='text'>Create Book</Button>
          </Link>
        )}
        {!isLogin ? (
          <div className='flex justify-center items-center text-center m-16'>
            <Card color='transparent' shadow={false}>
              <Typography variant='h4' color='blue-gray'>
                Login
              </Typography>
              <form
                className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
                id='login-form'
                onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    const token = await loginUser(
                      e.target.email.value,
                      e.target.password.value
                    );
                    window.localStorage.setItem("token", token.token);
                    navigate("/");
                  } catch (err) {
                    console.log(err);
                  }
                }}
              >
                <div className='mb-4 flex flex-col gap-6'>
                  <Input size='lg' label='email' type='email' name='email' required />
                  <Input
                    type='password'
                    name='password'
                    size='lg'
                    label='Password'
                    required
                  />
                </div>
                <Button
                  className='mt-6'
                  fullWidth
                  type='submit'
                  form='login-form'
                >
                  submit
                </Button>
              <div className='mt-5'>
                <Link to='/register'>
                  Doesn't Have Account?
                  <Button className="ml-3" variant='ghost'>Click here</Button>
                </Link>
              </div>
              </form>
            </Card>
          </div>
        ) : (
          <Button
            variant='text'
            onClick={() => {
              window.localStorage.removeItem("token");
              setIsLogin(false);
              navigate("/");
            }}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Nav;