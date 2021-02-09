<template>
    <div>
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