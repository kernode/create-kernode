#!/usr/bin/env node

import inquirer from 'inquirer'
import * as fs from 'fs'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import createDirectoryContents from './createDirectoryContents.js'
const CURR_DIR = process.cwd()
const __dirname = dirname(fileURLToPath(import.meta.url))

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
  const projectName = answers['project-name']
  const templatePath = `${__dirname}/templates`

  fs.mkdirSync(`${CURR_DIR}/${projectName}`)

  createDirectoryContents(templatePath, projectName)
})
