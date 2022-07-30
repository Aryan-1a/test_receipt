import { useState } from 'react';
import './App.css';

function App() {
  const [date, setdate] = useState('');
  const [amount, setamount] = useState('');
  const [remark, setremark] = useState('');
  const [paymentmethod, setpaymentmethod] = useState('Cash');
  const [data, setdata] = useState([]);
  const [counter, setcounter] = useState(1);
  const handledatechange = (e) => {
    setdate(e.target.value)
    console.log(date)
  }
  const handleamountchange = (e) => {
    setamount(e.target.value)
  }
  const handleremarkchange = (e) => {
    setremark(e.target.value)

  }
  const handlepaymentmethodchange = (e) => {

    setpaymentmethod(e.target.value)
  }
  const handlesubmit = (e) => {
    setcounter(counter + 1)
    let newdata = { counter: counter, date: date, amount: amount, paymentmethod: paymentmethod, remark: remark }
    setdata(data => data.concat(newdata));
    setdate('')
    setamount('')
    setpaymentmethod('Cash')
    setremark('')
  }
  return (
    <div>

<table> <tr><td>
     <label>
        Date &emsp;&emsp;&emsp;&emsp;</label></td><td><input onChange={handledatechange} value={date} type="date" placeholder='Enter the Date' required
        /></td></tr>
    <tr><td>
      <label>
        Amount &emsp;&emsp;&emsp;&emsp;</label></td><td><input onChange={handleamountchange} value={amount} type="text" placeholder='Enter Amount (in INR)' required
        /></td></tr> 
      <tr><td>
      <label for="payment Mode">
        Payment Mode &emsp;&emsp;&emsp;&emsp;</label> </td><td><select onChange={handlepaymentmethodchange} id="payment Mode"> <option value="Cash">Cash</option>
          <option value="UPI">UPI</option>
          <option value="Credit/Debit Card">Credit/Debit Card</option>
        </select></td></tr>
        <tr><td>
      <label>
        Remark &emsp;&emsp;&emsp;&emsp;</label></td><td><input onChange={handleremarkchange} value={remark} placeholder='Enter Remark'
        />
      </td></tr> </table>
      <button onClick={handlesubmit}>Submit</button>



      <table>
        <tr>
          <th>Sr.no</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Payment Method</th>
          <th>Remark</th>
        </tr>
        {!data ? '' : (data.map((info) => {
          return (
            <tr>
              <th>{info.counter}</th>
              <th>{info.date}</th>
              <th>{info.amount}</th>
              <th>{info.paymentmethod}</th>
              <th>{info.remark}</th>
            </tr>
          )
        }))}
      </table>
    </div >



  );
}

export default App;