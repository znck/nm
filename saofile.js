module.exports = {
  npmClient: 'pnpm',
  prompts() {
    return [
      {
        name: 'namespaced',
        message: 'Is the package namespaced?',
        default: true
      },
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'description',
        message: 'How would you describe the new project',
        default: `TODO: Add description`
      },
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        github: '.github',
      }
    }
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}