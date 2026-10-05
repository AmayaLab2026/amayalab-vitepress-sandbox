import type { Creator } from '../scripts/types/metadata'
import { getAvatarUrlByGithubName } from '../scripts/utils'

/** 文本 */
export const siteName = '我的技术文档'
export const siteShortName = '技术文档'
export const siteDescription = '自定义的个人技术文档范本'

/** 文档所在目录 */
export const include = ['docs']

/** Repo */
export const githubRepoLink = 'https://github.com/your-repo/your-docs'
/** Discord (可选) */
export const discordLink = ''

/** 无协议前缀域名 */
export const plainTargetDomain = 'docs.your-domain.com'
/** 完整域名 */
export const targetDomain = `https://${plainTargetDomain}`

/** 创作者 */
export const creators: Creator[] = [
  {
    name: '你的名字',
    avatar: '',
    username: 'your-github-username',
    title: '文档作者',
    desc: '开发者',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/your-github-username' },
    ],
    nameAliases: ['你的名字'],
    emailAliases: ['your-email@example.com'],
  }
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
