// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => response.json())
    .then(data => {
      // Handle successful response and append id to the DOM
      document.body.innerHTML += data.id;
    })
    .catch(error => {
      // Handle error and append error message to the DOM
      document.body.innerHTML += error.message;
    });
  }
  
