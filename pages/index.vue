<template>
  <div id="top">
    <hero />
    <cta id="cta"/>
    <join id="join" />
    <top id="onTop" />
    <values id="values" />
    <contact id="contact" />
    <footer-pm></footer-pm>
  </div>
</template>

<script>
import Hero from '@/components/hero'
import Cta from '@/components/cta'
import Join from '@/components/join'
import Top from '@/components/top'
import Values from '@/components/values'
import Contact from '@/components/contact'
import FooterPm from '@/components/footer'

export default {
  components: {
    Hero,
    Cta,
    Join,
    Top,
    Values,
    Contact,
    FooterPm
  }
}
</script>

