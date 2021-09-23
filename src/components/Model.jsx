import React,{useState,} from 'react'
import ActivityList from './ActivityList';

function Model() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dateValue, setDateValue] = useState(Date.now())
  const onchange=(e)=>{
    setDateValue(e.target.value);
  }

const [sdate, setDate] = useState(new Date())
  return (
    <>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
activity+
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Activity details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <form>
             <label>activity</label>
         <input className="form-control" type="text" placeholder="Disabled input here..."/>
         <label>activity date</label>
         <input className="form-control" type="date" value={dateValue} onChange={onchange} />
       
         </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">save</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Model
