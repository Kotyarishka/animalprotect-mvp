import React, { Component } from 'react';

import css from './Section.module.css';


class Content extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: props.title,
        }
    }

    renderTitle() {
        return <span className={css.title}>{this.state.title}<br/></span>
    }

    render() {
        return (
            <div className={css.item_wrapper}>
                { this.state.title ? this.renderTitle() : '' }
                <p>
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default Content;
