<template>
  <div>
    <button class="rts-btn btn-secondary call-btn ma-5"> Button-V2 </button>
  </div>
</template>

<script>
export default {
    name:"button-V2",
}
</script>

<style lang="scss" scoped>
.rts-btn.btn-secondary {
    color: #3a37eb;
    background: #3a37eb;
}
.rts-btn {
    padding: 18px 29px;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    border-radius: 15px;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}
.rts-btn.btn-secondary::before {
    background: #fff;
}
.rts-btn::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    border-radius: 14px;
}
.rts-btn.btn-secondary:hover {
    background: #3a37eb;
    color: #fff;
}

.rts-btn:hover::before {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
}
</style>