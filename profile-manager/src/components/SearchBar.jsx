import { useRef } from "react";
import HomeContext from '../contexts/HomeContext';

const SearchBar = ({ handleSearch }) => {
    //const [text, setText] = useState('');
    const searchInput = useRef();

    // const handleKeyUp = (e)=>{
    //     e.preventDefault();
    //     setText(e.target.value);
    //     handleSearch(e.target.value);
    // }

    const handleClick = (e, searchHandler) => {
        e.preventDefault();
        searchHandler(searchInput.current.value)
    }

    return (
        <HomeContext.Consumer>
            {({handleSearch}) => {
                return(<div className="row bg-success">
                    <div className="col-md-12">
                        <form className="form-inline">
                            <div className="form-group">
                                <label className="sr-only" htmlFor="search">Search name</label>
                                {/* <input type="text" className="form-control mb-2 mr-sm-2" id="searchText"
                            placeholder="Search by name" onKeyUp={handleKeyUp} /> */}
                                <input type="text" className="form-control form-control-sm mb-2 mr-sm-2" id="searchText"
                                    placeholder="Search by name" ref={searchInput} />
                                <button className="btn btn-primary btn-sm" 
                                onClick={(e)=>handleClick(e,handleSearch)}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>)
            }}
        </HomeContext.Consumer>
    )
}

export default SearchBar;