import React from 'react';

const Lunch = () => {
    return (
        <div>
            <div className="week">
                <h2>Кето-обеды на неделю</h2>
                <div className="food-list">
                    <div className="allowed">
                        <h3>Лучшие продукты для кето-обеда</h3>
                        <ul>
                            <li>Жирные куски мяса (грудинка, бедра, ребра)</li>
                            <li>Дикая рыба (лосось, скумбрия, тунец)</li>
                            <li>Органические субпродукты (печень, сердце)</li>
                            <li>Сезонные низкоуглеводные овощи</li>
                            <li>Домашние соусы на основе майонеза или сметаны</li>
                        </ul>
                    </div>

                    <div className="forbidden">
                        <h3>Что исключить</h3>
                        <ul>
                            <li>Крупы и каши (рис, гречка, киноа)</li>
                            <li>Картофель и другие крахмалистые овощи</li>
                            <li>Фабричные соусы (кетчуп, соевый соус)</li>
                            <li>Панировка и мучные изделия</li>
                            <li>Сладкие напитки и соки</li>
                        </ul>
                    </div>
                </div>
                <div className="tips">
                    <h3>💡 Советы по кето-обедам</h3>
                    <ul>
                        <li>Используйте качественные жиры для приготовления (сливочное, кокосовое, оливковое масло)</li>
                        <li>Не бойтесь соли - она особенно важна на кето-диете</li>
                        <li>Сочетайте мясо с зелеными овощами для лучшего усвоения</li>
                        <li>Готовьте большие порции, чтобы оставалось на ужин или следующий день</li>
                        <li>Для экономии времени используйте мультиварку или духовку для запекания</li>
                    </ul>
                </div>
                <div className="day">
                    <h3><span className="emoji">🥩</span> Понедельник</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Стейк рибай с печеными овощами</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Цветная капуста "пюре" со сливочным маслом</div>
                    <div className="meal"><span className="meal-title">Салат:</span> Листовая зелень с оливковым маслом и пармезаном</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🍗</span> Вторник</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Куриные бедра с хрустящей кожей</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Жареные баклажаны с чесноком</div>
                    <div className="meal"><span className="meal-title">Соус:</span> Сметанный с зеленью</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🐟</span> Среда</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Лосось на гриле с лимоном</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Спаржа с голландским соусом</div>
                    <div className="meal"><span className="meal-title">Дополнительно:</span> Авокадо с морской солью</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🥘</span> Четверг</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Говяжий гуляш с грибами</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Тушеная капуста с беконом</div>
                    <div className="meal"><span className="meal-title">Добавка:</span> Тертый сыр чеддер</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🍖</span> Пятница</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Свиные ребрышки медленного приготовления</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Зеленые бобы с миндалем</div>
                    <div className="meal"><span className="meal-title">Соус:</span> Костный бульон с травами</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🦆</span> Суббота</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Утиная грудка с апельсиновым глазурью (без сахара)</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Жареные цукини с розмарином</div>
                    <div className="meal"><span className="meal-title">Салат:</span> Руккола с грецкими орехами</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🥗</span> Воскресенье</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Стейк из тунца с кунжутной корочкой</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Шпинат со сливками</div>
                    <div className="meal"><span className="meal-title">Дополнительно:</span> Оливки и каперсы</div>
                </div>
            </div>



            <div className="week">
                <h2>Бюджетные кето-обеды</h2>

                <div className="day">
                    <h3><span className="emoji">🍗</span> Понедельник</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Куриные окорочка, запечённые в духовке</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Тушёная капуста</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🥩</span> Вторник</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Говяжий фарш, обжаренный с луком</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Салат из свежей капусты</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🐟</span> Среда</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Сельдь солёная с картошкой (заменить на редис)</div>
                    <div className="meal"><span className="meal-title">Добавка:</span> Сметанный соус</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🍖</span> Четверг</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Свиные рёбрышки тушёные</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Замороженная брокколи</div>
                </div>
            </div>

        </div>
    );
};

export default Lunch;