<template>
  <div>
    <hero />
    <cta />
    <join />
    <values />
    <contact />
  </div>
</template>

<script>
import Hero from '@/components/hero'
import Cta from '@/components/cta'
import Join from '@/components/join'
import Values from '@/components/values'
import Contact from '@/components/contact'

export default {
  components: {
    Hero,
    Cta,
    Join,
    Values,
    Contact
  }
}
</script>

