<script setup lang="ts">
import { Input, Button, Checkbox } from "./AntDesign";
import { ref } from 'vue';
import { DemoFactoryMethod } from "../domain/Tree/DemoFactoryMethod"
import { DemoTreePlanting } from "../domain/Tree/DemoTreePlanting"
import { BuilderPatternDemo } from "../domain/Homes/DemoBuilder"
import { LlamadoSaludoSimple } from "../domain/Saludo/LlamadoSaludoSimple"
DemoFactoryMethod.main("Mundo");

const tree = ref("");
const fruitTree = ref(false)
const treePlanting = ref("");
const apartPatios = ref(false)
const homePatios = ref(false)
const homeVilla = ref(false)

const typeFruit = () => {
    alert("Arbol: " + DemoFactoryMethod.main(tree.value))
}

const planting = () => {
    alert(DemoTreePlanting.main(fruitTree.value, treePlanting.value))
}

const cotizar = () => {
    let listas: string[] = [] as string[];
    if(apartPatios.value) listas.push("ApartamentoLosPatios");
    if(homePatios.value) listas.push("CasaLosPatios");
    if(homeVilla.value) listas.push("CasaLVilla");
    alert(BuilderPatternDemo.main(listas));
}

const saludar = () => {
  alert(LlamadoSaludoSimple.main());
}
</script>

<template>
  <div>
    <div class="factory-method">
      {{ "Factory mehod" }}
      <br>
      {{ "Tipo de frutos por arbol:" }}
      <Input v-model:value="tree" />
      <Button @click="typeFruit">Buscar</Button>
    </div>
    <div class="abstract-factory">
      {{ "Abstract factory" }}
      <br>
      {{ "Plantar arbol:" }}
      <br />
      Arbol Frutal: <Checkbox v-model:checked="fruitTree" />
      <Input v-model:value="treePlanting" />
      <Button @click="planting">Plantar</Button>
    </div>
    <div class="builder">
      {{ "Builder:" }}
      <br />
      ¿Cual es su interes?
      <br />
      Apartamento Los Patios: <Checkbox v-model:checked="apartPatios" />
      <br />
      Casa Los Patios: <Checkbox v-model:checked="homePatios" />
      <br />
      Casa Villa del Rosario: <Checkbox v-model:checked="homeVilla" />
      <br />
      <Button @click="cotizar">Cotizar</Button>
    </div>
    <div class="singleton">
      {{ "Singleton" }}
      <br>
      <Button @click="saludar()">Saludo</Button>
    </div>
  </div>
</template>

<style scoped>
.factory-method{
    width: 30%;
    margin: 20px;
}
.factory-method > input{
    margin-bottom: 10px;
}
.abstract-factory{
    width: 30%;
    margin: 20px;
}
.builder {
    width: 30%;
    margin: 20px;
}
.singleton{
    width: 30%;
    margin: 20px;
}
</style>
../domain/FactoryMethod/DemoFactoryMethod
