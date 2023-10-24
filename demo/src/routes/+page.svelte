<script lang="ts">
  import '../app.postcss'
</script>

<header class="flex items-center justify-between mx-4">
  <h1 class="text-4xl font-bold my-4">tailwind-reactions</h1>
  <a class="hover:underline" href="https://github.com/jill64/tailwind-reactions">GitHub</a>
</header>
<button class="push-effect bg-blue-500 text-white px-4 py-2 mx-4 rounded-full">
  push-effect
</button>
<button class="pop-effect bg-blue-500 text-white px-4 py-2 rounded-full">
  pop-effect
</button>
<div class="m-4">
  <div class="inline-grid grid-cols-2 items-center gap-4">
    <input
      placeholder="focus-under"
      class="focus-under bg-inherit text-inherit border-zinc-400 focus:border-blue-600"
    />
    <input
      placeholder="focus-under-bold"
      class="focus-under-bold bg-inherit text-inherit border-zinc-400 focus:border-blue-600"
    />
    <input
      placeholder="focus-under-2"
      class=" focus-under-2 bg-inherit text-inherit border-zinc-400 focus:border-blue-600"
    />
    <input
      placeholder="focus-under-bold-2"
      class="focus-under-bold-2 bg-inherit text-inherit border-zinc-400 focus:border-blue-600"
    />
    <input
      placeholder="focus-under-3"
      class=" focus-under-3 bg-inherit text-inherit border-zinc-400 focus:border-blue-600"
    />
    <input
      placeholder="focus-under-bold-3"
      class="focus-under-bold-3 bg-inherit text-inherit border-zinc-400 focus:border-blue-600"
    />
  </div>
</div>
