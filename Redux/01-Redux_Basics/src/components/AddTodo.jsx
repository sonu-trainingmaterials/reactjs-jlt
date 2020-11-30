import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
    let input;

    let addHandler=(e)=>{
        e.preventDefault();
        if (!input.value.trim()) {
            return
        }
        dispatch(addTodo(input.value));
        input.value = '';
    }
    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <form className="form-horizontal" onSubmit={addHandler}>
                    <div className="col-md-8">
                        <input className="form-control" ref={node => { input = node }} />
                    </div>
                    <button className="btn btn-success col-md-4" type="submit"> Add Todo </button>
                </form>
            </div>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo