export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  name: string
  avatar: string
  username: string
  title: string
  desc: string
  links: SocialEntry[]
  nameAliases: string[]
  emailAliases: string[]
}
