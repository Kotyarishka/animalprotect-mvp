import React, { Component } from 'react';
import { Section } from 'react-scroll-section';

import css from './Section.module.css';

class MySection extends Component {
    constructor(props){
        super(props)
        let theme = false;

        if (props.theme === 'dark') theme = true;

        this.state = {
            theme: theme,
            title: props.title,
            subtitle: props.subtitle
        }
    }
    
    render() {
        return (
            <Section id={this.props.id}>
                <div className={`${css.section} ${this.state.theme ? css.dark : css.light}`}>
                    <h2>
                        {this.state.title}
                    </h2>
                    <h4>
                        {this.state.subtitle}
                    </h4>
                    {this.props.children}
                </div>
            </Section>
        );
    }
}

export default MySection;
