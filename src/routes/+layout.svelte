<script>
	//---------------------------------------------------------------------------------------------------//
	import '../app.css';

	import { HelpBoldIcon, NotificationBoldIcon } from '$lib/assets/icons';

	import Sidebar from './parts/Sidebar.svelte';
	//---------------------------------------------------------------------------------------------------//
</script>

<svelte:head>
	<title>Mail | Keffi Dashboard</title>
</svelte:head>

<!-- Topbar -->
<header
	style="box-shadow: 0px 1px 0px 0px #ECECEC;"
	class="h-16 px-8 z-50 flex items-center justify-between w-[calc(100vw_-_80px)] bg-white fixed top-0 left-0 ml-20"
>
	<h1 class="text-2xl font-semibold text-[#041925]">Mail</h1>

	<section class="flex items-center">
		<button class="relative mr-4">
			<div
				class="w-2.5 h-2.5 bg-orange-600 rounded-full border-2 absolute top-0 right-0 border-white"
			/>
			<NotificationBoldIcon class="w-6 h-6 text-[#4A5155]" />
		</button>

		<button class="relative mr-6">
			<HelpBoldIcon class="w-6 h-6 text-[#4A5155]" />
		</button>

		<button class="flex items-start gap-4 flex-row">
			<img
				alt="Avatar 1"
				src="/avatar-1.png"
				class="w-10 h-10 rounded-full border border-[#DFDFDF]"
				style="box-shadow: 0px 8px 10px -2px rgba(181, 181, 181, 0.55);"
			/>

			<div class="space-y-1 text-left">
				<h5 class="text-base font-semibold">Arsanda Maulana</h5>
				<h5 class="text-xs text-[#909090]">Available</h5>
			</div>
		</button>
	</section>
</header>

<Sidebar />

<!-- Main -->
<main class="relative h-[calc(100vh_-_64px)] flex mt-16 ml-20">
	<slot />
</main>
