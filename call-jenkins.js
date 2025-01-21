const axios = require("axios");
require("dotenv").config();

// Jenkins configuration
const jenkinsBaseUrl = process.env.JENKINS_BASE_URL;
const jobName = process.env.JENKINS_JOB_NAME;
const apiToken = process.env.JENKINS_API_TOKEN;
const username = process.env.JENKINS_USERNAME;

// Build URL for parameterized jobs
const buildUrl = `${jenkinsBaseUrl}/job/${jobName}/buildWithParameters`;

// Job parameters
const jobParameters = {
  name: "admin",
  email: "admin@example.com",
  plan: JSON.stringify({
    name: "plan-name",
    description: "plan-description",
    price: 100,
  }),
};

async function triggerJenkinsJob() {
  try {
    const response = await axios.post(
      buildUrl,
      null, // No request body required; use query parameters
      {
        auth: {
          username: username,
          password: apiToken,
        },
        params: jobParameters, // Pass the parameters here
      }
    );

    if (response.status === 201) {
      console.log("Jenkins job triggered successfully!");
    } else {
      console.log(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error triggering Jenkins job:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
  }
}

// Trigger the job with parameters
triggerJenkinsJob();
