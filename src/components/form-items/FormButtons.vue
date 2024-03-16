<template>
    <div class="form__buttons">
        <button type="submit" class="form__buttons__button">Отправить</button>
        <button type="reset" class="form__buttons__button">Стереть</button>
    </div>
</template>


<script>

</script>

<style scoped>

.form__buttons {
  display: flex;
  flex-direction: row;
  grid-gap: 10px
}

.form__buttons__button {
  background: none;
  border: 1px solid black;
  width: 120px;
  height: 40px;
}
</style>