import React from "react";

class SearchBar extends React.Component{
    state = {text: ''};

    onInputChange = (event) => {
        this.setState({text: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.text);
    }

    render(){
        return (
        <div className="search-bar ui segement">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" onChange={this.onInputChange} value={this.state.text}/>
                </div>
            </form>
        </div>
        );
    }
}
export default SearchBar;