<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import { useRoute } from 'vitepress'
import { computed, onMounted, ref } from 'vue'

const route = useRoute()
const { copy, copied: shareSuccess } = useClipboard()

const browserLangCode = ref<string>('')

onMounted(() => {
  if (typeof navigator !== 'undefined') {
    const raw = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase()
    browserLangCode.value = raw
  }
})

interface ShareI18n {
  share: string
  copied: string
  title: string
}

const translations: Record<string, ShareI18n> = {
  zh: {
    share: '分享此页',
    copied: '复制成功',
    title: '复制当前页面链接',
  },
  en: {
    share: 'Share',
    copied: 'Copied!',
    title: 'Copy link to this page',
  },
  ja: {
    share: '共有',
    copied: 'コピー完了',
    title: 'このページのリンクをコピー',
  },
  ko: {
    share: '공유',
    copied: '복사 완료',
    title: '현재 페이지 링크 복사',
  },
  es: {
    share: 'Compartir',
    copied: '¡Copiado!',
    title: 'Copiar enlace de esta página',
  },
  pt: {
    share: 'Compartilhar',
    copied: 'Copiado!',
    title: 'Copiar link da página',
  },
  ru: {
    share: 'Поделиться',
    copied: 'Скопировано!',
    title: 'Скопировать ссылку на страницу',
  },
}

const currentLocale = computed<ShareI18n>(() => {
  // 1. 优先使用浏览器检测到的语言（例如 zh-CN -> zh, en-US -> en）
  if (browserLangCode.value) {
    const langPrefix = browserLangCode.value.split('-')[0]
    if (translations[langPrefix])
      return translations[langPrefix]
  }

  // 2. 兜底策略：根据当前页面路由判断
  const path = route.path
  if (path.startsWith('/zh'))
    return translations.zh
  if (path.startsWith('/ja'))
    return translations.ja
  if (path.startsWith('/ko'))
    return translations.ko
  if (path.startsWith('/es'))
    return translations.es
  if (path.startsWith('/pt'))
    return translations.pt
  if (path.startsWith('/ru'))
    return translations.ru

  return translations.en
})

function copyShareLink() {
  if (typeof window === 'undefined')
    return
  copy(window.location.href)
}
</script>

<template>
  <button
    h-full ws-nowrap px3 text-sm font-medium
    text="$vp-c-text-1"
    :class="[
      shareSuccess ? '!text-green-400' : 'hover:sm:text-$vp-c-brand',
    ]"
    :disabled="shareSuccess"
    :title="currentLocale.title"
    :aria-label="currentLocale.share"
    @click="copyShareLink()"
  >
    <Transition
      mode="out-in"
      enter-active-class="transition-all duration-250 ease-out"
      leave-active-class="transition-all duration-250 ease-out"
      enter-from-class="transform translate-y-30px opacity-0"
      leave-to-class="transform translate-y--30px opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
    >
      <span v-if="shareSuccess" flex items-center space-x-1>
        <span class="i-octicon:checkbox-16" />
        <span>{{ currentLocale.copied }}</span>
      </span>
      <span v-else flex items-center space-x-1>
        <span class="i-octicon:share-16" />
        <span>{{ currentLocale.share }}</span>
      </span>
    </Transition>
  </button>
  <div class="bg-$vp-c-divider-light" mx2 block h-24px w-1px md:hidden />
</template>
