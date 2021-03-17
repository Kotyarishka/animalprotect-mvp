import React, { Component } from 'react';

import css from './Section.module.css';

class Content extends Component {
    constructor(props){
        super(props)

        this.state = {
            side: props.side
        }
    }
    render() {
        return (
            <div className={`${css.content} ${css[this.state.side]}`}>
                {/* <div className={css.contentItem}> */}
                    {this.props.children}
                {/* </div> */}
            </div>
        );
    }
}

export default Content;
