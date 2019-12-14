#!/bin/bash

# any future command that fails will exit the script
set -e

# Lets write the public key of our aws instance
# ps -p $SSH_AGENT_PID > /dev/null
#then
#   echo "ssh-agent is already running"
#   echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
#   # Do something knowing the pid exists, i.e. the process with $PID is running
#else
#eval "ssh-agent -s"
#echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
#fi
#eval $(ssh-agent -s)
#echo "$PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null

# ** Alternative approach
#echo -e "$PRIVATE_KEY" > /root/.ssh/id_rsa
#chmod 600 /root/.ssh/id_rsa
# ** End of alternative approach

#- mkdir -p ~/.ssh
#- echo -e "$PRIVATE_KEY" | tr -d '\r' > /root/.ssh/id_rsa
#- chmod 700 ~/.ssh/id_rsa
#- eval "$(ssh-agent -s)"
#- [ -z $SSH_AUTH_SOCK ] && `eval ssh-agent` && ssh-add ~/.ssh/id_rsa

# disable the host key checking.
./deploy/disableHostKeyChecking.sh

echo "start perm key"
echo "${PEM_KEY}" > tcslab.pem
echo "end key"

echo "start private key"
echo "${PRIVATE_KEY}"
echo "ndprivate key"

chmod 400 tcslab.pem
# we have already setup the DEPLOYER_SERVER in our gitlab settings which is a
# comma seperated values of ip addresses.
DEPLOY_SERVERS=$DEPLOY_SERVERS

# lets split this string and convert this into array
# In UNIX, we can use this commond to do this
# ${string//substring/replacement}
# our substring is "," and we replace it with nothing.
ALL_SERVERS=(${DEPLOY_SERVERS//,/ })
echo "ALL_SERVERS ${ALL_SERVERS}"

# Lets iterate over this array and ssh into each EC2 instance
# Once inside the server, run updateAndRestart.sh
for server in "${ALL_SERVERS[@]}"
do
  echo "deploying to ${server}"
  ssh -i "tcslab.pem" ubuntu@${server} 'bash' < ./deploy/updateAndRestart.sh
done