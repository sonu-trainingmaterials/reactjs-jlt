const AppInfo = ({ name , color}) => <div className="card">
    <div className="card-header"><h6>Application</h6></div>
    <div className="card-body">
        <div className="card-title">{name}</div>
        <div className="card-text">
            This is a sample react application.
        </div>
        <p>Color:{color}</p>
    </div>
</div>

export default AppInfo;