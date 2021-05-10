<script>
import { Auth } from 'aws-amplify';

let username;
let password;
let attributes = { first_name: '', surname: '', email: ''};

async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                // phone_number,   // optional - E.164 number convention
                // other custom attributes
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

</script>

<input bind:value='{username}' />
<input bind:value='{password}' />
<input bind:value='{attributes.email}' />
<input bind:value='{attributes.first_name}' />
<input bind:value='{attributes.surname}' />

  <button on:click='{() => signUp()}' >Sign Up</button>
