pipeline {
    agent any

    parameters {
        string(name: 'name', defaultValue: '', description: 'Tenant name')
        string(name: 'email', defaultValue: '', description: 'Email address')
        string(name: 'plan', defaultValue: '', description: 'Plan details (JSON string)')
    }

    stages {
        stage('Consume Parameters') {
            steps {
                script {
                    echo "Name: ${params.name}"
                    echo "Email: ${params.email}"
                    
                    def planDetails = readJSON text: params.plan
                    echo "Plan Name: ${planDetails.name}"
                    echo "Plan Description: ${planDetails.description}"
                    echo "Plan Price: ${planDetails.price}"
                }
            }
        }

        stage('Build') {
            steps {
                echo 'running build'
            }
        }
    } 
    post {
        always {
            script {
                // Define the API endpoint and payload
                //def apiEndpoint = 'https://09cc-2405-201-2-1c64-88-cb0f-b30b-a0a4.ngrok-free.app/invoke-jenkins-webhook'
                def payload = [
                    status     : currentBuild.currentResult, // SUCCESS, FAILURE, etc.
                    jobName    : env.JOB_NAME,
                    buildNumber: env.BUILD_NUMBER,
                    tenant     : params.name,
                    email      : params.email
                ]

                // Convert payload to JSON
                //def payloadJson = groovy.json.JsonOutput.toJson(payload)

               echo "Hello World"
               //echo $payload
               echo env.BUILD_NUMBER
            }
        }
    }
}

