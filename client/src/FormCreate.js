import React from "react"
import {Form, Header, Button } from 'semantic-ui-react'
import axios from 'axios'

class FormCreate extends React.Component {
    constructor(props) {
        super()

        this.state = {
            firstName:'',
            lastName: '',
            userAge: '',
            licenseAge: '',
            carType: '',
            carAge: '',
            engineSize: '',
            enginePower: '',
            carComment: '',
            insuranceType: '',
            price: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = () => {
        axios.post('/api/contract', 
        {
          User: {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.userAge,
            licenseAge: this.state.licenseAge
          },
          Cars: {
            type: this.state.carType,
            age: this.state.carAge,
            engineSize: this.state.engineSize,
            enginePower: this.state.enginePower,
            comment: this.state.carComment
          },
          Insurance: {
            type: this.state.insuranceType,
            price: this.state.price
          },
          comment: 'Active'
        },
        {
          headers: {'Accept': 'application/json'}
        })
          .then((response) => {
              console.log(response);
              window.location.reload();
          })
          .catch((error) => {
              console.log(error);
        });
    }

    render() {
        const { firstName, lastName, userAge, licenseAge, carType, carAge, engineSize, enginePower, carComment, insuranceType, price} = this.state

        return (
            <Form onSubmit={this.submitHandler}>
            <Header as='h3'>User Information</Header>
            <Form.Field>
              <label>First Name</label>
              <Form.Input 
              required
              name="firstName" 
              placeholder='First Name'
              value={firstName}
              onChange={this.changeHandler} />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <Form.Input 
                required
                name="lastName"
                value={lastName}
                placeholder='Last Name'
                onChange={this.changeHandler} />
            </Form.Field>
            <Form.Field>
              <label>Age</label>
              <Form.Input
                required
                name="userAge"
                value={userAge}
                placeholder='Age'
                onChange={this.changeHandler} />
            </Form.Field>
            <Form.Field>
              <label>License Age</label>
              <Form.Input required name="licenseAge" value={licenseAge} placeholder='License Age' onChange={this.changeHandler} />
            </Form.Field>
            <Header as='h3'>Cars</Header>
            <Form.Field>
              <label>Car Type</label>
              <Form.Input required name="carType" value={carType} placeholder='Car Type' onChange={this.changeHandler} />
            </Form.Field>
            <Form.Field>
              <label>Car Age</label>
              <Form.Input required name="carAge" value={carAge} placeholder='Car Age' onChange={this.changeHandler} />
            </Form.Field>
            <Form.Field>
              <label>Engine Size</label>
              <Form.Input required name="engineSize" value={engineSize} placeholder='Engine Size' onChange={this.changeHandler} />
            </Form.Field>
            <Form.Field>
              <label>Engine Power</label>
              <Form.Input required name="enginePower" value={enginePower} placeholder='Engine Power' onChange={this.changeHandler} />
            </Form.Field>
            <Form.Field>
              <label>Additional Information</label>
              <Form.TextArea required name="carComment" value={carComment} placeholder='Additional Information' onChange={this.changeHandler} />
            </Form.Field>
            <Header as='h3'>Insurance</Header>
              <Form.Field>
                <label>Insurance Type</label>
                <Form.Input required name="insuranceType" value={insuranceType} placeholder='Insurance Type' onChange={this.changeHandler} />
              </Form.Field>
              <Form.Field>
                <label>Price</label>
                <Form.Input required name="price" value={price} placeholder='Price' onChange={this.changeHandler} />
              </Form.Field>
            <Button type='submit'>Submit</Button>
          </Form>
        )
    }
}

export default FormCreate