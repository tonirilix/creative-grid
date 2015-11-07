# Deploy file

# Deploys client and server
deployall: deployserver deployclient

# Deploys server 
deployserver: 
	git subtree push --prefix server heroku master

# Deploys client
deployclient:
	echo "DEPLOYING CLIENT"
