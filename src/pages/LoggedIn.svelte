<script>
import { onMount } from 'svelte';
import { stringify } from 'qs';
import { useParams, Router,link, Link } from "svelte-navigator";
// import Table from '../components/Table.svelte';

// const params = useParams();
//
// $: console.log('params -- user-id', $params.user_id); // -> { id: "123", splat: "pauls-profile" }

  let userID;

  async function loadUser() {
    const res = await fetch(`https://5ympjlkym9.execute-api.eu-west-2.amazonaws.com/account/${userID}`)
      .then(response => response.json())
      .catch(err => console.log(err))

    return res.data.Items[0];
  }

  async function loadPieces() {
    const res = await fetch(`https://5ympjlkym9.execute-api.eu-west-2.amazonaws.com/account/${userID}/pieces`)
      .then(response => response.json())
      .catch(err => console.log(err))

    return res.data; }

    let userPromise = loadUser();
    let piecesPromise = loadPieces();

  </script>

<h1>Welcome</h1>


{#await userPromise then user}
  <p>{user.first_name} you are logged in</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

{#await piecesPromise}
	<p>...waiting</p>
{:then pieces}
  <!-- <p>{user.first_name} you are logged in</p> -->
  <!-- <Table items={pieces}/> -->
  <table>
  <thead> <tr><th>Title</th><th></th></tr></thead>
  <tbody>
  {#each pieces as piece}
    <tr><td>{piece.title}</td>
    <td>{piece.piece_id}</td><td>
  <a href='/piece/{piece.piece_id}' use:link >edit</a></td></tr>
  {/each}
  </tbody>
  </table>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
