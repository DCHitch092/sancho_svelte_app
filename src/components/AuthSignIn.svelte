<script>
import { Auth } from 'aws-amplify';

let username;
let password;

async function signIn() {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}
</script>

<input bind:value='{username}' />
<input bind:value='{password}' />
  <button on:click='{() => signIn()}' >Log in</button>
