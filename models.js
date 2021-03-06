const mongoose = require('mongoose');

const transactionHistorySchema = mongoose.Schema({
  currentBalance: {type: Number, required: true},
  availableBalance: {type: Number, required: true},
  transactions: [{
      time: {type: Date, required: true},
      type: {type: String, required: true},
      amount: {type: Number, required: true},
      description: {type: String, required: true},
      pendingClearTime: {type: Date, required: true},
      balance: {type: Number, required: true}
    }],
  pendingTransactions: [{
      time: {type: Date, required: true},
      type: {type: String, required: true},
      amount: {type: Number, required: true},
      description: {type: String, required: true},
      pendingClearTime: {type: Date, required: true},
      balance: {type: Number, required: true}
  }]
});

transactionHistorySchema.methods.apiRepr = function() {
  return {
    id: this._id,
    currentBalance: this.currentBalance,
    availableBalance: this.availableBalance,
    transactions: this.transactions,
    pendingTransactions: this.pendingTransactions
    
  };
}


const TransactionHistory = mongoose.model('TransactionHistory', transactionHistorySchema, "trasactionCollection");

module.exports = {TransactionHistory};
