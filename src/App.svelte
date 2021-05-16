
<script>
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
import { onDestroy } from 'svelte';
import { session } from './session.js';
// import { isAuthenticated, user } from './store.js';
console.log('isAuthenticated', session.isAuthenticated);
console.log('user', session.user);

import { Router, Link, Route, useNavigate, navigate } from "svelte-navigator";
import Home from './pages/Home.svelte';
import About from './pages/About.svelte';
import LoggedIn from './pages/LoggedIn.svelte';
import PieceDisplay from'./pages/PieceDisplay.svelte';
import AuthSignUp from './pages/AuthSignUp.svelte';
import AuthSignIn from './components/AuthSignIn.svelte';

// const user = writable({});

let name = 'user';
$: loggedIn = (name === "marianne")

// let userLoggedIn = false;

function changeName(input){
	name = input;
}

function login() {
	// does nothing
}

	function onSubmit() {
		// login().then(() => {
			navigate(`/account/`, { replace: true });
		// });
	}
// const navigate = useNavigate();import { Auth } from 'aws-amplify';
//
// async function signUp() {
//     try {
//         const { user } = await Auth.signUp({
//             username,
//             password,
//             attributes: {
//                 email,          // optional
//                 phone_number,   // optional - E.164 number convention
//                 // other custom attributes
//             }
//         });
//         console.log(user);
//     } catch (error) {
//         console.log('error signing up:', error);
//     }
// }
// let user_display;
//
// const unsubscribe = user.subscribe(value => {
// 		user_display = value;
// 	});
//
// 	onDestroy(unsubscribe);

</script>
<Router primary={false}>
	<header>
		<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to='/account'>Account</Link>
		</nav>
	</header>
</Router>

<Router>
	<AuthSignIn />
	<!-- <input bind:value='{name}' />
		<button on:click='{() => onSubmit()}' >Log in</button>
		<p>Not a user? <Link to="/sign-up">Sign up</Link></p> -->

	<section>
		<Route path="/"><Home /></Route>
		<Route path="/sign-up"><AuthSignUp /></Route>
		<Route path="/about"><About /></Route>
		<Route path="/account" ><LoggedIn userID={name} /></Route>
		<Route path="/account/:userID/piece/:pieceID" let:params ><PieceDisplay /></Route>
	</section>

	{#if $session.isAuthenticated}
		{$session.isAuthenticated}	user is logged in
		{$session.user}
	{/if}

</Router>
