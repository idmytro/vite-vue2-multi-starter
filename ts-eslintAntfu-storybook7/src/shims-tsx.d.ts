/* eslint-disable no-unused-vars */
import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    type IntrinsicElements = Record<string, any>
  }
}
