let categories = [
    {
        id: 1,
        name: 'Интерьеры'
    },
    {
        id: 2,
        name: 'Архитектура'
    },
    {
        id: 3,
        name: 'Строительство'
    },
    {
        id: 4,
        name: 'Ремонт'
    },
]

let items = [
    {
        categorie_id: 1,
        img: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1464075208758-5623fb69e13b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 4,
        img: 'https://images.unsplash.com/photo-1526055577108-80193f001dde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 1,
        img: 'https://images.unsplash.com/photo-1525896544042-354764aa27e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 3,
        img: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 1,
        img: 'https://images.unsplash.com/photo-1614959541555-4550895d4b2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 4,
        img: 'https://images.unsplash.com/photo-1577701244709-a4b6fa3b4057?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 3,
        img: 'https://images.unsplash.com/photo-1543490791-db8323d8e5b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 4,
        img: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=995&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 1,
        img: 'https://images.unsplash.com/photo-1544690205-44c11f2deecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 3,
        img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRlc2lnbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        title: 'Разработка интерьера для загородного дома',
    },
    {
        categorie_id: 2,
        img: 'https://images.unsplash.com/photo-1625585598750-3535fe40efb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        title: 'Разработка интерьера для загородного дома',
    },
]
export {categories, items} 