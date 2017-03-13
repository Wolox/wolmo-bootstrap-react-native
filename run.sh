
#!/usr/bin/env bash

{ # this ensures the entire script is downloaded #

echo "Getting initial dependencies..."

system_has() {
  type "$1" > /dev/null 2>&1
}

if ! system_has git; then
  echo "git is mandatory to continue"
  echo "Check this guide to complete the installation: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
elif ! system_has node; then
  echo "Installing node"
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash > /dev/null 2>&1
  sh "$HOME/.nvm/nvm.sh" > /dev/null 2>&1
  nvm install 7 > /dev/null 2>&1
  nvm use 7 > /dev/null 2>&1
elif ! system_has yarn; then
  echo "Installing yarn"
  curl -o- -L https://yarnpkg.com/install.sh | bash > /dev/null 2>&1
  export PATH="$HOME/.yarn/bin:$PATH"
fi

yarn global add yeoman generator-wolmo-bootstrap-rn > /dev/null 2>&1
yo wolmo-bootstrap-rn

wait $!

} # this ensures the entire script is downloaded #
