import React from "react";

export class InputComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log("Hey, InputComponent", this.props);
    }


    render() {
        return (
            <div className="form-group">
                <input
                    className="form-control input-lg"
                    required="required"
                    placeholder={this.props.label}
                    type={this.props.type}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={(event) => this.props.handleChange2(event)}
                />
                {this.props.submitted && this.props.value && (
                    <p>{this.props.name} is required</p>
                )}
            </div>
        );
    }
}