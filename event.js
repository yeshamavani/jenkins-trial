console.log("Hello, world! from eventttt");

const jobStatus = process.env.JOB_STATUS;
const jobName = process.env.JOB_NAME;
const buildNumber = process.env.BUILD_NUMBER;
const tenantName = process.env.TENANT_NAME;
const tenantEmail = process.env.TENANT_EMAIL;

console.log(`Job status: ${jobStatus}`);
