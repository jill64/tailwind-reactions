<script lang="ts">
  import { FlipButton, ThemeManager } from '@jill64/svelte-dark-theme'
  import '../app.postcss'
  import GitHubLogo from './GitHubLogo.svelte'
</script>

<ThemeManager />

<header class="flex items-center justify-between py-2 px-4">
  <div class="mr-auto">
    <h1 class="text-4xl font-bold my-4">@jill64/tailwind-reactions</h1>
    <p class="text-lg">🌀 UI effect set for Tailwind CSS</p>
  </div>
  <FlipButton />
  <a href="https://github.com/jill64/tailwind-reactions">
    <GitHubLogo />
  </a>
</header>

<main class="p-4">
  <button class="push-effect"> push-effect </button>
  <button class="pop-effect"> pop-effect </button>
  <div class="m-4">
    <div class="inline-grid grid-cols-2 items-center gap-4">
      <input placeholder="focus-under" class="focus-under" />
      <input placeholder="focus-under-bold" class="focus-under-bold" />
      <input placeholder="focus-under-2" class="focus-under-2" />
      <input placeholder="focus-under-bold-2" class="focus-under-bold-2" />
      <input placeholder="focus-under-3" class="focus-under-3" />
      <input placeholder="focus-under-bold-3" class="focus-under-bold-3" />
    </div>
  </div>
</main>
