<script>
	//---------------------------------------------------------------------------------------------------//
	import { KeffiBrands } from '$lib/assets/brands';
	import {
		Bag2Icon,
		BulbIcon,
		BuyIcon,
		CategoryIcon,
		DangerIcon,
		DocumentIcon,
		LogoutIcon,
		MessageIcon,
		PaperIcon,
		SettingIcon
	} from '$lib/assets/icons';
	//---------------------------------------------------------------------------------------------------//
	/**
	 * TODO:
	 *
	 * > Sidebar
	 * >
	 * - [x] import all icon for sidebar
	 * - [x] create menu on hover like discord
	 */
	//---------------------------------------------------------------------------------------------------//
</script>

<!-- Sidebar -->
<aside
	class="sidebar h-screen z-50 fixed top-0 left-0 flex justify-between flex-col items-center w-20 bg-[#191C21]"
>
	<!-- Top -->
	<div class="sidebar_top flex flex-col items-center w-full">
		<!-- Logo -->
		<a href="/" class="sidebar_logo py-6 w-full flex justify-center">
			<KeffiBrands class="w-6 h-6 text-white" />
		</a>

		<!-- Menu -->
		<nav class="sidebar_menu px-3.5 flex flex-col items-center gap-2.5 w-full">
			<a
				href="/"
				class="py-3 relative flex justify-center w-full rounded-lg hover:bg-sky-500 group transition-colors duration-300 ease-in"
			>
				<CategoryIcon class="w-6 h-6 text-[#A9ADB5] stroke-1.5 group-hover:text-white" />

				<div
					class="w-auto p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in bg-sky-500 absolute left-full top-1/2 -translate-y-1/2 rounded-lg ml-8"
				>
					Dashboard
				</div>
			</a>

			<a
				href="/"
				class="py-3 relative flex justify-center w-full rounded-lg hover:bg-sky-500 group transition-colors duration-300 ease-in"
			>
				<BulbIcon class="w-6 h-6 text-[#A9ADB5] stroke-1.5 group-hover:text-white" />

				<div
					class="w-auto p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in bg-sky-500 absolute left-full top-1/2 -translate-y-1/2 rounded-lg ml-8"
				>
					Leads
				</div>
			</a>

			<a
				href="/"
				class="py-3 relative flex justify-center w-full rounded-lg hover:bg-sky-500 group transition-colors duration-300 ease-in"
			>
				<BuyIcon class="w-6 h-6 text-[#A9ADB5] stroke-1.5 group-hover:text-white" />

				<div
					class="w-auto p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in bg-sky-500 absolute left-full top-1/2 -translate-y-1/2 rounded-lg ml-8"
				>
					Sales
				</div>
			</a>

			<a
				href="/"
				class="py-3 relative flex justify-center w-full rounded-lg hover:bg-sky-500 group transition-colors duration-300 ease-in"
			>
				<DocumentIcon class="w-6 h-6 text-[#A9ADB5] stroke-1.5 group-hover:text-white" />

				<div
					class="w-auto p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in bg-sky-500 absolute left-full top-1/2 -translate-y-1/2 rounded-lg ml-8"
				>
					Tasks
				</div>
			</a>

			<a
				href="/"
				class="py-3 relative flex justify-center w-full rounded-lg hover:bg-sky-500 group transition-colors duration-300 ease-in"
			>
				<MessageIcon class="w-6 h-6 text-[#A9ADB5] stroke-1.5 group-hover:text-white" />

				<div
					class="w-auto p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in bg-sky-500 absolute left-full top-1/2 -translate-y-1/2 rounded-lg ml-8"
				>
					Mail
				</div>
			</a>

			<a
				href="/"
				class="py-3 relative flex justify-center w-full rounded-lg hover:bg-sky-500 group transition-colors duration-300 ease-in"
			>
				<Bag2Icon class="w-6 h-6 text-[#A9ADB5] stroke-1.5 group-hover:text-white" />

				<div
					class="w-auto p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in bg-sky-500 absolute left-full top-1/2 -translate-y-1/2 rounded-lg ml-8"
				>
					Product
				</div>
			</a>

			<a
				href="/"
				class="py-3 relative flex justify-center w-full rounded-lg hover:bg-sky-500 group transition-colors duration-300 ease-in"
			>
				<PaperIcon class="w-6 h-6 text-[#A9ADB5] stroke-1.5 group-hover:text-white" />

				<div
					class="w-auto p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in bg-sky-500 absolute left-full top-1/2 -translate-y-1/2 rounded-lg ml-8"
				>
					Documents
				</div>
			</a>

			<a
				href="/"
				class="py-3 relative flex justify-center w-full rounded-lg hover:bg-sky-500 group transition-colors duration-300 ease-in"
			>
				<DangerIcon class="w-6 h-6 text-[#A9ADB5] stroke-1.5 group-hover:text-white" />

				<div
					class="w-auto p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in bg-sky-500 absolute left-full top-1/2 -translate-y-1/2 rounded-lg ml-8"
				>
					Reports
				</div>
			</a>

			<a
				href="/"
				class="py-3 relative flex justify-center w-full rounded-lg hover:bg-sky-500 group transition-colors duration-300 ease-in"
			>
				<SettingIcon class="w-6 h-6 text-[#A9ADB5] stroke-1.5 group-hover:text-white" />

				<div
					class="w-auto p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in bg-sky-500 absolute left-full top-1/2 -translate-y-1/2 rounded-lg ml-8"
				>
					Settings
				</div>
			</a>
		</nav>
	</div>

	<!-- Logout -->
	<div class="sidebar_logout px-3.5 py-6 w-full flex self-end border-t border-[#32353A]">
		<a
			href="/"
			class="py-3 relative flex justify-center w-full rounded-lg hover:bg-sky-500 group transition-colors duration-300 ease-in"
		>
			<LogoutIcon class="w-6 h-6 text-[#A9ADB5] stroke-1.5 group-hover:text-white" />

			<div
				class="w-auto p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in bg-sky-500 absolute left-full top-1/2 -translate-y-1/2 rounded-lg ml-8"
			>
				Logout
			</div>
		</a>
	</div>
</aside>
