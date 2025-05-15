import React from 'react';

const Dinner = () => {
    return (
        <div>
            <div className="week">
                <h2>Кето-ужины на неделю</h2>
                <div className="tips">
                    <h3>💡 Советы по кето-ужинам</h3>
                    <ul>
                        <li>Ужин должен быть самым лёгким приёмом пищи за день</li>
                        <li>Сделайте акцент на белок и зелёные овощи</li>
                        <li>Избегайте тяжёлых жиров перед сном</li>
                        <li>Идеальное время для ужина - за 3-4 часа до сна</li>
                        <li>Если не голодны - можно пропустить ужин или сделать лёгкий перекус</li>
                    </ul>
                </div>

                <div className="food-list">
                    <div className="allowed">
                        <h3>Идеальные продукты для ужина</h3>
                        <ul>
                            <li>Рыба и морепродукты</li>
                            <li>Курица и индейка</li>
                            <li>Зелёные овощи</li>
                            <li>Лёгкие сыры (фета, моцарелла)</li>
                            <li>Яйца (омлеты, фриттаты)</li>
                        </ul>
                    </div>

                    <div className="forbidden">
                        <h3>Что не стоит есть на ужин</h3>
                        <ul>
                            <li>Жирное красное мясо (тяжело для пищеварения)</li>
                            <li>Орехи и семечки (высокая калорийность)</li>
                            <li>Кисломолочные продукты (могут вызывать всплеск инсулина)</li>
                            <li>Сладкие овощи (помидоры, морковь)</li>
                            <li>Фрукты и ягоды</li>
                        </ul>
                    </div>
                <div className="day">
                    <h3><span className="emoji">🥘</span> Понедельник</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Жареная утка с брюссельской капустой</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Пюре из цветной капусты со сливками</div>
                    <div className="meal"><span className="meal-title">Соус:</span> Вишнёвый (без сахара)</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🍖</span> Вторник</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Свиные отбивные с грибным соусом</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Запечённые цукини с сыром</div>
                    <div className="meal"><span className="meal-title">Салат:</span> Шпинат с козьим сыром</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🐟</span> Среда</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Лосось в сливочном соусе</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Спаржа на гриле</div>
                    <div className="meal"><span className="meal-title">Дополнительно:</span> Авокадо с лимонным соком</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🥩</span> Четверг</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Стейк из говядины с голубым сыром</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Жареные шампиньоны</div>
                    <div className="meal"><span className="meal-title">Салат:</span> Руккола с пармезаном</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🍗</span> Пятница</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Куриные бедра с хрустящей кожей</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Брокколи в сырном соусе</div>
                    <div className="meal"><span className="meal-title">Соус:</span> Чеснок-айоли</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🥓</span> Суббота</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Бекон-чедер бургер (без булочки)</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Жареные стручки фасоли</div>
                    <div className="meal"><span className="meal-title">Добавка:</span> Домашний майонез</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🧀</span> Воскресенье</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Сырное фондю (без хлеба)</div>
                    <div className="meal"><span className="meal-title">Для макания:</span> Овощи (редис, огурцы, сельдерей)</div>
                    <div className="meal"><span className="meal-title">Напиток:</span> Сухое красное вино (150 мл)</div>
                </div>
            </div>

            <div className="tips">
                <h3>💡 Бюджетные советы</h3>
                <ul>
                    <li>Покупайте куриные окорочка и печень - они дешевле грудок</li>
                    <li>Используйте замороженные овощи - они дешевле свежих</li>
                    <li>Консервы из рыбы - доступный источник жиров и белка</li>
                    <li>Свиная грудинка - самый дешёвый жирный кусок</li>
                    <li>Яйца - идеальный бюджетный кето-продукт</li>
                </ul>
            </div>

            <div className="week">
                <h2>Бюджетные кето-ужины</h2>

                <div className="day">
                    <h3><span className="emoji">🥚</span> Понедельник</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Яичница с консервированными шпротами</div>
                    <div className="meal"><span className="meal-title">Добавка:</span> Листовой салат</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🧀</span> Вторник</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Творог 9% с зеленью</div>
                    <div className="meal"><span className="meal-title">Добавка:</span> Огурец</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🍗</span> Среда</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Куриная печень в сметане</div>
                    <div className="meal"><span className="meal-title">Гарнир:</span> Тушёные кабачки</div>
                </div>

                <div className="day">
                    <h3><span className="emoji">🥓</span> Четверг</h3>
                    <div className="meal"><span className="meal-title">Основное:</span> Омлет с беконом</div>
                    <div className="meal"><span className="meal-title">Добавка:</span> Помидор</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Dinner;