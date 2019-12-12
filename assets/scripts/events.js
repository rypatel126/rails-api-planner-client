const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // console.log('sign up works')
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // console.log('sign in works')
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onQuickSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  console.log('quick sign in works')
  api.quickSignIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // console.log('change password works')
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  // doesn't need formData because there is no data to submit
  // console.log('sign out works')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onCreateTask = event => {
  event.preventDefault()
  console.log('create task button works')
  const form = event.target
  console.log('in events.js form is', form)
  const formData = getFormFields(form)
  console.log('in events.js formData is', formData)
  api.createTask(formData)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onShowTasks = event => {
  event.preventDefault()
  console.log('show tasks button works')
  api.showTasks()
    .then(ui.onShowTasksSuccess)
    .catch(ui.onShowTasksFailure)
}

const addAuthHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#create-task').on('submit', onCreateTask)
  $('#quick-sign-in').on('click', onQuickSignIn)
  $('#show-tasks').on('click', onShowTasks)
}

module.exports = {
  addAuthHandlers
}
