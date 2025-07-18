<script>
	import Icon from '@iconify/svelte';
	export let socials;
	export let t;
</script>

<section id="socials" class="mx-auto max-w-4xl px-6 py-16">
	<div class="mb-12">
		<span class="text-sm font-medium text-[#22d3ee]"
			><span class="text-[#fbbf24]">$</span> {t.commands.connect}</span
		>
		<h2 class="mt-2 mb-4 text-3xl font-bold text-[#f8fafc]">Contact</h2>
		<p class="mb-8 text-lg text-[#d1d5db]">
			{t.descriptions.contact}
		</p>
	</div>

	<div class="flex flex-wrap gap-4">
		{#each socials as social}
			<a
				href={social.href}
				target={social.href.startsWith('http') ? '_blank' : '_self'}
				rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
				class="group flex items-center gap-2 rounded-lg border border-[#2a2a35] bg-[#1e1e28] px-4 py-2 transition-all duration-200 hover:border-[#22d3ee] hover:bg-[#1e1e28]"
			>
				<Icon
					icon={social.icon}
					width="20"
					height="20"
					class="text-[#9ca3af] transition-colors group-hover:text-[#22d3ee]"
				/>
				<span class="text-[#e5e7eb] transition-colors group-hover:text-[#22d3ee]"
					>{social.label}</span
				>
			</a>
		{/each}
	</div>
</section>
