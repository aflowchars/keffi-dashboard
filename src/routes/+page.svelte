<script>
	//-----------------------------------------------------------------------------------------------//
	import { fade, slide } from 'svelte/transition';
	import { expoIn, quadIn, sineIn } from 'svelte/easing';
	//-----------------------------------------------------------------------------------------------//
	import { WhatsappBrand } from '$lib/assets/brands';
	import {
		AltTextBoldIcon,
		AttachBoldIcon,
		BoldingTextBoldIcon,
		CaretDownIcon,
		DotsHorizontalBoldIcon,
		DownloadIcon,
		FormDocIcon,
		ItalicTextBoldIcon,
		ListTextBoldIcon,
		ProfileBoldIcon,
		ReplayIcon,
		SearchIcon,
		ShareIcon,
		SmileTextBoldIcon,
		Ticket2Icon
	} from '$lib/assets/icons';
	//-----------------------------------------------------------------------------------------------//
	let show_chat = true;
	//-----------------------------------------------------------------------------------------------//
	let initial_message = ``;
	//-----------------------------------------------------------------------------------------------//
	let show_recent_ticket = true;
	//-----------------------------------------------------------------------------------------------//
</script>

<!-- Left Bar -->
<section
	class="left-section overflow-hidden h-full max-w-sm w-full basis-4/12 xl:basis-4/12 border-r"
>
	<!-- Header -->
	<nav class="w-full pt-6 px-4">
		<!-- Search -->
		<div class="w-full relative">
			<SearchIcon
				class="w-6 absolute top-1/2 -translate-y-1/2 left-4 z-10 h-6 text-stone-900 stroke-1.5"
			/>

			<input
				type="text"
				class="py-3 px-4 bg-[#F5F5F5] rounded-lg border border-transparent focus:border-sky-500 ring-4 ring-transparent focus:ring-sky-100 pl-12 w-full outline-0"
				placeholder="Search mail..."
			/>
		</div>
	</nav>

	<!-- Tablist -->
	<section
		style="box-shadow: 0px 1px 0px 0px #ECECEC;"
		class="w-full px-4 mt-4 border-b flex flex-row items-start gap-8"
	>
		<button class="w-fit flex flex-col gap-2.5 items-center">
			<span class="text-sm font-medium text-sky-500"> General </span>
			<span class="w-full bg-sky-500 h-1 rounded-t-sm" />
		</button>

		<button class="w-fit flex flex-col gap-2.5 items-center">
			<span class="text-sm font-medium text-[#7C7C7C]"> In Progress </span>
			<span class="w-full bg-transparent h-1 rounded-t-sm" />
		</button>

		<button class="w-fit flex flex-col gap-2.5 items-center">
			<span class="text-sm font-medium text-[#7C7C7C]"> Complete </span>
			<span class="w-full bg-transparent h-1 rounded-t-sm" />
		</button>
	</section>

	<!-- Chatlist -->
	<section class="mt-1 w-full h-[calc(100%_-_128px)] overflow-y-auto">
		{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as chat}
			<button class="relative w-full border-b border-stone-100 last:border-b-0">
				<figure
					class="flex w-full items-start flex-row gap-3 py-3.5 px-4 transition-colors duration-300 ease-in relative hover:bg-[#F3F5F9]"
				>
					<img class="w-11 h-11 rounded-full" src="/avatar-2.png" alt="Avatar 2" />

					<div class="w-full flex flex-col items-start">
						<!-- Info -->
						<div class="w-full flex mb-1 items-center justify-between">
							<span class="flex items-center gap-2">
								<h5 class="text-base font-semibold -tracking-[0.5px] text-[#4F4F4F]">
									Anthony William
								</h5>

								{#if chat === 1 || chat === 3}
									<span class="text-xs text-white bg-[#F59033] rounded-[4px] py-0.5 px-1.5">
										New
									</span>
								{/if}
							</span>

							<p class="text-xs text-[#B6B6B6]">5mnt</p>
						</div>

						<!-- Message -->
						<div class="mb-3.5 w-full">
							<p class="text-sm text-left w-10/12 truncate text-[#777777]">
								When did the super sale happen?
							</p>
						</div>

						<!-- Tag -->
						<div class="flex flex-row items-center gap-1 w-full">
							<button
								class="py-1 px-2 pr-3 rounded-full flex items-center gap-1 border border-[#E0E0E0]"
							>
								<span class="w-2.5 h-2.5 rounded-full bg-sky-500" />
								<span class="text-xs font-medium text-[#4F4F4F]"> Medium </span>
							</button>

							<button
								class="py-1 px-2 pr-3 rounded-full flex items-center gap-1 border border-[#E0E0E0]"
							>
								<ReplayIcon class="w-5 h-5 text-[#FE8401]" />
								<span class="text-xs font-medium text-[#4F4F4F]"> Progress </span>
							</button>

							<button
								class="py-1 px-2 pr-3 rounded-full flex items-center gap-1 border border-[#E0E0E0]"
							>
								<FormDocIcon class="w-5 h-5 text-[#49C496]" />
								<span class="text-xs font-medium text-[#4F4F4F]"> Open </span>
							</button>
						</div>
					</div>
				</figure>
			</button>
		{/each}

		<div class="w-full relative border-t py-4">
			<p class="text-xs text-center text-stone-400">No More Chat</p>
		</div>
	</section>
</section>

<section class="center-section h-full flex-1 flex flex-col items-start">
	<!-- Navbar -->
	<nav
		style="box-shadow: 0px 1px 0px 0px #ECECEC;"
		class="bg-white w-full h-16 flex items-center justify-between py-4 px-6 border-b border-[#EBEBEB]"
	>
		<h5 class="text-base text-[#4F4F4F] font-semibold">John Matter</h5>

		<section class="flex flex-row items-center gap-4">
			<div class="flex flex-row items-center gap-2">
				<button class="flex flex-row items-center border py-1.5 px-4 rounded-lg">
					<ReplayIcon class="w-6 h-6 text-[#88949E] mr-1" />

					<span class="text-sm font-medium text-[#4F4F4F] mr-2">Progress</span>
					<CaretDownIcon class="w-6 h-6 text-[#4F4F4F]" />
				</button>

				<button class="flex flex-row items-center border py-1.5 px-4 rounded-lg">
					<div class="w-3 h-3 rounded-full bg-[#F59033] mr-2" />
					<span class="text-sm font-medium text-[#4F4F4F] mr-1.5">High</span>
					<CaretDownIcon class="w-6 h-6 text-[#4F4F4F]" />
				</button>

				<button class="flex flex-row items-center border py-1.5 px-4 rounded-lg">
					<ProfileBoldIcon class="w-5 h-5 text-[#88949E] mr-1" />

					<span class="text-sm font-medium text-[#4F4F4F] mr-2">Progress</span>
					<CaretDownIcon class="w-6 h-6 text-[#4F4F4F]" />
				</button>
			</div>
			<button>
				<DotsHorizontalBoldIcon class="w-6 h-6 text-[#88949E]" />
			</button>
		</section>
	</nav>

	<section
		class="h-[calc(100%_-_208px)] w-full bg-[#FBFBFB] overflow-y-auto px-6 flex flex-col items-start"
	>
		<!-- Date -->
		<div class="{show_chat ? 'w-full' : 'w-11/12'} flex items-center relative my-8">
			<div class="w-full h-px bg-[#ECECEC]" />

			<button
				class="absolute bg-[#ECECEC] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[#4F4F4F] rounded-[4px] text-[10px] font-medium py-1 px-2"
			>
				Today
			</button>
		</div>

		<!-- Message -->
		<section class="w-full flex flex-col items-start gap-5">
			{#each [1, 2, 3, 4, 5] as chat}
				<div
					class="{show_chat ? 'w-full' : 'w-11/12'} flex flex-row items-start gap-3.5 border-b pb-5"
				>
					<button
						class="flex-shrink-0"
						on:click={() => {
							show_chat = !show_chat;
						}}
					>
						<img
							class="w-11 h-11 border border-[#DFDFDF] rounded-full stroke-[#DFDFDF]"
							src="/avatar-1.png"
							alt="Avatar 1"
						/>
					</button>

					<div>
						<div class="flex flex-row items-center">
							<button
								on:click={() => (show_chat = !show_chat)}
								class="mr-2 text-sm hover:underline text-[#4F4F4F] font-bold"
							>
								Arsanda Maulana
							</button>

							<WhatsappBrand class="w-5 h-5 flex-shrink-0 mr-1" />

							<p class="text-[#B6B6B6] text-xs">12:49 pm</p>
						</div>

						<div class="w-full mb-4">
							<p class="text-[#6F6F6F] text-sm text-left {show_chat ? 'w-full' : 'w-11/12'}">
								Hello
								<br />
								I want to tell you, I just bought a macbook at your online shop. I ask, can you tell
								me when it will arrive at my house? I hope this item will not take too long to process.
								<br />
								<br />

								I was wondering earlier with the shop assistant, it's just that it can't be answered
								with certainty whether this item will come quickly or it will take a long time to
								come.
							</p>
						</div>

						<div
							class="p-4 flex flex-row items-center gap-4 w-fit bg-white rounded-[10px] border border-[#E0E0E0]"
						>
							<img
								class="w-16 h-16 flex-shrink-0 rounded-[10px]"
								src="/attach-1.png"
								alt="Attach 1"
							/>

							<div class="space-y-2 text-left mr-6">
								<h5 class="text-sm text-[#4F4F4F] font-medium">Macbook-OuxSTrAgft7.jpg</h5>
								<p class="text-xs text-[#909090]">16 MB | 1 Photo</p>
							</div>

							<div class="flex items-center gap-2">
								<button
									class="p-2 rounded-[10px] border border-[#E0E0E0] hover:bg-stone-100 transition-colors duration-300 ease-in"
								>
									<DownloadIcon class="w-6 h-6 stroke-1.5 text-[#88949E]" />
								</button>

								<button
									class="p-2 rounded-[10px] border border-[#E0E0E0] hover:bg-stone-100 transition-colors duration-300 ease-in"
								>
									<ShareIcon class="w-6 h-6 stroke-1.5 text-[#88949E]" />
								</button>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</section>
	</section>

	<section style="box-shadow: 0px -1px 0px 0px #ECECEC;" class="h-36 w-full bg-white px-6 py-4">
		<div
			class="p-4 h-full w-full flex flex-col items-start justify-between border border-[#E0E0E0] rounded-lg"
		>
			<textarea
				class="text-[#333333] w-full outline-0 bg-transparent resize-none text-sm"
				placeholder="Type your reply here..."
				bind:value={initial_message}
			/>

			<section class="flex items-center w-full justify-between">
				<div class="flex flex-row items-center gap-2">
					<button>
						<AttachBoldIcon class="w-6 h-6 text-[#BDBDBD]" />
					</button>

					<button>
						<BoldingTextBoldIcon class="w-6 h-6 text-[#BDBDBD]" />
					</button>

					<button>
						<ItalicTextBoldIcon class="w-6 h-6 text-[#BDBDBD]" />
					</button>

					<button>
						<ListTextBoldIcon class="w-6 h-6 text-[#BDBDBD]" />
					</button>
				</div>

				<div class="flex flex-row items-center gap-2">
					<button>
						<SmileTextBoldIcon class="w-6 h-6 text-[#BDBDBD]" />
					</button>

					<button>
						<AltTextBoldIcon class="w-6 h-6 text-[#BDBDBD]" />
					</button>
				</div>
			</section>
		</div>
	</section>
</section>

{#if show_chat}
	<section class="h-full basis-3/12 max-w-sm border-l">
		<header class="p-6 relative border-b border-[#ECECEC]">
			<!-- Profile -->
			<nav class="flex mb-8 flex-row items-center justify-between">
				<h3 class="text-base font-semibold text-[#4F4F4F]">Contact Detail</h3>

				<button>
					<DotsHorizontalBoldIcon class="w-7 h-7 text-[#7c7c7c]" />
				</button>
			</nav>

			<div class="flex flex-col items-center">
				<div class="w-24 h-24 relative mb-4">
					<img class="w-24 h-24 rounded-full" src="/avatar-3.png" alt="Avatar 3" />
					<div
						class="bg-[#27AE60] w-6 absolute bottom-0 right-0 h-6 rounded-full border-4 border-white"
					/>
				</div>

				<h5 class="text-lg font-semibold mb-1 text-[#4F4F4F]">John Matter</h5>
				<p class="text-[#4F4F4F] text-base">(025) 896 783 372</p>
			</div>
		</header>

		<section class="py-4 px-6 border-b border-[#ECECEC] last:border-0">
			<nav class="flex mb-4 items-center justify-between">
				<h5 class="text-sm font-semibold text-[#4F4F4F]">Media, Link, Doc</h5>

				<button>
					<CaretDownIcon class="w-7 h-7 -rotate-90 text-[#7c7c7c]" />
				</button>
			</nav>

			<div class="grid grid-cols-3 items-center gap-2">
				{#each [1, 2, 3] as img}
					<div class="group w-full h-full overflow-hidden rounded-[10px] relative">
						{#if img === 3}
							<button
								class="opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100 flex items-center justify-center text-white text-base font-medium w-full h-full bg-black/40 absolute inset-0 z-10"
							>
								23+
							</button>
						{/if}
						<img class="w-full h-full object-cover" src="/media-{img}.png" alt="media-{img}" />
					</div>
				{/each}
			</div>
		</section>

		<section class="py-4 px-6 border-b border-[#ECECEC] last:border-0">
			<button
				on:click={() => (show_recent_ticket = !show_recent_ticket)}
				class="w-full transition-all duration-500 ease-in {show_recent_ticket &&
					'mb-4'} flex items-center justify-between"
			>
				<h5 class="text-sm font-semibold text-[#4F4F4F]">Recent Ticket</h5>

				<div>
					<CaretDownIcon class="w-7 h-7 text-[#7c7c7c]" />
				</div>
			</button>

			{#if show_recent_ticket}
				<div class="flex flex-col gap-3" transition:fade={{ duration: 500 }}>
					<figure class="w-full flex flex-row items-start gap-3">
						<Ticket2Icon class="w-6 h-6 flex-shrink-0 text-stone-600 stroke-1.5" />

						<div class="space-y-1 text-sm text-left font-medium">
							<h5>Shipment Daily</h5>
							<p class="flex items-center gap-4">
								<span class="text-stone-400">Status</span>
								<span class="relative text-orange-500">Waiting</span>
							</p>
						</div>
					</figure>
					<figure class="w-full flex flex-row items-start gap-3">
						<Ticket2Icon class="w-6 h-6 flex-shrink-0 text-stone-600 stroke-1.5" />

						<div class="space-y-1 text-sm text-left font-medium">
							<h5>What payment methods to you</h5>
							<p class="flex items-center gap-4">
								<span class="text-stone-400">Status</span>
								<span class="relative text-sky-500">Open</span>
							</p>
						</div>
					</figure>
					<figure class="w-full flex flex-row items-start gap-3">
						<Ticket2Icon class="w-6 h-6 flex-shrink-0 text-stone-600 stroke-1.5" />

						<div class="space-y-1 text-sm text-left font-medium">
							<h5>Adding a few more message</h5>
							<p class="flex items-center gap-4">
								<span class="text-stone-400">Status</span>
								<span class="relative text-green-500">Resolved</span>
							</p>
						</div>
					</figure>
				</div>
			{/if}
		</section>

		<section class="py-4 px-6 border-b border-[#ECECEC] last:border-0">
			<button class="w-full flex items-center justify-between">
				<h5 class="text-sm font-semibold text-[#4F4F4F]">Time Logs</h5>

				<div>
					<CaretDownIcon class="w-7 h-7 text-[#7c7c7c]" />
				</div>
			</button>
		</section>

		<section class="py-4 px-6 border-b border-[#ECECEC] last:border-0">
			<button class="w-full flex items-center justify-between">
				<h5 class="text-sm font-semibold text-[#4F4F4F]">To-Do</h5>

				<div>
					<CaretDownIcon class="w-7 h-7 text-[#7c7c7c]" />
				</div>
			</button>
		</section>

		<section class="py-4 px-6 border-b border-[#ECECEC] last:border-0">
			<button class="w-full flex items-center justify-between">
				<h5 class="text-sm font-semibold text-[#4F4F4F]">Channel Reply</h5>

				<div>
					<CaretDownIcon class="w-7 h-7 text-[#7c7c7c]" />
				</div>
			</button>
		</section>
	</section>
{/if}
