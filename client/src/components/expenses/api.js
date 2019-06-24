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
export const getExpenses = pageNum => {
    return Axios.get(`/api/expenses?page=${pageNum}`)
    .then(response => {
        return response.data;
    })
    .catch( err => {
        console.log(err)
    });
}