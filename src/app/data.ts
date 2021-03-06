import { Observable, of } from 'rxjs';

export interface IWeather {
    'title': string;
    'icon': string;
    'water': number;
    'temperature': number;
}

export interface ISocInfo {
    'title': string;
    'img': string;
    'followers': number;
    'following': number;
}

export interface IInfo {
    'img': string;
    'img2': string;
    'address': string;
    'phone': number;   // дополнительно задание pipe для форматирования
    'weather': {
        'title': string;
        'icon': string;
        'water'?: number;
        'temperature'?: number;
    };
    'social_info': {
        'title': string;
        'img': string;
        'followers': number;
        'following': number;
    };
    'type': string;
}

const _data: IInfo[] = [
    {
        'img': 'assets/img/res.jpg',
        'img2': 'assets/img/r1.jpg',
        'address': 'г. Сочи, ул. Дагомысская, 18',
        'phone': 79997255225,
        'weather': {
            'title': 'Облачно',
            'icon': 'cloud',
            'water': 20,
            'temperature': 14
        },
        'social_info': {
            'title': 'Профиль на сайте',
            'img': 'assets/img/b1.jpg',
            'followers': 2850,
            'following': 675
        },
        'type': 'hotel'
    },
    {
        'img': 'assets/img/res.jpg',
        'img2': 'assets/img/r1.jpg',
        'address': 'г. Магадан, ул. Ленина, 2',
        'phone': 78887255225,
        'weather': {
            'title': 'Облачно',
            'icon': 'cloud',
            'water': -20,
            'temperature': -24
        },
        'social_info': {
            'title': 'Профиль на сайте',
            'img': 'assets/img/b1.jpg',
            'followers': 1225,
            'following': 67
        },
        'type': 'hotel'
    },
    {
        'img': 'assets/img/res.jpg',
        'img2': 'assets/img/r1.jpg',
        'address': 'г. Москва, пл. Красная, 1',
        'phone': 74951112233,
        'weather': {
            'title': 'Облачно',
            'icon': 'cloud',
            'water': undefined,
            'temperature': 18
        },
        'social_info': {
            'title': 'Профиль на сайте',
            'img': 'assets/img/b1.jpg',
            'followers': 1850,
            'following': 65
        },
        'type': 'hotel'
    },
    {
        'img': 'assets/img/res.jpg',
        'img2': 'assets/img/r1.jpg',
        'address': 'г. Барселона, ул. Рамбла, 8',
        'phone': 342227255225,
        'weather': {
            'title': 'Облачно',
            'icon': 'cloud',
            'water': 20,
            'temperature': 20
        },
        'social_info': {
            'title': 'Профиль на сайте',
            'img': 'assets/img/b1.jpg',
            'followers': 22850,
            'following': 6715
        },
        'type': 'hotel'
    },
    {
        'img': 'assets/img/res.jpg',
        'img2': 'assets/img/r1.jpg',
        'address': 'озеро Калды',
        'phone': 79997255225,
        'weather': {
            'title': 'Облачно',
            'icon': 'cloud',
            'water': 22,
            'temperature': 14
        },
        'social_info': {
            'title': 'Профиль на сайте',
            'img': 'assets/img/b1.jpg',
            'followers': 2850,
            'following': 675
        },
        'type': 'fishing'
    },
    {
        'img': 'assets/img/res.jpg',
        'img2': 'assets/img/r1.jpg',
        'address': 'Чёрное море',
        'phone': 79997255225,
        'weather': {
            'title': 'Облачно',
            'icon': 'cloud',
            'water': 27,
            'temperature': 28
        },
        'social_info': {
            'title': 'Профиль на сайте',
            'img': 'assets/img/b1.jpg',
            'followers': 13450,
            'following': 67
        },
        'type': 'fishing'
    },
    {
        'img': 'assets/img/res.jpg',
        'img2': 'assets/img/r1.jpg',
        'address': 'озеро Тургояк',
        'phone': 79997255225,
        'weather': {
            'title': 'Облачно',
            'icon': 'cloud',
            'water': 16,
            'temperature': 22
        },
        'social_info': {
            'title': 'Профиль на сайте',
            'img': 'assets/img/b1.jpg',
            'followers': 28850,
            'following': 675
        },
        'type': 'fishing'
    },
    {
        'img': 'assets/img/res.jpg',
        'img2': 'assets/img/r1.jpg',
        'address': 'Алтай',
        'phone': 73217255225,
        'weather': {
            'title': 'Облачно',
            'icon': 'cloud',
            'water': 25,
            'temperature': 25
        },
        'social_info': {
            'title': 'Профиль на сайте',
            'img': 'assets/img/b1.jpg',
            'followers': 45850,
            'following': 75
        },
        'type': 'tour'
    }
];
export const data: Observable<IInfo[]> = of(_data);
