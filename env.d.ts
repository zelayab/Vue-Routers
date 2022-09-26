/// <reference types="vite/client" />

declare module '*.vue' {
    import { defineComponent } from 'vue'
    const component: ReturnType<typeof defineComponent>
    export default component
}

declare module '*.md' {
    const content: string
    export default content
}

declare module '*.png' {
    const content: string
    export default content
}


