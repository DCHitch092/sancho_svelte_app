<script>
import {useParams} from 'svelte-navigator';

const params = useParams();

$: console.log('params -- piece-id', $params.pieceID); // -> { id: "123", splat: "pauls-profile" }


async function loadPiece() {
  const res = await fetch(`https://5ympjlkym9.execute-api.eu-west-2.amazonaws.com/account/${$params.userID}/piece/${$params.pieceID}`)
    .then(response => response.json())
    .catch(err => console.log(err))

  return res.data.Items[0];
}

const piecePromise = loadPiece();


</script>

{#await piecePromise then piece}
  <h2>{piece.title}</h2>
  <p id="piece-content">{piece.content}</p>
  {#if piece.status.length !== 0}
    <h3>History</h3>
    {#each piece.status as status}
      <p>{status.type}:<em><a href={status.url}>{status.where}</a><br /> {status.date}</em></p>
    {/each}
  {/if}
{/await}
<a href="/account">back to account</a>

<style>
  #piece-content {
    white-space: break-spaces;
  }
</style>
