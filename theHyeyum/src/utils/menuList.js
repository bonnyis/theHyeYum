export const menuList = [
    { mainName: '기업소개',
      mainPath: 'info',
      list: [
        {name: 'CEO 인사말', path: '/greetings'},
        {name: '회사소개 및 연혁', path: '/info'},
        // {name: '연혁', path: '/history'},
        {name: '오시는길', path: '/direction'},
      ]
    },
    { 
      mainName: '제품소개',
      mainPath: 'product',
      list: [
        {name: '테이블(모양지)', path: '/product1'},
        {name: '철재', path: '/product2'},
        {name: '집기류', path: '/product3'},
      ]
    },
    { 
      mainPath: 'designLab',
      mainName: '연구개발',
      list: [
        {name: '제품디자인연구소', path: '/designLab'},
      ]
    },
    { mainName: '커뮤니티',
      mainPath: 'community',
      list: [
        {name: '공지사항', path: '/notice'},
        {name: '적용사례', path: '/example'},
        {name: '제품견적문의', path: '/question'},
      ]
    },
  ]
  export default menuList