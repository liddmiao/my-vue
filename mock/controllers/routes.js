const getRoutes = (req, res) => {
  res.json({
    code: 200,
    data: [
      {
        name: 'nav1',
        path: '/nav1',
        meta: {
          icon: 'star-on',
          title: '导航'
        },
        children: [
          {
            name: 'child1',
            path: '/chid1',
            meta: {
              icon: 'remove',
              title: '子导航1'
            }
          },
          {
            name: 'child2',
            path: '/chid2',
            meta: {
              icon: 'plus',
              title: '子导航2'
            }
          }
        ]
      }
    ]
  })
}

module.exports = {
  getRoutes
}