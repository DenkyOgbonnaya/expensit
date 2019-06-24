import Axios from 'axios';

export const addExpense = expense => {
    return Axios.post('/api/expenses', expense)
      .then( response => {
        return response.data;
      })
      .catch( err => {
          console.log(err)
      });
}
export const getExpenses = () => {
    return Axios.get('/api/expenses')
    .then(response => {
        return response.data;
    })
    .catch( err => {
        console.log(err)
    });
}