import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const LinkBar = () => (
    <div className="row" style={{marginTop:"10px"}}>
        <div className="col-md-6 col-md-offset-3">
            Show:{' '}<FilterLink filter={VisibilityFilters.SHOW_ALL}> All </FilterLink>
            {', '} <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}> Active</FilterLink>
            {', '} <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}> Completed </FilterLink>
        </div>
    </div>
)

export default LinkBar