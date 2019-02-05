const camelcase = require('camelcase')

module.exports = {
  templateOptions: {
    context: {
      camelcase
    }
  },
  prompts: {
    name: {
      message: 'What is the name of the new project',
      default: ':folderName:'
    },
    description: {
      message: 'How would you describe the new project',
      default: `TODO: Add description`
    },
  },
  move: {
    gitignore: '.gitignore',
    github: '.github'
  }
}
