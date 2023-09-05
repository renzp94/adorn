<script setup>
import { computed, onMounted, ref } from 'vue';
import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'
const modules = import.meta.glob('../../../../example/**/*.svelte');
const props = defineProps({
	src: {
		type: String
	},
	github: {
		type: String
	},
	source: {
		type: String,
		default: ''
	}
});

let comp = null;
const el = ref();
onMounted(async () => {
	comp = await modules[props.src]();
	new comp.default({
		target: el.value
	});
});
const showCode = ref(false);
const code = computed(() => decodeURIComponent(props.source));
const copyText = (text) => {
  // navigator.clipboard只能用于https或者localhost。
  if (navigator?.clipboard?.writeText) {
    return navigator.clipboard.writeText(text)
  }
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.value = text
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
  return Promise.resolve()
}

const onCopy = async () => {
	await copyText(code.value);
	Message({
		type:"success",
		message: 'Copy successfully! 😊'
	})
};
</script>

<template>
	<ClientOnly>
		<div class="container">
			<div>
				<div ref="el"></div>
			</div>
			<highlight-code class="docs-code" language="html" :code="code" v-show="showCode" />
			<div class="tools">
				<svg class="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="showCode = !showCode">
					<path
						d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z">
					</path>
				</svg>
				<svg class="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" @click="onCopy">
					<path
						d="M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z">
					</path>
				</svg>
				<a
					:href="`https://github.com/renzp94/adorn/blob/main/packages/${github}`"
					target="_blank"
					class="link"
				>
					<svg class="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z">
						</path>
					</svg>
				</a>
			</div>
		</div>
	</ClientOnly>
</template>

<style>
@import '../../../assets/styles/atom-one-light.css';
@import '../../../assets/styles/atom-one-dark.css';
</style>

<style scoped>
.container{
	margin-top: 24px;
	border: 1px solid var(--vp-c-divider);
	border-radius: 4px;
	padding: 16px;
}
.docs-code {
	width: 100%;
	font-size: 14px;
}
.tools{
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-top: 16px;
	color: var(--vp-c-text-2);
}

.link{
	color: var(--vp-c-text-2);
}

.icon{
	height: 20px;
	width: 20px;
	cursor: pointer;
	margin-left: 12px;
}

.hljs {
	border-radius: 8px;
}
</style>
