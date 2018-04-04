<!-- 头部页面 -->
<template lang="html">
    <header class="header component-header">
        <div class="h-main">
            <!-- header左侧内容 -->
            <div class="left">
                <slot name="left"></slot>
            </div>
            <!-- 标题title -->
            <div class="title">
                <slot name="title"></slot>
            </div>
            <!-- header右侧内容 -->
            <div class="right">
                <slot name="right"></slot>
            </div>
        </div>
    </header>  
</template>

<script src="./header.js" lang="babel"></script>
<style src="./header.styl" lang="stylus" scoped></style>
