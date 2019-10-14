<template>
  <div id="top">
    <hero />
    <join id="join" />
    <cta id="cta"/>
    <top id="onTop" />
    <values id="values" />
    <analytics id="analytics" />
    <contact id="contact" />
    <footer-pm></footer-pm>
  </div>
</template>

<script>
import Hero from '@/components/hero'
import Join from '@/components/join'
import Cta from '@/components/cta'
import Top from '@/components/top'
import Values from '@/components/values'
import Analytics from '@/components/analytics'
import Contact from '@/components/contact'
import FooterPm from '@/components/footer'

export default {
  components: {
    Hero,
    Cta,
    Join,
    Top,
    Values,
    Analytics,
    Contact,
    FooterPm
  }
}
</script>

