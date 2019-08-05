import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = event => {
    /* onInputChange is callback that will be passed down to child element 
input. We take value of input out of the event object and assign it to state
property -> "term" */
        this.setState({term: event.target.value});
    }

    /* onFormSubmit is callback that will be passed down to child element
    form */
    onFormSubmit = event => {
        event.preventDefault(); //Prevents broswer from automatically submitting form anytime user submits it
        this.props.onFormSubmit(this.state.term);
    }

//We wire event handler onInputChange with onChange prop on input in render section

    render() {
        return(
            //Custom CSS styling with semantic ui CDN
            <div className="search-bar ui segment">
                <form onSubmit = {this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type = "text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>  
            </div>
        )
    }
}
export default SearchBar;