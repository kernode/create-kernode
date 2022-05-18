#!/usr/bin/env node

const inquirer = require('inquirer')
const fs = require('fs')
const createDirectoryContents = require('./createDirectoryContents.js')
const CURR_DIR = process.cwd()
const basePath = process.cwd()
const QUESTIONS = [
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true
      else
        return 'Project name may only include letters, numbers, underscores and hashes.'
    },
  },
]

inquirer.prompt(QUESTIONS).then((answers) => {
  const projectChoice = answers['project-choice']
  const projectName = answers['project-name']
  const templatePath = `${basePath}/templates/${projectChoice}`

  fs.mkdirSync(`${CURR_DIR}/${projectName}`)

  createDirectoryContents(templatePath, projectName)
})
