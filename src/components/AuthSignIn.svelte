<script>
import { Auth } from 'aws-amplify';
// import { isAuthenticated, user } from '../store.js';
  import { session } from '../session.js';

  session.log = true;
  $: console.log('reactive log', $session);

  // session.reset();

let username;
let password;

async function signIn() {
    let user_data;
    try {
        user_data = await Auth.signIn(username, password);
        session.set('user', await user_data);
        session.set('isAuthenticated', true);
    } catch (error) {
        console.log('error signing in', error);
    }
}

</script>

<input bind:value='{username}' />
<input type="password" bind:value='{password}' />
  <button on:click='{() => signIn()}' >Log in</button>
