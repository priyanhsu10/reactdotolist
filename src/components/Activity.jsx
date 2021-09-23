import React, { useRef, useState } from 'react'

export default function Activity({ item, update, remove, index }) {
    const [showedit, setshowEdit] = useState(false);
    const [edited, setedited] = useState(item)
    const onEdit = () =>{
        setshowEdit(s => !s)
       
    } 
    const onUpdate = () => {
        update(index, edited)
        onEdit();
    }
    return (
        <div>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-10">
                        {!showedit && <label> {item}</label>}

                        {showedit && <input type='text' className="form-control" value={edited} onChange={(e)=>setedited(e.target.value)} />}
                        {showedit && <input type='date' className="form-control"></input>}   </div>
                 
                    <div className="col-sm-2">
                        <button type='button' onClick={() => { remove(item) }}>remove</button>

                        {!showedit && <button type='button' onClick={onEdit}>edit</button>}

                        {showedit && <button type='button' onClick={onUpdate}>update</button>}

                    </div>
                </div>

            </li>
        </div>
    )
}
