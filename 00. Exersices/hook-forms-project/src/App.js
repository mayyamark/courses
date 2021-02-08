/* eslint-disable no-useless-escape */
import './App.css';
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => console.log(data);

  const validateUsername = async (value) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (value === 'mayya') {
      return true;
    }
    return false;
  }

  console.log(watch("username")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" placeholder="Enter username..." ref={register({ required: true, validate: validateUsername})} />
      {errors.username && errors.username.type === 'required' && <span>This field is required!</span>}
      {errors.username && errors.username.type === 'validate' && <span>Username should be mayya :D!</span>}

      <input name="email" placeholder="Enter email..." ref={register({ required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
      {errors.email && errors.email.type === 'required' && <span>This field is required!</span>}
      {errors.email && errors.email.type === 'pattern' && <span>Invalid email address!</span>}
      
      <select name="gender" ref={register({ required: true })} >
        <option value="">Select gender...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && errors.gender.type === 'required' && <span>This field is required!</span>}


      <input type="submit" />
    </form>);
}

export default App;
