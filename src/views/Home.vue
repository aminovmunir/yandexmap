<template>
    <yandex-map
        :coords="coords"
        v-model:zoom="zoom"
        ymap-class="map-box"
      >
        <ymap-marker
          v-for="marker in markers"
          @click="chooseMarker(marker)"
          :key="marker.id" 
          :coords="[marker.latitude, marker.longitude]"
          :marker-id="marker.id"
          :hintContent="marker.name"
          :icon="activeMarker == marker.id? {
            layout: 'default#imageWithContent',
            imageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
            imageSize: [32, 32],
            imageOffset: [-16, -35],
            contentOffset: [0, 15],
          } : {}"
        />
    </yandex-map>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      markers: [
          {
            "id": 1,
            "latitude": 50.760918,
            "longitude": 4.110170,
            "name": "ВАЗ"
          },
          {
            "id": 2,
            "latitude": 47.492647,
            "longitude": 19.051399,
            "name": "ГАЗель"
          },
          {
            "id": 3,
            "latitude": 41.902689,
            "longitude": 12.496176,
            "name": "Lexus"
          },
          {
            "id": 4,
            "latitude": 43.779787,
            "longitude": 11.265817,
            "name": "Volkswagen"
          },
          {
            "id": 5,
            "latitude": 52.373057,
            "longitude": 4.892557,
            "name": "Lada"
          },
          {
            "id": 6,
            "latitude": -22.903150,
            "longitude": -43.189903,
            "name": "Kia"
          },
          {
            "id": 7,
            "latitude": 38.716174,
            "longitude": -9.141589,
            "name": "Bentli"
          },
          {
            "id": 8,
            "latitude": 50.080293,
            "longitude": 14.428983,
            "name": "Porche"
          },
          {
            "id": 9,
            "latitude": 48.856663,
            "longitude": 2.351556,
            "name": "BMW"
          },
          {
            "id": 10,
            "latitude": 45.438095,
            "longitude": 12.319029,
            "name": "Honda"
        }],
      coords: [],
      zoom: 5,
      activeMarker: '',
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.coords = [this.markers[0].latitude, this.markers[0].longitude]
    },
    chooseMarker(marker){
      this.activeMarker = marker.id
      this.coords = [marker.latitude, marker.longitude]
      setTimeout(() => {
        this.zoom = 10
      }, 1000);
    },
  },
  }
</script>
<style>
  .map-box {
      width: 100%;
      height: 600px;
  }
</style>
