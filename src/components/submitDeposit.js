import React, { Component } from 'react'
import axios from 'axios'
import styles from './componentCSS'

class SubmitDeposit extends Component {
  	
	constructor() {
		super()
		this.state = {
			depositAmount: 0
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		const depositAmount = event.target.value
		this.state.depositAmount = depositAmount
	}

	handleSubmit(event) {
		event.preventDefault()
		const inputAmount = Number(this.state.depositAmount)
		if (inputAmount <= 0 ) {
			alert('Please submit a value larger than 0!')
		} else {
			this.refs.numberInput.value=''
			const newTransaction = {
				type: 'deposit',
				amount: inputAmount,
				description: 'BofA Core Checking - XXXX'
			}
			const requestURL = '/submitTransaction'
			axios.put(requestURL, newTransaction)
	      	.then(function(res) {
	        	console.log(15, res.data)
	    	})
	    	.catch((e) => {console.error('Error: ', e)}) 
		}
		   	
	}

    render() {
      
      return (
        <div style={ styles.inputContainer }>
      	  <p style={ styles.inputContainerText }>Deposit (Clears in 3 minutes):</p>
      	  <input style={ styles.inputBox} placeholder='0.00' ref='numberInput' onChange={this.handleChange} type='number' />
      	  <input style={ styles.submitButton} value='Submit' type='submit' onClick={this.handleSubmit} />
        </div>
      );
    }
}

export default SubmitDeposit;
