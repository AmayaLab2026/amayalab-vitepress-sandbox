<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed, onMounted, ref } from 'vue'

const route = useRoute()
const { frontmatter } = useData()
const browserLang = ref('')

onMounted(() => {
  if (typeof navigator !== 'undefined') {
    browserLang.value = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase()
  }
})

const isAcknowledgements = computed(() => {
  if (frontmatter.value?.hideReprintNotice)
    return true
  return route.path.includes('acknowledgements')
})

const isZh = computed(() => {
  if (browserLang.value)
    return browserLang.value.startsWith('zh')
  return route.path.startsWith('/zh')
})
</script>

<template>
  <div v-if="!isAcknowledgements" class="reprint-attribution-card mt-12 rounded-xl p-4.5 transition-colors">
    <div flex="~ items-center gap-2" text-sm font-semibold>
      <span class="i-octicon:info-16 text-$vp-c-brand" />
      <span>{{ isZh ? '转载声明与开源致谢' : 'Reproduction Notice & Acknowledgements' }}</span>
    </div>

    <p v-if="isZh" class="mt-2 text-xs text-$vp-c-text-2 leading-relaxed">
      本文档内容转载自
      <a
        href="https://vitepress.dev/"
        target="_blank"
        rel="noreferrer noopener"
        class="text-$vp-c-brand font-medium hover:underline"
      >VitePress 官方文档</a>，
      遵循
      <a
        href="https://github.com/vuejs/vitepress/blob/main/LICENSE"
        target="_blank"
        rel="noreferrer noopener"
        class="text-$vp-c-brand font-medium hover:underline"
      >MIT 开源协议</a>。
      原项目版权归 <strong>Evan You（尤雨溪）</strong> 及全体 VitePress 贡献者所有。
      本站展示中已按约定将产品名称替换为 <strong>Sapphire Rapids</strong>。
      详细技术项目参考与开源敬意请参见
      <a
        href="/zh/acknowledgements"
        class="text-$vp-c-brand font-medium hover:underline"
      >项目致谢独立页面 →</a>
    </p>

    <p v-else class="mt-2 text-xs text-$vp-c-text-2 leading-relaxed">
      This document is reproduced from the
      <a
        href="https://vitepress.dev/"
        target="_blank"
        rel="noreferrer noopener"
        class="text-$vp-c-brand font-medium hover:underline"
      >official VitePress documentation</a>
      under the
      <a
        href="https://github.com/vuejs/vitepress/blob/main/LICENSE"
        target="_blank"
        rel="noreferrer noopener"
        class="text-$vp-c-brand font-medium hover:underline"
      >MIT License</a>.
      Original copyright belongs to <strong>Evan You</strong> and the VitePress team.
      In this deployment, product references are adapted to <strong>Sapphire Rapids</strong>.
      For complete attribution and credits, visit our
      <a
        href="/acknowledgements"
        class="text-$vp-c-brand font-medium hover:underline"
      >Acknowledgements page →</a>
    </p>
  </div>
</template>

<style scoped>
.reprint-attribution-card {
  border: 1px solid var(--vp-c-divider-light);
  background-color: var(--vp-c-bg-soft);
}
</style>
