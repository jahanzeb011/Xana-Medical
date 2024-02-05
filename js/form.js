document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const url = 'http://202.12.103.129/send_mail';
    const headers = {
      'accept': 'application/json',
      'X-API-Key': 'your-secret-key',
      'Content-Type': 'application/json',
    };

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const subject = document.getElementById('subject').value;
    const phone = document.getElementById('phone').value;
    const note = document.getElementById('note').value;

    const data = {
      "query_mail": email,
      "Name": name,
      "Designation": designation,
      "title": subject,
      "phone_number": phone,
      "body": note
    };

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(responseData => {
      console.log('API Response:', responseData);
      // Handle response as needed
      alert('Form submitted successfully!');
        // Clear form fields
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error occurred. Please try again later.');
    });
  });