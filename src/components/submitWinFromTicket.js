import React, { Component } from 'react'
import axios from 'axios'
import styles from './componentCSS'
class SubmitWinFromTicket extends Component {
  	
	constructor() {
		super()
		this.state = {
			winAmount: 0
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		const winAmount = event.target.value
		this.state.winAmount = winAmount
		console.log(7, winAmount)
	}

	handleSubmit(event) {
		const inputAmount = Number(this.state.winAmount)
		if (inputAmount <= 0 ) {
			alert('Please submit a value larger than 0!')
		} else {
			this.refs.numberInput.value=''
			const ticketNumber = Math.floor(10000000 + Math.random() * 90000000)
			const newTransaction = {
				type: 'winFromTicket',
				amount: inputAmount,
				description: `Ticket #${ticketNumber}`
			}
			const requestURL = '/submitTransaction'
			console.log(16, newTransaction)
			axios.put(requestURL, newTransaction)
	      	.then(function(res) {
	        	console.log(15, res)
	    	})
	    	.catch((e) => {console.error('Error: ', e)})
	    }
	}

    render() {
      return (
        <div style={ styles.inputContainer }>
      	  <p style={ styles.inputContainerText }>Win from ticket (Clears instantly):</p>
      	  <input style={ styles.inputBox} placeholder='0.00' ref='numberInput' onChange={this.handleChange} type='number' />
      	  <input style={ styles.submitButton} value='Submit' type='submit' onClick={this.handleSubmit} />
        </div>
      );
    }
}

export default SubmitWinFromTicket
