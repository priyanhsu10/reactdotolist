import { isNil } from 'lodash'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'

function ActivityCreator({add}) {
     const {register,handleSubmit,reset}=useForm()
    const onSave = (data) => {
       add(data.activity) 
reset();
    }
    return (

        <form onSubmit={handleSubmit(onSave)}>

            
            <div className="input-group date" >
                <input type="text" className="form-control" {...register('activity',{required:true})}/>
                <div className="input-group-addon">

                    <button type='submit' className="btn btn-primary" > +</button>
                </div>
            </div>
        </form>

    )
}

export default ActivityCreator
