<script lang="ts">
  import { onMount } from "svelte";

  let startDate: Date;
  let endDate: Date;
  let days: number = 0;
  let years: number = 0;
  let months: number = 0;

  function calculateTime() {
    if (startDate && endDate) {
      const diffTime = Math.abs(
        new Date(endDate).getTime() - new Date(startDate).getTime()
      );
      days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      years = Math.floor(days / 365);
      months = Math.floor(days / 30);
    }
  }

  onMount(() => {
    calculateTime();
  });
</script>

<main class="mt-20 h-[90vh]">
  <h1 class="font-black mb-1 text-3xl">Time between Two Dates</h1>
  <small class="mb-10 block">Calculate the time between two dates</small>

  <section class="grid gap-1 w-full h-[60%]">
    <section
      class="bg-zinc-100 dark:bg-zinc-900 p-10 col-span-1 rounded-tl-xl sm:rounded-t-xl flex flex-col justify-center"
    >
      <h2 class="font-black mb-3 text-xl">Start Date</h2>
      <input
        type="date"
        class="border border-gray-300 dark:border-gray-700 p-2 rounded w-full bg-zinc-200 dark:bg-zinc-900"
        bind:value={startDate}
        on:change={calculateTime}
      />
    </section>

    <section
      class="bg-zinc-100 dark:bg-zinc-900 p-10 col-span-1 rounded-tr-xl sm:rounded-none flex flex-col justify-center"
    >
      <h2 class="font-black mb-3 text-xl">End Date</h2>
      <input
        type="date"
        class="border border-gray-300 dark:border-gray-700 p-2 rounded w-full bg-zinc-200 dark:bg-zinc-900"
        bind:value={endDate}
        on:change={calculateTime}
      />
    </section>

    <section
      class="bg-zinc-100 dark:bg-zinc-900 p-10 col-span-2 sm:col-span-1 rounded-b-xl sm:rounded-b-xl flex flex-col justify-center"
    >
      <h2 class="font-bold text-sm">Result</h2>
      {#if !startDate || !endDate || years < 0 || months < 0 || (days < 0 && days % 30 !== 0)}
        <p class="text-4xl font-black">Empty</p>
      {/if}
      {#if years > 0 || months > 0 || (days > 0 && days % 30 !== 0)}
        <p class="text-4xl font-black">
          {days}
          {days === 1 ? " day" : " days"}
        </p>
      {/if}
      {#if years > 0 || months > 0 || (days > 0 && days % 30 !== 0)}
        <small class="block">or</small>
      {/if}
      <small class="block">
        {#if years > 0}
          {years}
          {years === 1 ? " year" : " years"},
        {/if}
        {#if months > 0}
          {months}
          {months === 1 ? " month" : " months"}, and
        {/if}
        {#if days > 0 && days % 30 !== 0}
          {days % 30}
          {days % 30 === 1 ? " day" : " days"}
        {/if}
      </small>
    </section>
  </section>

  <footer class="mt-10 block">
    <a
      href="https://github.com/GabEdits/gangi"
      target="_blank"
      class="underline text-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-200 hover:text-zinc-950 transition-colors font-extrabold duration-500"
      >Source Code</a
    >

    <p>
      Made with ❤️ by <a
        class="font-black underline text-black dark:text-white transition-colors"
        href="https://gxbs.dev/">Gabs</a
      >
    </p>
    <p>
      <small class="font-mono">v0.2.0</small>
    </p>
  </footer>
</main>
