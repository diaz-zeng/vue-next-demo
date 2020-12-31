import { defineComponent } from 'vue';

import style from './index.module.less';

const setup: () => JSX.Element = (): JSX.Element => {
  return () => (
    <>
      <h1 class={style.title}>About</h1>
    </>
  );
};
export default defineComponent({
  name: 'About',
  setup,
});
