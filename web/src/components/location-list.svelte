<script lang="ts">
	import { fetchLocations } from '../utils/sheets';
	let keyword = '';
</script>

{#await fetchLocations()}
	<div class="flex h-full w-full items-center justify-center">
		<span class="loading loading-spinner loading-lg" />
	</div>
{:then locations}
	{@const provinces = [...new Set(locations.map((l) => l.province))]}
	{@const filteredProvinces = provinces
		.filter((p) => (keyword ? p.startsWith(keyword) : true))
		.sort()}

	<h1 class="heading-responsive-02 text-center leading-none mb-[30px]">
		มีจุดตั้งโต๊ะทั้งหมด {locations.length} จุด ใน {provinces.length} จังหวัด
	</h1>

	<div class="mb-[30px] relative">
		<div class="absolute flex items-center h-full pl-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
			>
				<rect
					width="16"
					height="16"
					fill="transparent"
					style="mix-blend-mode:multiply"
				/>
				<path
					d="M14.5 13.7931L10.7239 10.017C11.6313 8.9277 12.0838 7.5305 11.9872 6.11608C11.8907 4.70165 11.2525 3.37891 10.2055 2.423C9.15855 1.4671 7.78335 0.951637 6.366 0.983845C4.94865 1.01605 3.59828 1.59345 2.59581 2.59593C1.59333 3.5984 1.01593 4.94877 0.983723 6.36612C0.951515 7.78347 1.46698 9.15867 2.42288 10.2057C3.37879 11.2526 4.70153 11.8908 6.11596 11.9873C7.53038 12.0839 8.92758 11.6314 10.0169 10.7241L13.7929 14.5001L14.5 13.7931ZM2 6.50012C2 5.6101 2.26392 4.74007 2.75838 4.00005C3.25285 3.26003 3.95565 2.68325 4.77792 2.34266C5.60019 2.00207 6.50499 1.91295 7.3779 2.08658C8.25082 2.26022 9.05264 2.6888 9.68198 3.31814C10.3113 3.94747 10.7399 4.7493 10.9135 5.62221C11.0872 6.49513 10.998 7.39993 10.6575 8.22219C10.3169 9.04446 9.74008 9.74726 9.00006 10.2417C8.26004 10.7362 7.39001 11.0001 6.5 11.0001C5.30693 10.9988 4.1631 10.5243 3.31948 9.68064C2.47585 8.83701 2.00132 7.69319 2 6.50012Z"
					fill="black"
				/>
			</svg>
		</div>
		<input
			type="text"
			bind:value={keyword}
			placeholder="ค้นด้วยชื่อจังหวัด"
			class="w-full body-02-normal rounded-lg bg-base-200 py-2 pr-1 pl-7"
		/>
	</div>

	{#if filteredProvinces.length !== 0}
		{#each filteredProvinces as province, pindex}
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div
				tabindex={pindex}
				class="collapse collapse-arrow border-t-2 rounded-none"
			>
				<input type="radio" name="my-accordion-1" />
				<h2
					class="collapse-title px-0 pt-2 pb-[18px] flex flex-row gap-1 items-center"
				>
					<span class="heading-responsive-01">{province}</span>
					<span class="body-02-normal font-normal"
						>( {locations.filter((l) => l.province === province).length} จุด )</span
					>
				</h2>
				<ul class="collapse-content space-y-[26px] px-0">
					{#each locations.filter((l) => l.province === province) as { name, openingTime, phone, address, mapLink }}
						<li
							class="grid gap-y-[10px] pt-[10px] border-t border-base-300 body-01-normal"
						>
							<h3 class="heading-03">{name}</h3>
							<div>
								<h3 class="heading-01 text-xs">วันและเวลาที่เปิด</h3>
								<p>{openingTime}</p>
							</div>
							<div>
								<h3 class="heading-01 text-xs">ติดต่อ</h3>
								<p>{phone}</p>
							</div>
							<div>
								<h3 class="heading-01 text-xs">ที่อยู่</h3>
								<p>{address}</p>
								{#if mapLink}
									<p class="mt-1">
										<a
											href={mapLink}
											class="link-01 underline text-accent"
											target="_blank"
											rel="noopener noreferrer"
										>
											ดูแผนที่
										</a>
									</p>
								{/if}
							</div>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	{:else}
		<p class="body-02-normal text-center">
			ไม่มีจุดตั้งโต๊ะในจังหวัดที่คุณค้นหา
		</p>
	{/if}
{/await}

<style>
	.collapse-arrow .collapse-title:after {
		top: calc(50% - 0.25rem);
		right: 0.5rem;
	}
</style>
