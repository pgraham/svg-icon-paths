const path = `M2,8
     Q10,0 18,8
     Q20,10 18,12
     Q10,20 2,12
     Q0,10 2,8
     M3.5,8
     Q10,2 16.5,8
     Q19,10 16.5,12
     Q10,18 3.5,12
     Q1,10 3.5,8
     M10,10
     m2,0
     a2,2 0 1,1 -4,0
     a2,2 0 1,1 4,0z`

export default {
  viewBox: '0 0 20 20',
  toString: () => path,
  attributes: {
    'fill-rule': 'evenodd',
  },
}
