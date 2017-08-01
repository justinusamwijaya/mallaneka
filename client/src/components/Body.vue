<template lang="html">
  <div>
    <Description></Description>
    <Templates></Templates>
    <Space></Space>
    <DropdownHarga></DropdownHarga>
    <DropdownFitur></DropdownFitur>
  </div>
</template>

<script>
import Space from './Space'
import DropdownHarga from './DropdownHarga'
import DropdownFitur from './DropdownFitur'
import Description from './Description'
import Templates from './Templates'

export default {
  components:{
    Description,Templates,DropdownFitur,Space,DropdownHarga
  }
}
</script>

<style lang="css">
</style>
