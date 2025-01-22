pipeline {
    parameters {
        string(name: 'name', defaultValue: '', description: 'Tenant name')
        string(name: 'email', defaultValue: '', description: 'Email address')
        string(name: 'plan', defaultValue: '', description: 'Plan details (JSON string)')
    }
    // agent {label "bizbook-qa-slave"}
    tools {
         nodejs 'NodeJS 20.13.1'
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
                script{
                     checkout([
                              $class: 'GitSCM',
                              branches: [[name: "master"]],
                              doGenerateSubmoduleConfigurations: false,
                              extensions: [], submoduleCfg: [],
                              userRemoteConfigs: [[
                                name: 'github',
                                credentialsId: 'yeshamavani-ssh',
                                url: "https://yeshamavani@github.com/$GIT_REPO_NAME"
                              ]]
                            ])
                }
               
            }
        }
        stage('Build') {
            steps {
                echo 'running build'
                sh 'npm install'
            }
        }
    } 
    post {
        always {
            script {
                // def payload = [
                //     status     : currentBuild.currentResult, // SUCCESS, FAILURE, etc.
                //     jobName    : env.JOB_NAME,
                //     buildNumber: env.BUILD_NUMBER,
                //     tenant     : params.name,
                //     email      : params.email
                // ]

                // Pass parameters as environment variables
            withEnv([
                "JOB_STATUS=${currentBuild.currentResult}",
                "JOB_NAME=${env.JOB_NAME}",
                "BUILD_NUMBER=${env.BUILD_NUMBER}",
                "TENANT_NAME=${params.name}",
                "TENANT_EMAIL=${params.email}"
            ]) {
                sh 'node event.js'
            }
            //    echo "Hello World"
            //    echo env.BUILD_NUMBER
            //    sh 'node event.js'
            }
        }
    }
}

