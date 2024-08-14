import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();  // Corrected typo in preventDefault()
        if (!title || !description) {
            alert("Title and Description cannot be blank!");
            return ("");// Return to prevent further execution if the fields are blank
        }else{
        props.addTodo(title, description);
        setTitle(""); // Clear the form fields after submission
        setDescription("");
        }
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Add Work</h2>
            <form onSubmit={submit}>
                <div className="mb-3">  
                    <label htmlFor="title" className="form-label">Add Title</label> 
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control" 
                        id="title"
                    />
                </div>
                <div className="mb-3">  
                    <label htmlFor="description" className="form-label">Add Description</label> 
                    <input
                        type="text"
                        value={description}
                        className="form-control" /* Corrected ClassName to className */
                        onChange={(e) => setDescription(e.target.value)}
                        id="description"
                    />
                </div>
                <button type="submit" className="btn btn-success">Add Work</button> 
            </form>
        </div>
    );
}

export default AddTodo;
