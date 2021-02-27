import React, {useState} from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'


const FuelPriceForm = () => {

  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <form>
      <div>
        <label>Number of Gallons Requested? (required) </label>
        <input></input>
      </div>
      <div>
        <label>Delivery Address</label>
        <input></input>
      </div>
     <div>
        <DatePicker 
        //selected={selectedDate}
        //onChange={date => setSelectedDate(date)}
        />
     </div>
     <div>Suggested Price=</div>
     <div>Total Amount=</div>
    </form>
    

  )
}

export default FuelPriceForm
