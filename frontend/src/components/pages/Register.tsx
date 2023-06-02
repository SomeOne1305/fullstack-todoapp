import React from "react";
// import { useMutation } from "react-query";
// import { user } from "../../interfaces";
// type header ={
//   contentType:"application/x-www-form-urlencoded" | "application/json"| "multipart/form-data" | "text/plain"
// }
const Register = () => {
  // const register = (data:user) =>{
  //   fetch('http://localhost:8000/register',{
  //     method:"POST",
  //     headers:{
  //       contentType:"application/x-www-form-urlencoded"
  //     },
  //     body:JSON.stringify(data)
  //   })
  // }
  // const mutation = useMutation((some:user)=>register(some))
  // const {isLoading,isSuccess,isError,error} = mutation
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) :void=>{
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)
    const object = Object.entries(formdata)
    console.log(object,e.currentTarget,e.target);
  }
  return (
    <div className="w-100 d-flex justify-content-center align-items-center bg-simple">
      <form action="http://localhost:8000/register" onSubmit={e=>onSubmit(e)} className="p-3 rounded-2 bg-white form needs-validation">
        <div className="w-100 text-center">
          <span className="fs-1 text-primary">Register</span>
        </div>
        <div className="d-flex gap-3 my-2">
          <div className="has-validation">
            <label className="form-label" htmlFor="firstName">Firstname</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstName"
              required
            />
            <div className="invalid-feedback">
              Firstname is required *
            </div>
          </div>
          <div>
            <label className="form-label" htmlFor="lastName">Lastname</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastName"
            />
          </div>
        </div>
        <div className="w-auto my-2">
          <label className="form-label" htmlFor="email">Email</label>
          <input type="text" name="email" className="form-control" id="email" />
        </div>
        <div className="d-flex my-2 gap-3">
          <div>
            <label className="form-label" htmlFor="password1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password1"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password2">Repeat password</label>
            <input
              type="password"
              id="password2"
              className="form-control"
            />
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn w-100 text-center btn-primary mt-2">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
