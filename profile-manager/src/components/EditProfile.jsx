import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class EditProfileForm extends Component {

    constructor(props) {
        super(props);
        let id = this.props.match.params.id;
        props.doGetById(id);
        this.state = {
            profile: props.profile,
            errors: {
                name: "",
                email: "",
                phonenumber: "",
                birthdate: "",
                country: "",
                city: "",
                address: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target; //ES6 object destructuring 
        //let  name = e.target.name; //ES5 manual assignment
        //let value= e.target.value; //ES5 

        //Update the state with form control values
        let profile = this.state.profile;
        profile[name] = value;

        //Error validations
        let errors = this.state.errors;
        switch (name) {
            case "name":
                if (!value || value.length === 0) errors.name = "Name cannot be empty";
                else if (value.length < 3) errors.name = "Minimum 3 characters required";
                else errors.name = "";
                break;
            case "email":
                //eslint-disable-next-line
                let pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                if (!value || value.length === 0) errors.email = "Email cannot be empty";
                else if (!pattern.test(value)) errors.email = "Invalid email format";
                else errors.email = "";
                break;
            case "birthdate":
                if (!value || value.length === 0) errors.birthdate = "Birth date cannot be empty";
                else errors.birthdate = "";
                break;
            case "phonenumber":
                if (!value || value.length === 0) errors.phonenumber = "Phone number cannot be empty";
                else errors.phonenumber = "";
                break;
            case "city":
                if (!value || value.length === 0) errors.city = "City cannot be empty";
                else errors.city = "";
                break;
            case "address":
                if (!value || value.length === 0) errors.address = "Address cannot be empty";
                else errors.address = "";
                break;
            case "country":
                if (!value || value.length === 0) errors.country = "Country cannot be empty";
                else errors.country = "";
                break;
            default:
                break;
        }

        this.setState({ profile, errors });
    }


    handleSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            this.props.doUpdate(this.state.profile);
            this.props.history.push('/')
        }
        else
            alert("Invalid");
    }

    validateForm() {
        let profile = this.state.profile;
        let errors = this.state.errors;
        let valid = true;
        Object.keys(profile).forEach((field) => {
            let value = profile[field];
            switch (field) {
                case "name":
                    if (!value || value.length === 0) errors.name = "Name cannot be empty";
                    else if (value.length < 2) errors.name = "Minimum 2 characters required";
                    else errors.name = "";
                    break;
                case "email":
                    //eslint-disable-next-line
                    let pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    if (!value || value.length === 0) errors.email = "Email cannot be empty";
                    else if (!pattern.test(value)) errors.email = "Invalid email format";
                    else errors.email = "";
                    break;
                case "birthdate":
                    if (!value || value.length === 0) errors.birthdate = "Birth date cannot be empty";
                    else errors.birthdate = "";
                    break;
                case "phonenumber":
                    if (!value || value.length === 0) errors.phonenumber = "Phone number cannot be empty";
                    else errors.phonenumber = "";
                    break;
                case "city":
                    if (!value || value.length === 0) errors.city = "City cannot be empty";
                    else errors.city = "";
                    break;
                case "address":
                    if (!value || value.length === 0) errors.address = "Address cannot be empty";
                    else errors.address = "";
                    break;
                case "country":
                    if (!value || value.length === 0) errors.country = "Country cannot be empty";
                    else errors.country = "";
                    break;
                default:
                    break;
            }
        })
        this.setState({ errors, profile });

        Object.values(errors).forEach((val) => (val.length > 0) && (valid = false));
        return valid;
    }

    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         ...this.state,
    //         profile:nextProps.profile
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            ...prevState,
            profile: nextProps.profile
        }
    }

    render() {
        let errors = this.state.errors;
        return (
            this.props.profile ?
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h2>Update Profile</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="col-sm-2 control-label">Name</label>
                                    <input type="text" className="form-control" name="name" defaultValue={this.props.profile.name} onChange={this.handleChange} />
                                    {errors.name.length > 0 && <div className="text-danger">{errors.name}</div>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="col-sm-2 control-label">Email</label>
                                    <input type="email" name="email" className="form-control" defaultValue={this.props.profile.email} onChange={this.handleChange} />
                                    {errors.email.length > 0 && <div className="text-danger">{errors.email}</div>}
                                </div >
                            </div >
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="col-sm-2 control-label">Photo</label>
                                    <input type="text" className="form-control" name="photo" defaultValue={this.props.profile.photo} onChange={this.handleChange} />

                                </div>
                                <div className="form-group col-md-6">
                                    <label className="col-sm-2 control-label">Sex</label>
                                    <select name="sex" className="form-control" defaultValue={this.props.profile.sex} onChange={this.handleChange}>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                </div >
                            </div >
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="col-sm-2 control-label">Birthday</label>
                                    <input type="date" name="birthdate" className="form-control" defaultValue={this.props.profile.birthdate} onChange={this.handleChange} />
                                    {errors.birthdate && <div className="text-danger">{errors.birthdate}</div>}
                                </div >
                                <div className="form-group col-md-6">
                                    <label className="col-sm-2 control-label">Phone</label>
                                    <input type="tel" name="phonenumber" className="form-control" defaultValue={this.props.profile.phonenumber} onChange={this.handleChange} />
                                    {errors.phonenumber && <div className="text-danger">{errors.phonenumber}</div>}
                                </div >
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="col-sm-2 control-label">Address</label>
                                    <input type="text" name="address" className="form-control" defaultValue={this.props.profile.address} onChange={this.handleChange} />
                                    {errors.address && <div className="text-danger">{errors.address}</div>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="col-sm-2 control-label">City</label>
                                    <input type="text" name="city" className="form-control" defaultValue={this.props.profile.city} onChange={this.handleChange} />
                                    {errors.city && <div className="text-danger">{errors.city}</div>}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="col-sm-2 control-label">Country</label>
                                    <input type="text" name="country" defaultValue={this.props.profile.country} className="form-control" onChange={this.handleChange} />
                                    {errors.country && <div className="text-danger">{errors.country}</div>}
                                </div >
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12 text-center">
                                    <button type="submit" className="btn btn-primary" >Update</button>
                                </div>
                            </div >
                        </form >
                    </div >
                </div > : <h3>Loading</h3>

        );
    }

}


//use HOC withRouter to add history property 
export default withRouter(EditProfileForm);