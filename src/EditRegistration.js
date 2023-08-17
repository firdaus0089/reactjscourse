import React, {useState} from "react";
import { useForm } from "react-hook-form";


const EditRegistration = () => {
const[userInfo, setUserInfo] = useState('')   
const { register, handleSubmit, formState: { errors } } = useForm();

const onMySubmit = (data) => {
    //save data to local storage
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    const newUpdatedInformation = {
        ...userdata,
        "name" : data.name,
        "email": data.email
    }

    localStorage.setItem("userdata",JSON.stringify(newUpdatedInformation));
    sessionStorage.setItem("userName",JSON.stringify({name: data.name}))
    alert(localStorage.getItem("userdata"));
  };

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userdata"));
    if(userData){
        setUserInfo(userData)
      }
    })


  return (
    <div className='container mt-5 ml-5'>
      <h1>Edit Profile Form</h1>

      <form onSubmit={handleSubmit(onMySubmit)}>
        <div class="mb-3">
          <input type="text" className='form-control' defaultValue={userInfo.name} placeholder="Your name" {...register("name")} />
        </div>
        <div class="mb-3">
          <input type="text" className='form-control' defaultValue={userInfo.email}  placeholder="Your email" {...register("email", {
          required: "Please Enter Your Email!",
          pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
              message: "Please Enter A Valid Email!"}
          })} />
          {errors.email && <span style={{ color: "red" }}>
            *Email* is mandatory </span>}
        </div>
        <div class="mb-3">
          <input type={"submit"} className='btn btn-primary' />
        </div>
      </form>

    </div>
  )
}

export default EditRegistration

