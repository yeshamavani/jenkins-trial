pipeline {
    agent any

    parameters {
        string(name: 'name', defaultValue: '', description: 'Tenant name')
        string(name: 'email', defaultValue: '', description: 'Email address')
        string(name: 'plan', defaultValue: '', description: 'Plan details (JSON string)')
    }
    environment {
        GITHUB_CREDS = credentials('yeshamavani-ssh')
        GIT_REPO_NAME = 'yeshamavani/jenkins-trial.git'
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
        stage('Checkout Github') {
            steps {
                 sh "sudo git remote rm origin"
                sh "sudo git remote add origin 'https://$GITHUB_CREDS@github.com/$GIT_REPO_NAME'"
                sh "sudo git fetch"
                sl "ls -al"
            }
        }
        stage('Build') {
            steps {
                echo 'running build'
            }
        }
    } 
    // post {
    //     always {
    //         script {
    //             def payload = [
    //                 status     : currentBuild.currentResult, // SUCCESS, FAILURE, etc.
    //                 jobName    : env.JOB_NAME,
    //                 buildNumber: env.BUILD_NUMBER,
    //                 tenant     : params.name,
    //                 email      : params.email
    //             ]

    //            echo "Hello World"
    //            echo env.BUILD_NUMBER
    //            //sh 'node event.js'
    //         }
    //     }
    // }
}

