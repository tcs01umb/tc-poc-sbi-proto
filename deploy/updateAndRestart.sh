#!/bin/bash

# any future command that fails will exit the script
set -e

# Delete the old repo
sudo rm -rf /home/ubuntu/tc-poc-sbi-app/

# clone the repo again
git clone git@gitlab.com:grp-tc-poc-services/tc-poc-sbi-app.git

#source the nvm file. In an non
#If you are not using nvm, add the actual path like

PATH=/home/ubuntu/node/bin:$PATH
#source /home/ubuntu/.nvm/nvm.sh

# stop the previous pm2
#sudo pm2 kill
#sudo npm remove pm2 -g

sudo kill $(sudo lsof -t -i:80)


#pm2 needs to be installed globally as we would be deleting the repo folder.
# this needs to be done only once as a setup script.
#sudo npm install pm2 -g
# starting pm2 daemon
#pm2 status

#sudo npm install -g serve

cd /home/ubuntu/tc-poc-sbi-app

#git checkout dev_changes

#install npm packages
#echo "Running npm install"
#sudo npm install

#chmod +x node_modules/.bin/react-scripts


#Restart the node server
#sudo npm start


#serve -s build
sudo serve -s -n build -l tcp://${PRIVATE_IP}:80 > tempout &

