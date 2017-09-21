
#!/usr/bin/env bash

{ # this ensures the entire script is downloaded #

echo "Getting initial dependencies..."

system_has() {
  type "$1" > /dev/null 2>&1
}

if ! system_has git; then
  echo "git is mandatory to continue"
  echo "Check this guide to complete the installation: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
  exit 1
elif ! system_has node; then
  echo "node is mandatory to continue"
  echo "We recommend using nvm to install node. Check these guides to install nvm and node:"
  echo "- https://github.com/creationix/nvm#install-script"
  echo "- https://github.com/creationix/nvm#usage"
  exit 1
elif ! system_has yarn; then
  echo "Yarn is mandatory to continue"
  echo "Check this guide to complete the installation: https://yarnpkg.com/lang/en/docs/install/#alternatives-tab"
  exit 1
elif ! system_has ruby; then
  echo "Ruby is mandatory to continue. Fastlane needs it =)"
  echo "We recommend using rbenv to install ruby. Check these guides to install rbenv and ruby:"
  echo "- https://github.com/rbenv/rbenv#basic-github-checkout"
  echo "- https://github.com/rbenv/rbenv#installing-ruby-versions"
  exit 1
fi

npm i -g yo generator-wolmo-bootstrap-rn > /dev/null 2>&1
yo wolmo-bootstrap-rn

wait $!

} # this ensures the entire script is downloaded #
