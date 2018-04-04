<!-- 买家 footer页面 -->
<template lang="html">
    <div class="footer componet-footer" v-show="isShow">
        <div class="ft-main">
            <div 
                v-for="(tabPer, index) in footerConfig[nowTab+'Tab']"
                :class="{actived: nowItem === tabPer.path}"  
                @click="goPath({path: tabPer.path})"                              
                :key="index"
                class="ft-item">
                <div :class="['ft-icon', tabPer.icon+'-icon']"></div>
                <p class="tit">{{tabPer.tit}}</p>
            </div>
            
        </div>
    </div>
</template>

<script src="./footer.js" lang="babel"></script>
<style src="./footer.styl" lang="stylus" scoped></style>
