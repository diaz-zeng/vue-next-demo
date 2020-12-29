import { defineComponent } from "vue";
import HelloWorld from './components/HelloWorld'

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <>
        <HelloWorld />
        <h1 class="title">hello world</h1>
      </>)
  }
})