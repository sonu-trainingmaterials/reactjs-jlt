import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function About(props) {
    let bgColor = "lightyellow";
    let modifiedChildren = React.Children.map(props.children, (child) => {
        return React.cloneElement(child, { color: bgColor })
    });

    const history = useHistory();

    //equivalent to componentDidMount() and componentDidUpdate()
    useEffect(()=>{
        console.log("Rendered about page");
    })

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <h2>About</h2>
                    <button className="btn btn-success btn-sm" onClick={()=>history.push('/')}>Go to Home</button>
                    {modifiedChildren}
                </div>
            </div>
            <div>
                <p>Created by Sonu Sathyadas</p>
            </div>
        </Fragment>
    );
}