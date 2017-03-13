
#!/usr/bin/env bash

{ # this ensures the entire script is downloaded #

system_has() {
  type "$1" > /dev/null 2>&1
}

if ! system_has git; then
  echo "\033[1m\033[31mgit is mandatory to continue \033[0m"
  echo "\033[1m\033[31mCheck this guide to complete the installation: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git \033[0m"
elif ! system_has node; then
  echo "\033[1m\033[31mInstalling node \033[0m"
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
  sh "$HOME/.nvm/nvm.sh"
  nvm install 7
  nvm use 7
elif ! system_has yarn; then
  curl -o- -L https://yarnpkg.com/install.sh | bash
  export PATH="$HOME/.yarn/bin:$PATH"
fi

yarn global add yeoman wolmo-bootstrap-rn
yo wolmo-bootstrap-rn

} # this ensures the entire script is downloaded #
