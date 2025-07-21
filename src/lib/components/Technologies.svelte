<script>
	import TechBadge from '$lib/components/TechBadge.svelte';
	import Icon from '@iconify/svelte';
	export let technologies;
	export let t;
</script>

<section id="technologies" class="mx-auto max-w-4xl px-6 py-16">
	<div class="mb-12">
		<span class="text-sm font-medium text-[#22d3ee]"
			><span class="text-[#fbbf24]">$</span> {t.commands.cat}</span
		>
		<h2 class="mt-2 mb-4 text-3xl font-bold text-[#f8fafc]">{t.titles.technologies}</h2>
		<p class="mb-8 text-lg text-[#d1d5db]">
			{t.descriptions.technologies}
		</p>
	</div>

	<div class="space-y-10">
		<div>
			<h3 class="mb-6 flex items-center gap-2 text-xl font-semibold text-[#22d3ee]">
				<Icon icon="mdi:star" width="20" height="20" class="text-[#fbbf24]" />
				{t.labels.primaryTech}
			</h3>
			<div class="flex flex-wrap gap-3">
				{#each technologies.primary as tech}
					<TechBadge {tech} size="md" />
				{/each}
			</div>
		</div>

		<div>
			<h3 class="mb-6 flex items-center gap-2 text-xl font-semibold text-[#22d3ee]">
				<Icon icon="mdi:plus" width="20" height="20" class="text-[#10b981]" />
				{t.labels.additionalTech}
			</h3>
			<div class="flex flex-wrap gap-3">
				{#each technologies.additional as tech}
					<TechBadge {tech} size="md" />
				{/each}
			</div>
		</div>
	</div>

	<div class="mt-10 rounded-lg border-l-4 border-[#22d3ee] bg-[#1e1e28] p-6">
		<div class="flex items-start gap-3">
			<Icon
				icon="mdi:information"
				width="20"
				height="20"
				class="mt-0.5 flex-shrink-0 text-[#22d3ee]"
			/>
			<p class="text-[#d1d5db] italic">
				{t.labels.techNote}
			</p>
		</div>
	</div>
</section>
