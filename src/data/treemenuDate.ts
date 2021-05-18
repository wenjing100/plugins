export default [
    {id: 0, title: '菜单0' },
    {id: 1, title: '菜单1', children: [
            { id: 10, title: '菜单10' },
            { id: 11, title: '菜单11' },
            {id: 12, title: '菜单12', children: [
                    { id: 120, title: '菜单120' },
                    { id: 121, title: '菜单121' },
                    { id: 122, title: '菜单122' },
                    { id: 123, title: '菜单123' },
                    { id: 124, title: '菜单124' },
                    {id: 125, title: '菜单125', children: [
                            {id: 1250, title: '菜单1250', children: [
                                    { id: 12500, title: '菜单12500' },
                                    { id: 12501, title: '菜单12501' },
                                ]
                            },
                            { id: 1251, title: '菜单1251' },
                            { id: 1252, title: '菜单1252' },
                            { id: 1253, title: '菜单1253' },
                            { id: 1254, title: '菜单1254' },
                    ]},
            ]},
    ]},
    {id: 2, title: '菜单2', children: [
        {id: 20, title: '菜单20', children: [
            { id: 220, title: '菜单220' },
            { id: 221, title: '菜单221' },
            { id: 222, title: '菜单222' },
            { id: 223, title: '菜单223' },
            { id: 224, title: '菜单224' },
            {id: 225, title: '菜单225', children: [
                    {id: 2250, title: '菜单2250', children: [
                            { id: 22500, title: '菜单22500' },
                            { id: 22501, title: '菜单22501' },]}
            ]},
        ]},
    ]},
    { id: 3, title: '菜单3' },
    { id: 4, title: '菜单4' },
]