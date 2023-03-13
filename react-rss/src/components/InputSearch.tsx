import React, { Component, ReactNode } from "react";

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchStorage: localStorage.getItem('')
        }
    }
    render(): ReactNode {
        return (
            <form>
                <input type="text"
                placeholder='Looking for...'
                />
            </form>
        )
    }
}