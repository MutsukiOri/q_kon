<template>
    <div class="about">
        <Group/>
        <Record/>
        <Member/>
        <Advisor/>
    </div>
</template>

<script>
    import Group from "@/components/About/group.vue";
    import Record from "@/components/About/record.vue";
    import Member from "@/components/About/member.vue";
    import Advisor from "@/components/About/advisor.vue"
    export default {
        components: {
            Group,
            Record,
            Member,
            Advisor
        }
  };

</script>

<style scoped>
.about {
    margin: 0 auto;
    min-height: 100vh;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: whitesmoke;
}
.container {
    max-width: 800px;
    padding-bottom: 40px;
    padding-top: 10px;
}

</style>