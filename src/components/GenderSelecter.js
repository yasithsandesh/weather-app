import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "../index.css";

export default function ControlledRadioButtonsGroup({setGender,gender}) {
 

  const handleChange = (event) => {
    setGender(event.target.value);
  };
 

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={gender}
        onChange={handleChange}
      >
        <div className='flex flex-row'>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        </div>
        
      </RadioGroup>
    </FormControl>
  );
}