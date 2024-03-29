<script>
	import { ChevronDown, User, Lock, Cookie, AlertTriangle } from 'lucide-svelte';
	import NextLesson from '$lib/NextLesson.svelte';
	import { Modal, Content, Trigger } from 'sv-popup';
	import { base } from '$app/paths';
	import GetStarted from '$lib/GetStarted.svelte';
</script>

<svelte:head>
	<title>Lesson 5 - Safety</title>
</svelte:head>

<main class="flex flex-col justify-center m-auto">
	<div
		class="h-[91vh] md:mt-0 mt-10 flex flex-col items-center justify-items-center justify-center w-full border-b mb-4"
	>
		<div class="flex flex-col md:flex-row lg:items-center">
			<div class="mr-16">
				<p class=" tracking-wide text-[#ec598b] text-2xl">Lesson 5</p>
				<h1 class="text-6xl text-slate-800 font-semibold">Safety</h1>
				<p class="pt-3.5 lg:max-w-[47ch] text-xl text-slate-600 mb-3.5">
					It’s important to be safe when using the internet, though, especially with your personal
					information.
				</p>
			</div>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img
				src="{base}/assets/safety/safety.svg"
				alt="Safety Hero Image"
				class="md:max-w-[28rem] md:max-h-[28rem] w-5/6 h-auto"
			/>
		</div>
		<GetStarted />
	</div>
	<h2 class="text-slate-800 text-4xl font-semibold">
		Practicing Internet <span class="text-[#ec598b] font-semibold">Safety</span>
	</h2>
	<p class="text-slate-600 my-4 text-lg">
		By learning and taking precautions, you can help protect yourself while enjoying the benefits of
		the internet..
	</p>
	<div class="flex md:flex-row flex-col jusify-center w-full justify-center my-10">
		<div class="flex flex-col p-4">
			<label class="relative block">
				<span class="sr-only">Search</span>
				<span class="absolute inset-y-0 left-0 flex items-center pl-2">
					<Lock size={40} />
				</span>
				<input
					class="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-14 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm h-[60px] md:w-[450px]"
					placeholder="Type a password here..."
					type="password"
					name="search"
				/>
			</label>
			<h1 class=" text-3xl text-slate-800 font-semibold ">Passwords</h1>
			<p class="text-slate-600 max-w-[60ch]">
				It is important to create <span class="text-[#ec598b] font-semibold">strong</span> passwords
				on websites that have your personal information. Don't use the same password for multiple websites,
				because if one is compromised they all are! The easiest way to keep your passwords safe is to
				write them down, you can't hack paper!
			</p>
		</div>

		<div class="flex flex-col p-4">
			<User size={58} class="" />
			<h1 class=" text-3xl text-slate-800 font-semibold ">Personal Info</h1>
			<p class="text-slate-600 max-w-[60ch]">
				Unless you are on a website you <span class="text-[#ec598b] font-semibold">trust</span>,
				it's safer not to submit your personal information, also it's important to know that
				personal information can be faked by others. Remember, what you put on the internet is
				always available on the internet.
			</p>
		</div>

		<div class="flex flex-col p-4">
			<img src="{base}/assets/safety/horn.png" alt="" class="w-[59px] h-[59px]" />
			<h1 class=" text-3xl text-slate-800 font-semibold ">Ads</h1>
			<p class="text-slate-600 max-w-[60ch]">
				Internet ads are on most webpages, most are on the sides of the pages, or the middle of a
				webpage. Ads very often have malware attached to them, if you see something you want to buy
				or investigate, <span class="text-[#ec598b] font-semibold"
					>it is safer to google search it</span
				>.
			</p>
		</div>
	</div>
	<div class="flex md:flex-row flex-col jusify-center w-full justify-center my-10">
		<div class="flex flex-col p-4">
			<Modal basic>
				<Content>
					<h2>This is a pop up! Popups can appear like this or as an entirely different window!</h2>
				</Content>
				<Trigger>
					<button class="btn text-xl text-white py-2 px-4 bg-[#3549A6] rounded-md h-[59px]">
						Click Me!</button
					>
				</Trigger>
			</Modal>
			<h1 class=" text-3xl text-slate-800 font-semibold ">Pop Ups</h1>
			<p class="text-slate-600 max-w-[60ch]">
				A pop up is usually an ad on a webpage used to trick you into clicking it so it can put
				malware on your computer. <span class="text-[#ec598b] font-semibold"
					>It is OK to click the X button</span
				>
				on the browser window it appears on.
			</p>
		</div>
		<div class="flex flex-col p-4">
			<Cookie size={59} />
			<h1 class=" text-3xl text-slate-800 font-semibold ">Cookies</h1>
			<p class="text-slate-600 max-w-[60ch]">
				Cookies are internet files that track what you do on the internet. <span
					class="text-[#ec598b] font-semibold">THESE ARE NOT BAD THINGS</span
				>. Cookies are typically used to keep you logged into websites without you having to
				re-login on every page. They can be used by certain websites and advertisers to give you ads
				and information based on your personal browsing history, many sites require your consent for
				this.
			</p>
		</div>

		<div class="flex flex-col p-4">
			<AlertTriangle size={59} />
			<h1 class=" text-3xl text-slate-800 font-semibold ">Phishing</h1>
			<p class="text-slate-600 max-w-[60ch]">
				Phishing is one of the most common internet scams, usually in an email or some other form of
				internet communication. They then either ask for money, gift cards, passwords, or other
				sensitive information. It is always good to <span class="text-[#ec598b] font-semibold"
					>double check</span
				>
				through other means of communication if you expect a message might be a phishing attempt.
			</p>
		</div>
	</div>
</main>
<section class="flex items-center justify-center my-5">
	<NextLesson lessonNumber={'5'} nextPageLink="/" />
</section>
