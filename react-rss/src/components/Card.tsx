import React, { Component } from "react";
import { IProduct } from "types/types";

export default class Card extends Component<IProduct> {
    render(): React.ReactNode {
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                <div className="align-self-center">
                    <img className="h-200px" src={this.props.thumbnail} alt={this.props.title} />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{this.props.title.toLocaleUpperCase()}</div>
                    <div>{this.props.description}</div>
                    <div>
                        <b>Brand: </b> {this.props.brand}
                    </div>
                    <div>
                        <b>Rating: </b>
                        {this.props.rating}
                    </div>
                    <div className="flex-grow text-right">
                        <span className="font-bold text-xl">{this.props.price}$</span>
                    </div>
                </div>
                
            </div>
        );
    }
}