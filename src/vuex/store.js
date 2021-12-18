class Store {

    constructor() {console.log(localStorage.getItem('basket') == 'null')
        if (localStorage.getItem('basket') === 'null') {
            console.log(1)
            this.state = [
                {
                    id: 0,
                    title: 'Поп-ит',
                    stress: 'От проблем с концентрацией',
                    count: 0,
                    image: 'попит1.jpg'
                },
                {
                    id: 1,
                    title: 'Симпл-димпл',
                    stress: 'От проблем с нервозностью',
                    count: 0,
                    image: 'симпл-димпл1.jpg'
                },
                {
                    id: 2,
                    title: 'Сквиш',
                    stress: 'От проблем связанных со сном',
                    count: 0,
                    image: 'сквиш1.jpg'
                },
                {id: 3, title: 'Йо-йо', stress: 'От проблем с невнимательностью  ', count: 0, image: 'йо-йо.jpg'},
                {id: 4, title: 'Снаперс', stress: 'От проблем с навязчивостью ', count: 0, image: 'снаперс.jpg'},
                {id: 5, title: 'Кубик', stress: 'От проблем с глупыми мыслями ', count: 0, image: 'кубик.jpg'},
                {
                    id: 6,
                    title: 'Осьминог-перевертыш',
                    stress: 'От проблем с нервным тиком',
                    count: 0,
                    image: 'осьминог-перевертыш.jpg'
                },
                {
                    id: 7,
                    title: 'Спинер',
                    stress: 'От проблем с забывчивостью',
                    count: 0,
                    image: 'спиннер.jpg'
                }
            ]
            localStorage.setItem('basket', JSON.stringify(this.state))
            console.log(localStorage.getItem('basket'))
        } else {
            this.state = JSON.parse(localStorage.getItem('basket'))
        }
    }

    // methods
    increment(id) {

        this.state[id].count++
        console.log(this.state[id].count);
        localStorage.setItem('basket', JSON.stringify(this.state))
    }

    decrement(id) {
        if (this.state[id].count > 0){
        this.state[id].count--
        localStorage.setItem('basket', JSON.stringify(this.state))
    }}

    restore() {

        this.state.forEach(function(item) {
            item.count = 0;
        });
        localStorage.setItem('basket', JSON.stringify(this.state))
    }

}

// export new class instance
export default new Store()