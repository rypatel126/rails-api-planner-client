const config = require('./config')
const store = require('./store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  console.log('formData is ', formData)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const quickSignIn = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    // headers: {
    //   Authorization: `Token token=${store.user.token}`
    // },
    data: {
      'credentials': {
        'email': 'clienttest3@test',
        'password': 'test'
      }
    }
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createTask = formData => {
  console.log('in api.js formData is ', formData)
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const showTasks = () => {
  return $.ajax({
    url: config.apiUrl + '/tasks',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteTask = function (taskId) {
  return $.ajax({
    url: config.apiUrl + '/tasks/' + taskId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createTask,
  quickSignIn,
  showTasks,
  deleteTask
}
