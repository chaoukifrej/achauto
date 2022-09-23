<template>
  <svg
    version="1.0"
    :width="width"
    :height="height"
    viewBox="0 0 318 238"
    preserveAspectRatio="xMidYMid meet"
    id="svg100"
    v-anime="logoAnime"
    @click="$nuxt.$options.router.push('/')"
    style="cursor: pointer"
  >
    <defs id="defs104">
      <rect
        x="200.16817"
        y="743.52197"
        width="647.51245"
        height="147.70831"
        id="rect6221"
      />
    </defs>

    <g
      transform="matrix(0.1,0,0,-0.1,-275.0727,591.91193)"
      fill="#000000"
      stroke="none"
      id="g98"
    >
      <path
        d="m 3883,5910 c -38,-15 -55,-57 -79,-192 -14,-84 -30,-141 -42,-157 -10,-14 -48,-38 -83,-52 -35,-14 -85,-36 -111,-48 -26,-11 -58,-21 -72,-21 -15,0 -75,34 -150,85 -154,105 -175,108 -242,41 -67,-67 -63,-95 31,-230 114,-162 111,-149 61,-263 -19,-43 -37,-90 -41,-104 -14,-58 -50,-77 -200,-105 -148,-27 -180,-40 -195,-80 -14,-37 -12,-101 5,-133 23,-45 64,-56 205,-55 133,0 181,12 375,91 l 70,28 7,63 c 48,435 577,626 888,322 31,-30 63,-65 71,-77 l 14,-22 90,19 c 50,10 116,21 148,25 31,4 59,11 62,15 3,4 -5,29 -16,55 -13,30 -18,56 -14,73 3,14 37,70 75,124 113,160 118,181 60,245 -35,39 -61,53 -95,53 -33,0 -49,-8 -168,-92 -55,-38 -112,-72 -129,-75 -21,-4 -47,2 -86,20 -32,15 -84,37 -116,49 -33,13 -67,34 -77,48 -11,15 -28,82 -43,165 -23,128 -28,142 -56,168 -24,22 -40,27 -78,26 -26,0 -57,-4 -69,-9 z"
        id="path74"
        style="fill: #ffffff"
        v-anime="logoAnime1"
      />
      <path
        d="m 5537,5159 c -228,-22 -641,-116 -917,-209 -396,-134 -721,-268 -913,-376 -351,-199 -446,-278 -591,-493 -72,-107 -75,-144 -18,-202 41,-40 78,-55 115,-45 12,3 74,42 137,87 106,74 118,80 155,76 63,-7 242,-86 260,-114 9,-13 25,-77 36,-141 34,-199 42,-212 146,-212 96,0 107,14 138,179 14,73 25,137 25,142 0,23 56,69 103,85 29,9 73,27 99,40 79,40 99,35 239,-62 114,-79 127,-85 163,-81 65,9 137,98 120,150 -4,12 -44,77 -90,144 -46,68 -84,132 -84,143 0,12 9,37 19,58 10,20 33,74 51,120 39,101 41,102 230,136 165,30 180,41 180,137 0,85 -27,112 -130,129 -111,19 -113,23 -24,57 261,100 614,197 832,229 67,9 122,21 122,26 0,10 -286,8 -403,-3 z M 4455,4582 c -40,-139 -144,-268 -267,-330 -94,-48 -210,-69 -305,-55 -41,6 -77,14 -81,18 -7,7 2,15 130,121 89,74 250,182 378,254 52,29 109,61 125,71 29,18 30,18 33,-1 2,-11 -4,-46 -13,-78 z"
        id="path76"
        style="fill: #d40000"
        v-anime="logoAnime2"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '50pt',
    },
    width: {
      type: String,
      default: '60pt',
    },
  },
  data() {
    return {
      logoAnime: {
        scale: [1, 1.5, 1],
        duration: 600,
        easing: 'easeInOutQuad',
      },
      logoAnime1: {
        opacity: [0, 1],
        fill: ['#d40000', '#ffffff'],
        duration: 800,
        loop: false,
        easing: 'easeInOutQuad',
      },
      logoAnime2: {
        opacity: [0, 1],
        fill: ['#d40000', '#ffffff', '#d40000'],
        duration: 800,
        delay: 200,
        loop: false,
        easing: 'easeInOutQuad',
      },
    }
  },
  mounted() {
    this.animateOnScroll()
  },
  methods: {
    animateOnScroll() {
      this.$Observer.create({
        target: window,
        type: 'scroll',
        onChange: (self) => {
          const path = document.querySelector('#path74')
          if (
            (self.target.scrollY + 75 > self.target.innerHeight &&
              self.target.scrollY + 75 < self.target.innerHeight * 2) ||
            self.target.scrollY + 75 > self.target.innerHeight * 3
          ) {
            path.style.fill = '#000000'
          } else {
            path.style.fill = '#ffffff'
          }
          console.log(
            'height:',
            self.target.innerHeight,
            'scrollY:',
            self.target.scrollY
          )
        },
      })
    },
  },
}
</script>

<style></style>
