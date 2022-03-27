function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description)
    switch (question.type) {
      case 'boolean': {
        console.log('1. True')
        console.log('2. False')
        break
      }
      case 'multipleChoice': {
        question.options.forEach((option, index) =>{
          console.log(`${ index + 1 }. ${option}`)
        })
        break
      }
      case 'text': {
        console.log('Answer: __________')
      }
      // add new inside
      case 'range': {
        console.log('Minimum: __________')
        console.log('Maximum: __________')
      }
    }
    console.log('')
  })
}

const questions = [
  {
    type: 'boolean',
    description: 'This code is awesome'
  },
  {
    type: 'multipleChoice',
    description: 'What is your favorite language',
    options: ['HTML', 'CSS', 'JavaScript']
  },
  {
    type: 'text',
    description: 'Describe your favorite JS feature'
  },
  // add new outside and need to add new inside
  // could be better
  {
    type: 'range',
    description: 'What is your speed limit in your city?'
  }
]

printQuiz(questions)
