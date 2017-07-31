const runCommand = require('./runCommand');

module.exports = function gitInitialization() {
  // git init
  return runCommand({
    command: ['git', ['init'], { cwd: `${process.cwd()}/${this.projectName}` }],
    loadingMessage: 'Doing some git stuff...',
    context: this.options
  })
    .then(({ spinner }) =>
      // git add .
      runCommand({
        command: ['git', ['add', '.'], { cwd: `${process.cwd()}/${this.projectName}` }],
        context: this.options
      })
        .then(() =>
          // git commit -m 'Kickoff!'
          runCommand({
            command: ['git', ['commit', '-m', '"Kickoff!"'], { cwd: `${process.cwd()}/${this.projectName}` }],
            context: this.options
          }).then(() => {
            // check if the user wants to initialiaze the remote repository too
            spinner.stop();
            return this.prompt([
              {
                type: 'confirm',
                name: 'pushToRepo',
                message: 'Do you want to initialize your git remote repository? (i.e. github, bitbucket, etc)'
              }
            ]).then(({ pushToRepo }) => {
              if (!pushToRepo) {
                spinner.succeed('git ready');
              } else {
                // ask for the repository url
                return this.prompt([
                  {
                    type: 'input',
                    name: 'repoUrl',
                    message: "What's your repository url? (ssh or https)",
                    validate: val => (val ? true : 'Repository url is required to initialize it')
                  }
                ]).then(({ repoUrl }) => {
                  this.repoUrl = repoUrl;
                  spinner.start();
                  // git remote add origin <url>
                  return runCommand({
                    command: [
                      'git',
                      ['remote', 'add', 'origin', repoUrl],
                      { cwd: `${process.cwd()}/${this.projectName}` }
                    ],
                    context: this.options
                  }).then(() =>
                    // git push origin master
                    runCommand({
                      command: [
                        'git',
                        ['push', 'origin', 'master'],
                        { cwd: `${process.cwd()}/${this.projectName}` }
                      ],
                      context: this.options
                    }).then(() => {
                      spinner.succeed('git ready');
                    })
                  );
                });
              }
            });
          })
        )
        .catch(() => {
          spinner.fail('Some git command failed. Turn verbose mode on for detailed logging');
        })
    )
    .catch(spinner => {
      spinner.fail('Some git command failed. Turn verbose mode on for detailed logging');
    });
};
