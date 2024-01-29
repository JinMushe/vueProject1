import { defineStore } from "pinia";

export const useTheWayOfGodStore = defineStore('TheWayOfGod', {
  state(){
    return {
      TheWayOfGod:[
        {Sequence9:'占卜家',Sequence8:'小丑',Sequence7:'魔术师',Sequence6:'无面人',Sequence5:'密偶大师',Sequence4:'诡法师',Sequence3:'古代学者',Sequence2:'奇迹师',Sequence1:'诡秘侍者',Sequence0:'愚者'},
        {Sequence9:'学徒',Sequence8:'戏法大师',Sequence7:'占星人',Sequence6:'记录关',Sequence5:'旅行家',Sequence4:'秘法师',Sequence3:'漫游者',Sequence2:'旅法师',Sequence1:'星之匙',Sequence0:'门'}
      ]
      
    }
  }
})