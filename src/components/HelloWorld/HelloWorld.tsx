import { defineComponent } from "vue";
import style from './index.module.less';


export default defineComponent({
    name: "HelloWorld",
    setup: () => {
        return () => (<>
            <h1 class={style.title}>hello world</h1>
        </>)
    }
})
