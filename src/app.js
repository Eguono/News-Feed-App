

$(document).ready(() => {
  $('.button-collapse').sideNav();
  $('.collapsible').collapsible();

  $('select').material_select();
  $('.slider').slider();
});

function onSuccess(googleUser) {
  // console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  // console.log(googleUser);
  // console.log(googleUser.getBasicProfile());
  const profile = googleUser.getBasicProfile();
  localStorage.setItem('User', JSON.stringify({
    iD: profile.getId(),
    name: profile.getName(),
    imageURL: profile.getImageUrl(),
    email: profile.getEmail(),
  }));
}
function onFailure(error) {
  // console.log(error);
}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure,
  });
}
