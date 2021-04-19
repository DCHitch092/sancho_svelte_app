<style lang="postcss">
  label {
    @apply block mb-2 text-sm font-bold text-gray-700;
  }
  .input-field {
    @apply border w-full py-2 px-3 text-gray-700 mb-3;
  }
  .input-field:focus {
    @apply shadow-outline outline-none;
  }
  button {
    @apply w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-sm;
  }
  button:hover {
    @apply bg-blue-700;
  }
  button:focus {
    @apply outline-none shadow-outline;
  }
  .wrapper {
    @apply flex flex-grow h-screen justify-center items-center bg-blue-100;
  }
</style>

<div class="wrapper">
  <div class="w-full max-w-xs">
    <form class="px-8 pt-6 pb-8 bg-white shadow-md">
      <div class="mb-4">
        <label for="email">Email</label>
        <input
          class="input-field"
          id="email"
          type="text"
          placeholder="name@acme.com"
        />
      </div>
      <div class="mb-6">
        <label for="password">Password</label>
        <input
          class="input-field"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <div class="">
        <button type="submit">Sign In</button>
      </div>
      <div class="mt-3">
        <button type="button">Sign In with Google</button>
      </div>
    </form>
  </div>
</div>
