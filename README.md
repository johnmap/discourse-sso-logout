# discourse-sso-logout
Discourse's missing logout url

A no-good dirty, filthy hack that logs the user out if the hash #logout is detected in url on page load. Good for syncing logouts between Discourse and your application when you're using SSO.

It just deletes the relevant cookies, so it won't exhibit Discourse's super-hilarious and user-friendly behaviour of invalidating ALL their sessions, regardless of your `log out strict` setting, and it won't cause a redirect loop between your app's logout link.

# installation
Copy below code including script tags to `</head>` part of theme settings. Adjust redirect URL to your app's homepage, or wherever you wanna go after logging out.


<pre>
<script>
        if(window.location.hash=='#logout'){
                document.cookie = '_forum_session=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.cookie = '_t=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                document.location = 'https://www.mandawin.com/';
        }
</script>
</pre>

### optional
Set Discourse's `logout redirect` setting to your app's logout URL, to sync logouts the other way.

### Yes, you heard correctly
If you logout from Discourse on that Library computer, you're automatically logging out on your mobile, tablet, notebook, Nintendo 3DS and Sony PSP. Let that sink in for a second. 🤯

Whatever, it's nearly midnight and I'm out.
