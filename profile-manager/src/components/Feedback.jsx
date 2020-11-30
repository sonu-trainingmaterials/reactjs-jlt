import React,{ Component } from "react";

export default class Feedback extends Component{

    constructor(props){
        super(props);
        this.email = React.createRef();
        this.feedback = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.email.current.value);
        console.log(this.feedback.current.value);
    }

    render(){
        return (
        <div className="row">
            <div className="col-md-4 mx-auto">
                <h2>Feedback</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" ref={this.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Your feedback</label>
                        <textarea className="form-control" ref={this.feedback} ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
        </div>
        );
    }
}