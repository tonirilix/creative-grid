# build an executable named myprog from myprog.c
deployall: deployserver deployclient

deployserver: 
	git subtree push --prefix server heroku master

deployclient:
	echo "DEPLOYING CLIENT"
