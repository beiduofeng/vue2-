<template>
    <div>
        <div class="foot">
            <div class="address">@xxx.xxxx.com</div>
        </div>

    </div>
</template>
<script>
export default {
    name: "app-footer",

}
</script>
<style scoped>
.foot {
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-shadow: 0px -5px 3px 0px #eaecef;
}

.address {
    width: 100px;
    height: 20px;
    line-height: 20px;
    color: black;
    margin: auto;
    padding: 25px 0;
}
</style>