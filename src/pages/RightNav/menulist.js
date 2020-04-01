export default[
  {
    key:'1',
    title:"首页",
    icon:'home',
    path:'/admin/home'
  },
  {
    key:'2',
    title:"管理员",
    icon:'user',
    path:'/admin/administrator',
    children:[
      {
        key:'2-1',
        icon:'edit',
        title:'管理员添加',
        path:'/admin/administrator/adminAdd'
      },
      {
        key:'2-2',
        icon:'ellipsis',
        title:'管理员列表',
        path:'/admin/administrator/adminList'
      }
    ]
  },
  {
   key:'3',
   title:'用户管理',
   icon:'video-camera',
   path:'/admin/user',
   children:[
     {
      key:'3-2',
      icon:'team',
      title:"用户列表",
      path:'/admin/user/userlist'
    }
   ]
  },
  {
    key:'4',
    title:"商品管理",
    icon:'upload',
    path:'/admin/goods',
    children:[
      {
        key:'4-1',
        icon:'edit',
        title:'商品信息',
        path:'/admin/goodsInfo'
      },
      {
        key:'4-2',
        icon:'ellipsis',
        title:'商品类别',
        path:'/admin/goodsKind'
      }
    ]
  },
  {
    key:'5',
    title:"数据统计",
    icon:'form',
    path:'/admin/echarts',
    children:[
      {
        key:'5-1',
        icon:'pie-chart',
        title:'饼状图',
        path:'/admin/echarts/pie'
      }
    ]
  },
  {
    key:'6',
    title:"发布信息审核",
    icon:'setting',
    path:'/admin/msgCheck'
  },
  {
    key:'9',
    title:"个人中心",
    icon:'appstore',
    path:'/admin/set',
    children:[
      {
        key: '1',
        title: '基本设置',
        icon:'setting',
        path: '/admin/set/basic'
    },
    {
        key: '2',
        title: '安全设置',
        icon:"lock",
        path: '/admin/set/alter',
    },
    {
        key: '3',
        title: '账号绑定',
        icon:'apartment',
        path: '/admin/set/binding'
    }
    ]
  }
]