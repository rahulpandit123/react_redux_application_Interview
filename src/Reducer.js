import action from './Action';

const initialState = 0;

const changeTheNumber = (state= initialState, action) => {
  switch (action.type) {
    case "ADDNUMBER": return state + action.payload; 
    case 'SUBNUMBER': return state - action.payload; 
    
      
      
  
    default: return state;
      
  }
}

export default changeTheNumber;