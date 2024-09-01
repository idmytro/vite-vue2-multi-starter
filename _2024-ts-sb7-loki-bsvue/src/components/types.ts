export interface Props {
  showVolarText?: boolean
  showLogoText?: boolean
}

export interface Emits {
  (event: 'click'): void
  (event: 'click-a', value: number): void
  (event: 'count-updated', value: number): void
}
