<script lang="ts">
	import { fade } from 'svelte/transition';

	import IconInformation from '~icons/mdi/information-variant';
	import IconPlay from '~icons/mdi/play';
	import IconPause from '~icons/mdi/pause';
	import IconStop from '~icons/mdi/stop';
	import IconChatQuestion from '~icons/mdi/chat-question';
	import IconClose from '~icons/mdi/close';

	import { alertTextState, alertTypeState } from '$lib/store/alert';

	const dismissAlert = () => {
		alertTextState.set('');
		alertTypeState.set('');
	};
</script>

{#if $alertTypeState === 'info' && $alertTextState}
	<aside class="alert variant-soft m-3 w-full" transition:fade|local={{ duration: 200 }}>
		<div class="btn-icon variant-soft-primary">
			<IconInformation />
		</div>

		<div class="alert-message">{$alertTextState}</div>

		<div class="alert-actions">
			<button type="button" class="btn" on:click={dismissAlert}>
				<IconClose />
			</button>
		</div>
	</aside>
{:else if $alertTypeState === 'success' && $alertTextState}
	<aside class="alert variant-soft-success m-3 w-full" transition:fade|local={{ duration: 200 }}>
		<div class="btn-icon variant-soft-success">
			<IconPlay />
		</div>

		<div class="alert-message">{$alertTextState}</div>

		<div class="alert-actions">
			<button type="button" class="btn" on:click={dismissAlert}>
				<IconClose />
			</button>
		</div>
	</aside>
{:else if $alertTypeState === 'warning' && $alertTextState}
	<aside class="alert variant-soft-warning m-3 w-full" transition:fade|local={{ duration: 200 }}>
		<div class="btn-icon variant-soft-warning">
			<IconPause />
		</div>

		<div class="alert-message">{$alertTextState}</div>

		<div class="alert-actions">
			<button type="button" class="btn" on:click={dismissAlert}>
				<IconClose />
			</button>
		</div>
	</aside>
{:else if $alertTypeState === 'error' && $alertTextState}
	<aside class="alert variant-soft-error m-3 w-full" transition:fade|local={{ duration: 200 }}>
		<div class="btn-icon variant-soft-error">
			<IconStop />
		</div>

		<div class="alert-message">{$alertTextState}</div>

		<div class="alert-actions">
			<button type="button" class="btn" on:click={dismissAlert}>
				<IconClose />
			</button>
		</div>
	</aside>
{:else if $alertTextState}
	<aside class="alert variant-soft m-3 w-full" transition:fade|local={{ duration: 200 }}>
		<div class="btn-icon">
			<IconChatQuestion />
		</div>

		<div class="alert-message">{$alertTextState}</div>

		<div class="alert-actions">
			<button type="button" class="btn" on:click={dismissAlert}>
				<IconClose />
			</button>
		</div>
	</aside>
{/if}
