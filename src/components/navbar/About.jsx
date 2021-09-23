import React ,{useState}from 'react'
import { useForm } from 'react-hook-form'

function About() {
  const {register,handleSubmit,watch,formState:{errors}} =useForm();
  const [formData, setFormData] = useState({});
  console.log(errors);
const onSave=(data)=>{
alert('form submited')
    setFormData(data);


}


    return (
        <div>
            <h1>this is about page</h1>
            <form onSubmit={handleSubmit(onSave)}>
                <fieldset >
                    <legend>User details form </legend>
                    <div className="mb-3">
                        <label  className="form-label">Enter first name</label>
                        <input {...register('firstName',{required:'first name is required',maxLength:{value:5,message:"exceed length max lenth is 5"}})} type="text"  className="form-control" placeholder="Disabled input" />
                   
                    {errors.firstName && errors.firstName.type==='maxLength'&&<ErrorPrinter message={errors.firstName.message}/>}
                    {errors.firstName && errors.firstName.type==='required'&&<ErrorPrinter message={errors.firstName.message}/>}
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Enter last name</label>
                        <input {...register('lastName',{required:'last name is required'})}type="text" className="form-control" placeholder="Disabled input" />
                        {errors.lastName &&<ErrorPrinter message={errors.firstName.message}/>}

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Enter date birth name</label>
                        <input {...register('dob')}type="date"  className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Select city</label>
                        <select{...register('city')}  className="form-select">
                            <option value="Nagpur">Nagpur</option>
                            <option value="Pune">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" {...register('show')}type="checkbox" id="disabledFieldsetCheck" />
                            <label className="form-check-label" >
                                Can't check this
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>
            <div>{JSON.stringify(watch())}</div>
            <div></div>
        </div>
    )
}

const ErrorPrinter=({message})=>{
    return (
        <div id="validationServerUsernameFeedback" className="alert alert-danger">
       {message}
      </div>    

    )
}
export default About

