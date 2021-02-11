<template>
    <div class="container">
        
        <h5>九混について</h5>
        <article class="art">
            <h6 class="summary">発足と現在</h6>
            <h6>{{ now }}</h6>
        </article>
        <article class="art">
            <h6 class="summary">九混の活動</h6>
            <h6>{{ activity }}</h6>
        </article>
    </div>
</template>

<script>
export default {
    data () {
      return {
        now: `　九大混声合唱団（九混）は、九州大学を拠点に活動している混声合唱サークルです。昭和38年(1963年)2月に発足し、今まで56年の歴史を歩んできました。

        　団員は九州大学の学生が主ですが、他大学や専門学校の学生も入団できます。 現在は中村学園大学、筑紫女学園大学の仲間がおり、約60人で活動しています。（2021年2月現在）`,

        activity: `　九混のメインのイベントは全日本合唱コンクールへの出場と定期演奏会の開催です。 全日本合唱コンクール全国大会には、これまで18回出場し、2017年度は見事金賞を受賞いたしました。

        　また年に一度開催する定期演奏会には、例年1000人を超えるお客様にご来場いただいておりました。この2つの大きな行事に向け、団員は日々練習に取り組んでおります。

        　加えて、合唱祭への出演や公民館や中学校を訪問しての演奏、また2017年度は香港の合唱団DIOCESAN CHORAL SOCIETY様とのジョイントコンサート、2019年度は北海道大学合唱団様の九州公演へのゲスト演奏など多くの発表の機会があり、多くの場所で『九混サウンド』を響かせております。
        　とか書いてますけども、ここの文章はちょっと考えないといけませんね
        
        　合唱を愛してやまない団員たちが織り成す演奏を、ぜひ一度お楽しみください。`
      }
    }
}
</script>
<style scoped>
.summary {
    font-weight: bold;
}
article {
    padding-top: 15px;
    white-space: pre-line;
    background-color: silver;
}
</style>