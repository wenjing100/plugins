<template>
  <div class="selectormenu">
    <div
      class="menuitem"
      v-for="(item, index) in searchData"
      :key="index"
      @click="setitemValue(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  onMounted,
  PropType,
  reactive,
  toRefs,
  watch,
} from "vue";
import { IdataItem } from "../../types/selector";
export default defineComponent({
  name: "selectormenu",
  props: {
    data: {
      type: Array as PropType<IdataItem[]>,
      default: [{ id: 0, value: "00", text: "--00--" }],
    },
    inputo: {
      type: String,
    },
  },
  setup(props, ctx) {
    const state = reactive<{ searchData: IdataItem[] }>({
      searchData: [],
    });
    onMounted(() => {
      state.searchData = props.data;
    });
    watch(
      () => {
        return props.inputo;
      },
      (val) => {
        filterData(val);
      }
    );
    const filterData = (value) => {
      state.searchData = props.data.filter((item) => {
        return item.text.toLowerCase().includes(value.toLowerCase());
      });
    };
    const setitemValue = (item) => {
      ctx.emit("setitemvalue", item);
    };
    return {
      ...toRefs(state),
      setitemValue,
    };
  },
  emits: ["setitemvalue"],
});
</script>

<style lang='scss' scoped>
.selectormenu {
  width: 200px;
  border-radius: 3px;
  margin-top: 5px;
  box-shadow: 0 1px 8px #098770;
  box-shadow: -1px -1px -3px #098770;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  display: none;
  .menuitem {
    font-size: 16px;
    width: 100%;
    text-align: center;
    padding: 5px 2px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: #09e6da;
    }
  }
}
</style>