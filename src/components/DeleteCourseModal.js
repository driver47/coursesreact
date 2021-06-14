import React from "react";
import Modal from "./Modal";


function DeleteCourseModal (props) {
    return <Modal isOpen={props.isOpen} onClose={props.onClose}> 
    <div className="DeleteCourseModal">
     
     <h3>Are You Sure?</h3>
     <p>You are about to delete this course</p>

     <div>
         <button onClick={props.onDeleteCourse} className="btn btn-danger mr-4">Delete</button>
         <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
     </div>

    </div>

    </Modal>

}

export default DeleteCourseModal; 