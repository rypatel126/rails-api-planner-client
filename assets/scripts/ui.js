
const store = require('./store.js')
// const events = require('./events.js')

const onSuccess = message => {
  $('#results')
    .removeClass('failure')
    .addClass('success')
    .text(message)
    .css('background-color', 'green')
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#results').text(message)
    .removeClass('success')
    .addClass('failure')
    .text(message)
    .css('background-color', 'red')
  $('form').trigger('reset')
}

const onSignUpSuccess = () => {
  onSuccess($('.status').text('You have successfully signed up!  Now, sign in!'))
}

const onSignUpFailure = () => {
  onFailure($('.status').text('Sign up failed!'))
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  // console.log(store)
  onSuccess($('.status').text('You have successfully signed in!'))
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure($('.status').text('Sign in failed!'))
}

const onChangePasswordSuccess = () => {
  onSuccess($('.status').text('You have successfully changed your password!'))
}

const onChangePasswordFailure = () => {
  onFailure($('.status').text('Change password failed!'))
}

const onSignOutSuccess = () => {
  onSuccess($('.status').text('You have successfully signed out!'))
  store.user = {} // now store.js object will revert back to being empty
  $('.before-auth').show()
  $('.after-auth').hide()
}

const onSignOutFailure = () => {
  onFailure($('.status').text('Sign out failed!'))
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
