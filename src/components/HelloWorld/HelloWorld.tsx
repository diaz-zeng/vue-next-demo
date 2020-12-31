import { defineComponent } from 'vue';
import style from './index.module.less';
const setup = (): JSX.Element => {
  return () => (
    <>
      <h1 class={style.title}>hello world</h1>
    </>
  );
};

export default defineComponent({
  name: 'HelloWorld',
  setup,
});
