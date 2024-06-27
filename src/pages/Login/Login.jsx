import './Login.css';
import logo from '../../assets/logo.png';

const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt='logo pic' className='login-logo' />
      <div className='login-form'>
        <h1>Sign Up</h1>
        <form>
          <input type='text' placeholder='Your name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Sign Up</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' />
              <label>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
