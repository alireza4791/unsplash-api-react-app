import React from 'react';


class Searchbar extends React.Component{

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = {term: ''};
    onsubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onsubmit} className="ui form">
                <div className="field">
                    <label htmlFor="search">Search Image</label>
                    <input value={this.state.term} onChange={e => this.setState({term: e.target.value})} id="search" type="text" />
                </div>
            </form>
        </div>
        );
    };
};

export default Searchbar;