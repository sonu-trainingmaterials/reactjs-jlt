import React from 'react';

const AuthorInfo = ({ author, company, color }) => <div className="card" >
    <div className="card-header"><h6>Author</h6></div>
    <div className="card-body">
        <p><strong>Name: {author}</strong></p>
        <p><strong>Company:{company}</strong></p>
        <p>Color:{color}</p>
    </div>
</div>

export default React.memo(AuthorInfo);