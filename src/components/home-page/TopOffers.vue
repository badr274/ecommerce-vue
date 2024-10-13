<template>
  <div class="top-offers bg-grey-lighten-4 pt-5 pb-5">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <img
                src="../../assets/images/playstations.webp"
                alt=""
                :style="`width: 100%; transition: 0.5s; scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <img
                src="../../assets/images/headset.webp"
                alt=""
                :style="`width: 100%; transition: 0.5s; scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <img
                src="../../assets/images/chairs.webp"
                alt=""
                :style="`width: 100%; transition: 0.5s; scale: ${
                  isHovering ? 1.1 : 1
                }`"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6" class="mt-2">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-3"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <img
                src="../../assets/images/iphones.webp"
                alt=""
                :style="`width: 100%; transition: 0.5s; scale: ${
                  isHovering ? 1.1 : 1
                }`"
              /></div
          ></v-hover>
        </v-col>
        <v-col cols="6" class="mt-2">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-3"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <img
                src="../../assets/images/laptops.webp"
                alt=""
                :style="`width: 100%; transition: 0.5s; scale: ${
                  isHovering ? 1.1 : 1
                }`"
              /></div
          ></v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
