<template functional>
  <a-sub-menu :key="props.menuInfo.path">
    <span slot="title">
      <a-icon type="mail" /><span>{{ props.menuInfo?.meta?.title }}</span>
    </span>
    <template v-for="sub in props.menuInfo.children">
      <a-menu-item v-if="!sub.children || sub?.children.length == 1" :key="sub.path">
        <a-icon type="pie-chart" />
        <span>{{ sub?.meta?.title || sub?.children?.[0]?.meta?.title }}</span>
      </a-menu-item>
      <menu-item v-else :menu-info="sub" :key="sub.path" />
    </template>
  </a-sub-menu>
</template>
