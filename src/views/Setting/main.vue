<template>
  <div class="set-main">
    <n-card
      class="set-item"
      :content-style="{
        flexDirection: 'column',
        alignItems: 'flex-start',
      }"
    >
      <div class="top">
        <div class="name">
          主题色选择
          <span class="tip">更换全站主题色，即时生效</span>
        </div>
        <n-button strong secondary @click="changeThemeColor(null, true)">
          恢复默认
        </n-button>
      </div>
      <n-grid
        class="color-selete"
        :x-gap="16"
        :y-gap="16"
        responsive="screen"
        cols="3 s:4 m:5 l:6"
      >
        <n-grid-item
          v-for="item in themeColorData"
          :key="item"
          :style="{ '--color': item.primaryColor }"
          :class="item.label === setting.themeType ? 'item check' : 'item'"
          @click="changeThemeColor(item)"
        >
          <n-text v-html="item.name" />
        </n-grid-item>
      </n-grid>
    </n-card>
    <n-card class="set-item">
      <div class="name">明暗模式</div>
      <n-select class="set" v-model:value="theme" :options="darkOptions" />
    </n-card>
    <n-card class="set-item">
      <div class="name">明暗模式跟随系统</div>
      <n-switch v-model:value="themeAuto" :round="false" />
    </n-card>
    <n-card class="set-item">
      <div class="name">
        每日签到
        <span class="tip">是否自动进行每日签到</span>
      </div>
      <n-switch v-model:value="autoSignIn" :round="false" />
    </n-card>
    <n-card class="set-item">
      <div class="name">显示轮播图</div>
      <n-switch v-model:value="bannerShow" :round="false" />
    </n-card>
    <n-card class="set-item">
      <div class="name">
        列表点击方式
        <span class="tip">移动端该设置项无效，单击同时生效</span>
      </div>
      <n-select
        class="set"
        v-model:value="listClickMode"
        :options="listClickModeOptions"
      />
    </n-card>
    <n-card class="set-item">
      <div class="name">显示搜索历史</div>
      <n-switch v-model:value="searchHistory" :round="false" />
    </n-card>
    <n-card class="set-item">
      <div class="name">
        显示底栏歌词
        <span class="tip">是否在播放时显示歌词</span>
      </div>
      <n-switch v-model:value="bottomLyricShow" :round="false" />
    </n-card>
    <n-card class="set-item">
      <div class="name">
        歌曲音质
        <span class="tip">无损音质及以上需要您为黑胶会员</span>
      </div>
      <n-select
        class="set"
        v-model:value="songLevel"
        :options="songLevelOptions"
      />
    </n-card>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { settingStore, userStore } from "@/store";
import themeColorData from "@/components/Provider/themeColor.json";

const setting = settingStore();
const user = userStore();
const {
  theme,
  themeAuto,
  listClickMode,
  bottomLyricShow,
  songLevel,
  bannerShow,
  autoSignIn,
  searchHistory,
  themeType,
} = storeToRefs(setting);

// 深浅模式
const darkOptions = [
  {
    label: "浅色模式",
    value: "light",
  },
  {
    label: "深色模式",
    value: "dark",
  },
];

// 列表模式
const listClickModeOptions = [
  {
    label: "双击播放",
    value: "dblclick",
  },
  {
    label: "单击播放",
    value: "click",
  },
];

// 歌曲音质
const songLevelOptions = [
  {
    label: "标准",
    value: "standard",
  },
  {
    label: "较高",
    value: "higher",
  },
  ,
  {
    label: "极高",
    value: "exhigh",
  },
  {
    label: "无损",
    value: "lossless",
    disabled: user.userData?.vipType ? false : true,
  },
  {
    label: "Hi-Res",
    value: "hires",
    disabled: user.userData?.vipType ? false : true,
  },
  {
    label: "鲸云臻音",
    value: "jyeffect",
    disabled: user.userData?.vipType ? false : true,
  },
  {
    label: "鲸云母带",
    value: "jymaster",
    disabled: user.userData?.vipType ? false : true,
  },
];

// 更换主题色
const changeThemeColor = (data, reset = false) => {
  if (reset) {
    $dialog.warning({
      class: "s-dialog",
      title: "恢复默认",
      content: "确认恢复全站主题色为默认？",
      positiveText: "确认",
      negativeText: "取消",
      onPositiveClick: () => {
        $message.success("主题色已重置");
        setting.themeType = "red";
      },
    });
  } else {
    $message.success("主题色更换为" + data.name);
    setting.themeType = data.label;
  }
};
</script>

<style lang="scss" scoped>
.set-item {
  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .color-selete {
    margin-top: 16px;
    .item {
      position: relative;
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color);
      border-radius: 8px;
      transition: all 0.3s;
      cursor: pointer;
      @media (max-width: 800px) {
        height: 60px;
      }
      &::before {
        content: "";
        position: absolute;
        border-radius: 12px;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: 2px solid var(--color);
        opacity: 0;
        transition: opacity 0.3s;
      }
      &.check {
        &::before {
          opacity: 1;
        }
      }
      &:active {
        transform: scale(0.98);
      }
      .n-text {
        color: #fff;
      }
    }
  }
}
</style>
