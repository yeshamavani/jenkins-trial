pipeline {
    agent any
    environment{
        # All the variables that will be used in this pipeline should be described here with their values
        # for example
        DOCKERHUB_CREDENTIALS=credentials('your-docker-creds-id')
    }
    stages{
        stage('Git-clone'){
            steps{
                git branch: 'your code branch', credentialsId: 'github creds-id', url: 'url of the code repository'
            }
        }
        stage('Application-build'){
            steps{
                script{
                    # This step will require all the commands needed for application build
                    }   
            }
        }
        stage('Docker-build'){
            steps{
                script{
                    # This step contains Docker build command 
                }      
            }
        }
        stage('Docker-login') {
            steps{
            # TO Login into docker you can use this command 
		sh 'echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
	    }
	}
        stage('Docker-push'){
            steps{
                script{
                    # Command to push the Docker images to Dockerhub 
                }
            }
        }
    }
}