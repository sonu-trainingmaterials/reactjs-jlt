
import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import CardWithStyle from './hoc/StyledCard';
import SearchBar from './SearchBar';
import HomeContext from '../contexts/HomeContext';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    static propTypes = {
        profiles: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            sex: PropTypes.string.isRequired,
            birthdate: PropTypes.string.isRequired,
            phonenumber: PropTypes.string.isRequired,
            photo: PropTypes.string,
            address: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            favorite: PropTypes.bool,
            createdTs: PropTypes.string,
            updatedTs: PropTypes.string
        }))
    }

    static defaultProps = {
        profiles: []
    }

    // static getDerivedStateFromProps(props, state) {
    //     //executes after the component is initialized or re-rendered
    //     //return the state object with updated props value
    //     console.log("getDerivedStateFromProps")
    //     return { count: props.profiles.length };
    // }

    componentDidMount() {
        //console.log("ComponentDidMount");
        this.props.loadData();
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log('shouldComponentUpdate');
        // if (this.props.xvalue != nextProps.xvalue) {
        //     return true;
        // } else {
        //     return false;
        // }
        return true;
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    // }

    componentDidUpdate() {
        //console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        //console.log("ComponentWillUnmount");
    }

    search(text) {
        this.props.doSearch(text);
    }

    render() {
        let items= (this.props.searchText)?this.props.result:this.props.profiles;
        let StyledCard = CardWithStyle(Card);
        return (
            <HomeContext.Provider value={{handleSearch:this.search}}>
                <div className="row">
                    <div className="col-md-12">
                        <SearchBar/>
                        <h2>Profiles List ({items.length})</h2>
                        <div className="row">
                            {
                                items.map(
                                    (item, index) => <div key={index} className="col-md-6"> <StyledCard data={item} /></div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </HomeContext.Provider>
        )
    }
}
