
import { useState } from "react";

export default function TransactionForm({setTransactions}) {
    //const [type, setType] = useState("Withdrawal")
    //const [amount, setAmount] = useState(1)
    const[formData, setFormData] = useState({
      
      type :"" ,
      amount :1
    })

   
    function handleSubmit(event){
        event.preventDefault()

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let id = `${letters.charAt(
          Math.floor(Math.random() * letters.length)
        )}${Math.floor(Math.random() * 100000)}${letters.charAt(
          Math.floor(Math.random() * letters.length)
        )}`;

        let newTransaction = {
          id,
          type: formData.type,
          amount: Number(formData.amount),
        };
    

    //setFormData((prev) => {
    //  return { ...prev, id };
   // })
   setFormData({
    type: "",
    amount: 1,
  });

       setTransactions( (prev) => [...prev,newTransaction])
    }

const handleOnChange = (event)=>{
  setFormData ({...formData, [event.target.name] : event.target.value})
}



  return (
    <div className="col-3">
    <form onSubmit={handleSubmit} className="p-2 m-4 border rounded">
        <h6>Add Transaction</h6>
      <div className="mb-3">
        <label htmlFor="transactionType" className="form-label">
          Transaction Type
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="transactionType"
          placeholder="e.g.Deposit"
          name="type"
          value={formData.type}
          onChange={ handleOnChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="transactionAmount" className="form-label">
          Transaction Amount
        </label>
        <input
          type="number"
          className="form-control form-control-sm"
          id="transactionAmount"
          min={1}
          name="amount"
          value={formData.amount}
          onChange={handleOnChange}
        />
      </div>
      <div className="d-grid gap-2 col-12 mx-auto">
        <button className="btn btn-dark btn-sm" type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}