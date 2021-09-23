import React from 'react'
import Activity from './Activity'

function ActivityList(props) {
    // const {list,update,delete} =props;
    return (
        <div>
            <ul className="list-group">
                {props.list.map((x, index) => 
                <Activity key={x} item={x} remove={props.remove} update={props.update} index={index}/>
                )}


            </ul>
        </div>
    )
}

export default ActivityList
