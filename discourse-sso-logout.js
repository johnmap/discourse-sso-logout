if(window.location.hash=='#logout'){
  document.cookie = '_forum_session=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = '_t=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.location = '[your url here]';
}
