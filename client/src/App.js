import React, { useState, useEffect } from "react"
import contractService from './services/contractService'
import FormCreate from './FormCreate'
import { Message, Image, Header } from 'semantic-ui-react'

function App() {
  const [contracts, setContracts] = useState(null)
  
  useEffect(() => {
    if(!contracts) {
      getContracts()
    }
  })

  const getContracts = async () => {
    let res = await contractService.getAll()
    setContracts(res)
  }

  const renderContract = contracts => {
    return (
        <div class="ui card" style={{ width: "25%" }}>
        <div class="image">
          <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" size='small' />
        </div>
        <div class="content">
          <div class="header">{ contracts.User.firstName ? contracts.User.firstName : '' } { contracts.User.lastName ? contracts.User.lastName : ''  }</div>
          <div class="meta"><span class="date">Contract created at { contracts.createdAt ? contracts.createdAt : ''   }</span></div>
          <div class="description">
            <div style={{ border: "1px solid rgba(34,36,38,.1)", marginBottom: "4px", padding: "5px"}}>
              <h4>User Information</h4>
              <div><strong>Name:</strong> { contracts.User.firstName ? contracts.User.firstName : '' } { contracts.User.lastName ? contracts.User.lastName : ''  }</div>
              <div><strong>Age:</strong> { contracts.User.age ? contracts.User.age : '' }</div>
              <div><strong>License Age:</strong> { contracts.User.licenseAge ? contracts.User.licenseAge : '' }</div>
            </div>
            <div style={{ border: "1px solid rgba(34,36,38,.1)", marginBottom: "4px", padding: "5px"}}>
              <h4>Cars Information</h4>
              <div><strong>Car Type:</strong> { contracts.Cars.type ? contracts.Cars.type : '' }</div>
              <div><strong>Car Age:</strong> { contracts.Cars.age ? contracts.Cars.age : '' }</div>
              <div><strong>Engine Size:</strong> { contracts.Cars.engineSize ? contracts.Cars.engineSize : '' }</div>
              <div><strong>Engine Power:</strong> { contracts.Cars.enginePower ? contracts.Cars.enginePower : '' }</div>
              <div><strong>Additional Info:</strong> { contracts.Cars.comment ? contracts.Cars.comment : '' }</div>
            </div>
            <div style={{ border: "1px solid rgba(34,36,38,.1)", marginBottom: "4px", padding: "5px"}}>
              <h4>Insurance Information</h4>
              <div><strong>Insurance Type:</strong> { contracts.Insurance.type ? contracts.Insurance.type : '' }</div>
              <div><strong>Price:</strong> { contracts.Insurance.type ? contracts.Insurance.price : '' }</div>
            </div>
          </div>
        </div>
      </div>
      )
  }

  return (
    <div className="App">
      <Header textAlign="center" as='h1'>Contracts</Header>
      <div class="ui cards" style={{ margin: "auto", justifyContent: "center" }}>
        {(contracts && contracts.length > 0) ? (
          contracts.map(contract => renderContract(contract))
        ) : (
          <Message negative>
            <Message.Header>No contracts found</Message.Header>
          </Message>
        )}
      </div>
      <div style={{ width: "60%", margin: "auto", marginTop: "50px", padding: "15px", border: "1px solid rgba(34,36,38,.1)" }}>
        <Header as='h2'>Create New Contract</Header>
        <FormCreate />
      </div>
    </div>
  )
}

export default App;
