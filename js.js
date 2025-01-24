 const client = new Appwrite.Client();
  const database = new Appwrite.Databases(client);

  const client = new Appwrite.Client();
const database = new Appwrite.Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your AppWrite endpoint
  .setProject('6790659400042e1e2f83'); // Your AppWrite project ID

 // Initialize AppWrite client and database connection
  const client = new Appwrite.Client();
  const database = new Appwrite.Databases(client);

  client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your AppWrite endpoint
    .setProject('6790659400042e1e2f83'); // Your AppWrite project ID

  // Function to handle form submission
  document.getElementById('community-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const type = document.getElementById('type').value;
    const message = document.getElementById('message').value;

    const submissionData = {
      name: name,
      email: email,
      type: type,
      message: message,
    };

    console.log("Submitting data:", submissionData); // Debug log to check data being submitted

    // Send data to AppWrite database
    database.createDocument('679067d3001a9d335ee4', '679067e6001db056027c', submissionData)
      .then(response => {
        console.log('Submission successful:', response); // Log the response from AppWrite
        document.getElementById('community-form').reset(); // Reset form after submission
        loadSubmissions(); // Reload submissions if you want
      })
      .catch(error => {
        console.error('Error:', error); // Log the error to the console if there's an issue
      });
  });

  // Optionally load submissions after a successful submission
  function loadSubmissions() {
    database.listDocuments('679067d3001a9d335ee4', '679067e6001db056027c')
      .then(response => {
        const submissions = response.documents;
        const contributionsContainer = document.getElementById('contributions-container');
        contributionsContainer.innerHTML = ''; // Clear existing content

        submissions.forEach(submission => {
          const submissionElement = document.createElement('div');
          submissionElement.classList.add('submission');
          submissionElement.innerHTML = `
            <h3>${submission.name} - ${submission.type}</h3>
            <p>${submission.message}</p>
            <small>Submitted on ${new Date(submission.timestamp).toLocaleString()}</small>
          `;
          contributionsContainer.appendChild(submissionElement);
        });
      })
      .catch(error => {
        console.error('Error fetching submissions:', error);
      });
  }

  // Load submissions when the page loads
  window.onload = loadSubmissions;
		  
       <script src="https://cdn.jsdelivr.net/npm/appwrite@16.1.0"></script>
<script>
    const { Client } = Appwrite;// JavaScript Document